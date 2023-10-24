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
            Remove all white balls from each level by jumping over them, leaving
            only one dark ball on the board.
          </h3>
          <h2>How to Play</h2>
          <ul>
            <li>
              Each level displays a pattern of dark and white balls on the game
              board.
            </li>
            <li>
              Click any ball to see possible legal jumps highlighted in green.
            </li>
            <li>
              Click a green highlight to make that jump. The chosen ball will
              move, removing the jumped over ball.
            </li>
            <li>
              Only single jumps are allowed, landing in an empty space
              horizontally, vertically or diagonally.
            </li>
            <li>
              You must always jump over a ball, never moving without jumping
              over a ball.
            </li>
            <li>
              Continue jumping over and removing white balls until just one dark
              ball remains to clear the level.
            </li>
            <li>
              Advance to the next level by clicking "next" after clearing the
              board.
            </li>
            <li>
              There are 47 increasingly difficult levels, plus a challenging
              bonus level.
            </li>
            
          </ul>
          <button onClick={toStart}>start</button>
        </div>
      </div>
    </>
  );
}
export default StartGame;
