import { useState } from "react";
import Ball from "../components/ball";
import ButtonReassert from "./Button reassert ";
import WeenBox from "./weenBox";
import SelcteLevel from "./SelectorLevel";
import LossBox from "./LossBox";
import StartGame from "./StartGame";
import ButtonToTheInstructions from "./ButtonToTheInstructions";

import "./css/game.css";
// The all levels of the game.
import { objectGame } from "./objectGamo";
// A function to chack the option in the bord.
import { findeListOption } from "./otion in list";
// the option of the balls.
import {
  emptyBallColor,
  greenBallColor,
  whiteBallColor,
  blackBallColor,
  whiteBallColorChoice,
  blackBallColorChoice,
} from "./colors balls";

// Default number game.
let numberGame = "1";

let startGame = false;

// To know if the game is over.
let gameWeen = false;
let gameLoss = false;

// Get a list with the numbers of the levels game.
let listNumberOfOptionGame = Object.keys(objectGame);

// A list of the objects.
let listGameBall = objectGame[numberGame];
let moveGame = [];

// Create the same list of listGameBall.
listGameBall.map((item, index) => {
  moveGame.push([]);
  item.map((box) => {
    moveGame[index].push(box);
  });
});

let listGoodMove = [];

// Main function.
function Game() {
  // A list of the objects, to change the bord of the screen
  let [getListGame, setListGame] = useState(() => [...moveGame]);

  // Start the game.
  function changeStartGame() {
    startGame = true;
    setListGame([...getListGame]);
  }
  // To go back o the instructions.
  function toTheInstructions() {
    startGame = false;
    setListGame([...getListGame]);
  }

  // To resstart agane the game.
  function refreshTheGame(number) {
    numberGame = number;
    gameWeen = false;
    gameLoss = false;
    moveGame = [];
    objectGame[number].map((item, index) => {
      moveGame.push([]);
      item.map((box) => {
        moveGame[index].push(box);
      });
    });
    setListGame(moveGame);
  }

  // Chack if lest only a black ball
  function chackIfWeen() {
    for (let i = 0; i < moveGame.length; i++) {
      const row = moveGame[i];
      for (let j = 0; j < row.length; j++) {
        const column = moveGame[i][j];
        if (column == whiteBallColor) return false;
      }
    }
    return true;
  }

  // Chack if the is a option to move.
  function chackIfLoss() {
    for (let i = 0; i < moveGame.length; i++) {
      const row = moveGame[i];
      for (let j = 0; j < row.length; j++) {
        if (findeListOption(i, j, moveGame).length > 0) return false;
      }
    }
    return true;
  }
  // Move the balls onClick.
  function colorTheRiteMove(row, column) {
    // If it's now a ball.
    if (getListGame[row][column] == emptyBallColor) {
      return;
    }
    // Create a new list.
    let newListGame = [];
    moveGame.map((item, index) => {
      newListGame.push([]);
      item.map((box) => {
        newListGame[index].push(box);
      });
    });
    // If the press is of a plase thet can move.
    if (getListGame[row][column] == greenBallColor) {
      listGoodMove.map((item, index) => {
        if (item.move[0] == row && item.move[1] == column) {
          newListGame[item.move[0]][item.move[1]] =
            newListGame[item.ball[0]][item.ball[1]];
          newListGame[item.ball[0]][item.ball[1]] = emptyBallColor;
          newListGame[item.over[0]][item.over[1]] = emptyBallColor;
          moveGame[item.move[0]][item.move[1]] =
            moveGame[item.ball[0]][item.ball[1]];
          moveGame[item.ball[0]][item.ball[1]] = emptyBallColor;
          moveGame[item.over[0]][item.over[1]] = emptyBallColor;
          // Chack if the user ween.
          gameWeen = chackIfWeen();
          // If is not ween, is chack if ther movment in the bord.
          if (!gameWeen) {
            gameLoss = chackIfLoss();
          }
        }
      });
    } else if (
      [whiteBallColor, blackBallColor].includes(getListGame[row][column])
    ) {
      // Make the ball bold.
      if (getListGame[row][column] == whiteBallColor) {
        newListGame[row][column] = whiteBallColorChoice;
      } else if (getListGame[row][column] == blackBallColor) {
        newListGame[row][column] = blackBallColorChoice;
      }
      // Get a list of the option to move.
      listGoodMove = findeListOption(row, column, moveGame);
      // Change the plase of the option to a green mode.
      listGoodMove.map((item) => {
        newListGame[item.move[0]][item.move[1]] = greenBallColor;
      });
    }
    // update the bord.
    setListGame(newListGame);
  }

  return (
    <>
      {
        // chack if the game start.
        !startGame ? (
          <StartGame func={changeStartGame} />
        ) : (
          <>
            <div className="div-control">
              <ButtonToTheInstructions func={toTheInstructions} />
              <ButtonReassert func={refreshTheGame} numberGame={numberGame} />
            </div>
            <div className="div-game">
              <span>Number level : {numberGame}</span>
              <div className="board">
                {getListGame.map((item, indexRow) => {
                  return (
                    <div key={indexRow} className="line">
                      {item.map((i, indexColumn) => (
                        <Ball
                          func={colorTheRiteMove}
                          indexRow={indexRow}
                          indexColumn={indexColumn}
                          key={indexColumn}
                          style={i}
                        />
                      ))}
                    </div>
                  );
                })}
                {
                  // if ween game.
                  gameWeen === true ? (
                    <WeenBox func={refreshTheGame} numberGame={numberGame} />
                  ) : null
                }
                {
                  // if loss game.
                  gameLoss === true ? (
                    <LossBox func={refreshTheGame} numberGame={numberGame} />
                  ) : null
                }
              </div>
            </div>

            <div className="selcte-level">
              <SelcteLevel
                listOption={listNumberOfOptionGame}
                func={refreshTheGame}
              />
            </div>
          </>
        )
      }
    </>
  );
}

export default Game;
