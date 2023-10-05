import { useState } from "react";
import './App.css'
import Game from "../components/game";
function App(params) {
  return (
    <>
      <div className="main">
        <Game />
      </div>
    </>
  );
}

export default App;
