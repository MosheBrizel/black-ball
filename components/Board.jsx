import Ball from "../components/ball";
import LossBox from "./LossBox";
import WeenBox from "./weenBox";
import ScrollMark from "./ScrollMark";
function Board(prmps) {
  return (
    <div className="board">
      <ScrollMark key={1} id={1} />
      <ScrollMark key={2} id={2} />
      <ScrollMark key={3} id={3} />
      <ScrollMark key={4} id={4} />
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
