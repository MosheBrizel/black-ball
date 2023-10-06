import "./css/startGame.css";

function StartGame(prope) {
  // start the game on the board.
  function toStart() {
    prope.func();
  }
  return (
    <>
      <div className="box-start">
        <div className="black-ball">
          <span>
            Welcome to the game <br /> black ball
          </span>
        </div>
        <div className="start-game">
          <h1>Objective</h1>
          <h3>
            The objective of the game is to remove all of the white balls from
            the game board, leaving only a single dark ball remaining.
          </h3>
          <h2>How to Play</h2>
          <ul>
            <li>
              Each game level starts with a pattern of dark and white balls
              arranged on the game board.
            </li>
            <li>
              To remove a white ball, you must jump over it with another ball
              (either white or dark).
            </li>
            <li>
              You can only jump over one ball at a time, in a straight line into
              an empty space.
            </li>
            <li>You cannot move a ball without jumping over another ball.</li>
            <li>
              Once a ball is jumped over, it is removed from the game board.
            </li>
            <li>
              Continue jumping over and removing white balls until only one dark
              ball remains on the game board to complete the card.
            </li>
            <li>
              There are 47 game levels included, with increasing difficulty
              levels, plus one bonus card.
            </li>
            <li>The game is over once you have completed all game cards.</li>
          </ul>
          <button onClick={toStart}>start</button>
        </div>
      </div>
    </>
  );
}
export default StartGame;
