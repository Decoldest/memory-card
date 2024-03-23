import {useState, useEffect } from "react";
import PropTypes from 'prop-types';

const randomIndices = new Set();
while (randomIndices.size != 8) {
  randomIndices.add(Math.floor(Math.random() * 427) + 1);
}

App.propTypes = {
  difficulty: PropTypes.number.isRequired,
};

export default function App({ difficulty }) {
  const [cardData, setCardData] = useState([]);
  const characterIndices = [...randomIndices].slice(0, difficulty);

  useEffect(() => {
    async function getCharacters() {
      try {
        const fetchedCharacterData = await Promise.all(
          characterIndices.map(async (index) => {
            const response = await fetch(
              `https://futuramaapi.com/api/characters/${index}`,
              { mode: "cors" },
            );
            const characterData = await response.json();
            return characterData;
          }),
        );
        setCardData(fetchedCharacterData);
      } catch (error) {
        console.log(error);
      }
    }
    getCharacters();
  }, []);

  return (
    <div>
      <h2>hello</h2>
      <ul>
        {cardData.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
}
