import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Card from "./components/Card";
import Score from "./components/Score";
import GameOver from "./components/GameOver";

import "./App.css";

const indices = [
  1, 16, 24, 131, 143, 172, 179, 206, 134, 267, 278, 279, 305, 320, 363, 420,
  421, 423, 424, 425,
];

App.propTypes = {
  difficulty: PropTypes.number.isRequired,
};

function shuffleArray(array) {
  let currentIndex = array.length;

  while (currentIndex--) {
    const randomIndex = Math.floor(Math.random() * currentIndex);

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export default function App({ difficulty }) {
  const [cardData, setCardData] = useState([]);
  const [score, setScore] = useState(0);
  const [seenCharacters, setSeenCharacters] = useState([]);
  const [gameOver, setGameOver] = useState({ isOver: false, win: false });

  const shuffleCardState = () => {
    const temp = shuffleArray([...cardData]);
    setCardData(temp);
  };

  function handleCardClick(id) {
    if (seenCharacters.includes(id)) {
      setGameOver({ isOver: true, win: false });

      return;
    }

    setScore(score + 1);
    setSeenCharacters([...seenCharacters, id]);

    if (score === difficulty - 1) {
      setGameOver({ isOver: true, win: true });
    } else {
      shuffleCardState();
    }
  }

  useEffect(() => {
    const characterIndices = shuffleArray(indices).slice(0, difficulty);

    async function getCharacters() {
      try {
        const fetchedCharacterData = await Promise.all(
          characterIndices.map(async (index) => {
            const response = await fetch(
              `https://futuramaapi.com/api/characters/${index}`,
              { mode: "cors" },
            );
            const characterData = await response.json();
            return characterData ? characterData : null;
          }),
        );
        const validCharacterData = fetchedCharacterData.filter((character) => {
          return character.image !== null;
        });

        setCardData(validCharacterData);
      } catch (error) {
        console.log(error);
      }
    }
    getCharacters();
  }, [difficulty]);

  return (
    <div>
      <div>
        <Score score={score} />
      </div>
      <div className="card-container">
        {cardData.map((character) => (
          <Card
            key={character.id}
            id={character.id}
            img={character.image}
            name={character.name}
            onClick={() => handleCardClick(character.id)}
          />
        ))}
      </div>
      {gameOver.isOver && <GameOver win={gameOver.win} />}
    </div>
  );
}
