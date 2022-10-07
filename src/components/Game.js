import { useState, useEffect } from "react";
import ScoreBoard from "./ScoreBoard";
import Cards from "./Cards";
import uniqid from "uniqid";

//import character images
import avocado from "../images/characters/avocado.jpg";
import ash from "../images/characters/ash.webp";
import biskit from "../images/characters/biskit.webp";
import bolo from "../images/characters/bolo.jpg";
import gary from "../images/characters/gary.webp";
import hue from "../images/characters/hue.webp";
import little_cato from "../images/characters/little_cato.webp";
import lord_commander from "../images/characters/lord_commander.jpg";
import mooncake from "../images/characters/mooncake.webp";

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
    heroes.push(createCard("Avocado", avocado));
    heroes.push(createCard("Hue", hue));
    heroes.push(createCard("Mooncake", mooncake));
    heroes.push(createCard("ash", ash));
    heroes.push(createCard("gary", gary));
    heroes.push(createCard("biskit", biskit));
    heroes.push(createCard("lord_commander", lord_commander));
    heroes.push(createCard("bolo", bolo));
    heroes.push(createCard("little_cato", little_cato));
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
