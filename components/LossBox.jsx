import "./css/divLossBox.css";

function LossBox(prope) {
  // Reassert the board.
  function playNext() {
    prope.func(prope.numberGame);
  }
  return (
    <>
      <div className="loss-box">
        <h3>There are no more options</h3>
        <button onClick={playNext}>reassert 🔄</button>
      </div>
    </>
  );
}
export default LossBox;
