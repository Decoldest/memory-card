import { useState, useEffect } from "react";
import Game from "./components/Game";
import Score from "./components/Score";
import GameOver from "./components/GameOver";
import Start from "./Start";

import "./App.css";

const indices = [
  1, 16, 24, 131, 143, 172, 179, 206, 134, 267, 278, 279, 305, 320, 363, 420,
  421, 423, 424, 425,
];

export default function App() {
  const [characterData, setCharacterData] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState({ isOver: false, win: false });
  const [difficulty, setDifficulty] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [bestScore, setBestScore] = useState(0);

  function resetGame() {
    setScore(0);
    setIsPlaying(false);
    setGameOver({ isOver: false, win: false });
  }

  function checkBestScore() {
    if (score > bestScore) {
      setBestScore(score);
    }
  }

  useEffect(() => {
    async function getCharacters() {
      try {
        const fetchedCharacterData = await Promise.all(
          indices.map(async (index) => {
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

        setCharacterData(validCharacterData);
      } catch (error) {
        console.log(error);
      }
    }
    getCharacters();
  }, [difficulty]);

  return (
    <main>
      {!isPlaying ? (
        <Start setDifficulty={setDifficulty} setIsPlaying={setIsPlaying} />
      ) : (
        <div>
          <div className="score">
            <Score score={score} bestScore={bestScore} />
          </div>
          <Game
            characterData={characterData}
            gameOver={gameOver}
            setGameOver={setGameOver}
            score={score}
            setScore={setScore}
            difficulty={difficulty}
            checkBestScore={checkBestScore}
          />
        </div>
      )}
      {gameOver.isOver && <GameOver win={gameOver.win} resetGame={resetGame} />}
    </main>
  );
}
