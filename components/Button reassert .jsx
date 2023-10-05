import '../public/css/Button.css'
function buttonReassert(prope) {
  // Play the function refreshTheGame in the game page.
    function reassert(){
        prope.func(prope.numberGame)
    }
  return <>
  <button className='button' onClick={reassert}>reassert 🔄</button>
  </>;
}
export default buttonReassert;
