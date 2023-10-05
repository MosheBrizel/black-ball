import '../public/css/divWeenBox.css'

function weenBox(prope) {
  // start the game of the naxt level.
    function playNext(){
        prope.func(Number(prope.numberGame) + 1)
    }
  return (
    <>
      <div className="weembox">
        <h3>you pess the level</h3>
        <button onClick={playNext}>play next level</button>
      </div>
    </>
  );
}
export default weenBox;
