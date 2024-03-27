import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Card from "./Card";

Game.propTypes = {
  characterData: PropTypes.array,
  gameOver: PropTypes.object,
  setGameOver: PropTypes.func,
  score: PropTypes.number,
  setScore: PropTypes.func,
  difficulty: PropTypes.number,
  checkBestScore: PropTypes.func,
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

export default function Game({
  characterData,
  gameOver,
  setGameOver,
  score,
  setScore,
  difficulty,
  checkBestScore,
}) {
  const [seenCharacters, setSeenCharacters] = useState([]);
  const [cardStates, setCardStates] = useState([]);

  useEffect(() => {
    setCardStates(shuffleArray([...characterData]).splice(0, difficulty));
  }, [characterData, difficulty]);

  const shuffleCardState = () => {
    const temp = shuffleArray([...cardStates]);
    setCardStates(temp);
  };

  function handleCardClick(id) {
    if (gameOver.isOver) return;
    if (seenCharacters.includes(id)) {
      checkBestScore();
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

  return (
    <div className="card-container">
      {cardStates.map((character) => (
        <Card
          key={character.id}
          id={character.id}
          img={character.image}
          name={character.name}
          onClick={() => handleCardClick(character.id)}
        />
      ))}
    </div>
  );
}
