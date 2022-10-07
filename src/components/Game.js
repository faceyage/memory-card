import { useState, useEffect } from "react";
import ScoreBoard from "./ScoreBoard";
import Cards from "./Cards";
import uniqid from "uniqid";

function Game(props) {
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    }
  }, [currentScore, bestScore]);

  useEffect(() => {
    setCards(getHeroes());
  }, []);

  const createCard = (name, img) => {
    const newCard = {
      name,
      img,
      id: uniqid(),
      clicked: false,
    };
    return newCard;
  };

  const getHeroes = () => {
    const heroes = [];
    heroes.push(createCard("Avocado", "avocado.jpg"));
    heroes.push(createCard("Hue", "hue.webp"));
    heroes.push(createCard("Mooncake", "mooncake.webp"));
    heroes.push(createCard("ash", "ash.webp"));
    heroes.push(createCard("gary", "gary.webp"));
    heroes.push(createCard("biskit", "biskit.webp"));
    heroes.push(createCard("lord_commander", "lord_commander.jpg"));
    heroes.push(createCard("bolo", "bolo.jpg"));
    heroes.push(createCard("little_cato", "little_cato.webp"));
    return heroes;
  };

  //shuffles cards array state
  const shuffleCards = () => {
    setCards(cards.sort(() => Math.random() - 0.5));
  };

  const endGame = () => {
    setCurrentScore(0);
    setCards(
      cards.map((card) => {
        card.clicked = false;
        return card;
      })
    );
  };

  const handleClick = (id) => {
    cards.forEach((card) => {
      if (card.id === id) {
        if (card.clicked) endGame();
        else {
          setCurrentScore(currentScore + 1);
          clickCard(id);
        }
      }
    });
    //shuffle cards after click
    shuffleCards();
  };

  const clickCard = (id) => {
    cards.map((card) => {
      if (card.id === id) {
        card.clicked = true;
      }
      return card;
    });
  };

  return (
    <div className="game">
      <Cards handleClick={handleClick} cards={cards} />
      <ScoreBoard currentScore={currentScore} bestScore={bestScore} />
    </div>
  );
}

export default Game;
