function ScoreBoard(props) {
  return (
    <div className="scoreboard">
      <div className="current-score">Score: {props.currentScore}</div>
      <div className="best-score">Best Score: {props.bestScore}</div>
    </div>
  );
}

export default ScoreBoard;
