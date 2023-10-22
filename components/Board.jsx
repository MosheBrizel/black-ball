import Ball from "../components/ball";
import LossBox from "./LossBox";
import WeenBox from "./weenBox";

function Board(prmps) {
  return (
    <div className="board">
      {prmps.list.map((item, indexRow) => {
        return (
          <div key={indexRow} className="line">
            {item.map((i, indexColumn) => (
              <Ball
                func={prmps.funcColorTheRiteMove}
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
        prmps.gameWeen === true ? (
          <WeenBox
            func={prmps.funcRefreshTheGame}
            numberGame={prmps.numberGame}
          />
        ) : null
      }
      {
        // if loss game.
        prmps.gameLoss === true ? (
          <LossBox
            func={prmps.funcRefreshTheGame}
            numberGame={prmps.numberGame}
          />
        ) : null
      }
    </div>
  );
}
export default Board;
