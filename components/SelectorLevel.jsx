import { useState } from "react";
import "../public/css/selector.css";
function SelcteLevel(prope) {
  let [getSelctorValue, setSelctorValue] = useState("1");
  // If it's change it's sent to the function to change the board.
  function selctorChange(event) {
    setSelctorValue(event.target.value);
    chngeTheBorde(event.target.value);
  }
  // if he click on play it's change ths board.
  function sentValue(){
    chngeTheBorde(getSelctorValue)
  }
  // play the function on the game page.
  function chngeTheBorde(value) {
    prope.func(value);
  }
  return (
    <>
      <div className="selsct-level">
        <span>level</span>
        <select
          value={getSelctorValue}
          onChange={selctorChange}
          name="level"
          id="level"
        >
          {prope.listOption.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>
        <button onClick={sentValue}>play</button>
      </div>
    </>
  );
}
export default SelcteLevel;
