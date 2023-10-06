import "./css/Ball.css";

function Bool(prope) {
  // Press of the ball will send the index to the function colorTheRiteMove in the game page.
  function sendIndexToGame() {
    prope.func(prope.indexRow, prope.indexColumn);
  }
  return (
    <>
      <div className="frame-ball">
        <div
          onClick={sendIndexToGame}
          style={prope.style}
          className="ball"
        ></div>
      </div>
    </>
  );
}
export default Bool;
