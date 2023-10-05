import { emptyBallColor, whiteBallColor, blackBallColor } from "./colors balls";

export function findeListOption(row, column, listGame) {
  let listOption = [];
  if (listGame[row][column] == emptyBallColor) return listOption;
  if ([1, 3].includes(row)) {
    if (listGame[2][1] === whiteBallColor) {
      if (row == 1 && listGame[3][(column + 1) % 2] == emptyBallColor) {
        listOption.push({
          ball: [row, column],
          move: [3, (column + 1) % 2],
          over: [2, 1],
        });
      } else if (row == 3 && listGame[1][(column + 1) % 2] == emptyBallColor) {
        listOption.push({
          ball: [row, column],
          move: [1, (column + 1) % 2],
          over: [2, 1],
        });
      } else {
        return listOption;
      }
    }
  } else {
    if (row == 0) {
      if (column == 0) {
        if (
          listGame[2][0] == whiteBallColor &&
          listGame[4][0] == emptyBallColor
        ) {
          listOption.push({ over: [2, 0], ball: [row, column], move: [4, 0] });
        }
        if (
          listGame[0][1] == whiteBallColor &&
          listGame[0][2] == emptyBallColor
        ) {
          listOption.push({ over: [0, 1], ball: [row, column], move: [0, 2] });
        }

        if (
          listGame[1][0] == whiteBallColor &&
          listGame[2][1] == emptyBallColor
        ) {
          listOption.push({ over: [1, 0], ball: [row, column], move: [2, 1] });
        }
      } else if (column == 1) {
        if (
          listGame[2][1] == whiteBallColor &&
          listGame[4][1] == emptyBallColor
        ) {
          listOption.push({ over: [2, 1], ball: [row, column], move: [4, 1] });
        }
        if (
          listGame[1][0] == whiteBallColor &&
          listGame[2][0] == emptyBallColor
        ) {
          listOption.push({ over: [1, 0], ball: [row, column], move: [2, 0] });
        }

        if (
          listGame[1][1] == whiteBallColor &&
          listGame[2][2] == emptyBallColor
        ) {
          listOption.push({ over: [1, 1], ball: [row, column], move: [2, 2] });
        }
      } else if (column == 2) {
        if (
          listGame[0][1] == whiteBallColor &&
          listGame[0][0] == emptyBallColor
        ) {
          listOption.push({ over: [0, 1], ball: [row, column], move: [0, 0] });
        }
        if (
          listGame[1][1] == whiteBallColor &&
          listGame[2][1] == emptyBallColor
        ) {
          listOption.push({ over: [1, 1], ball: [row, column], move: [2, 1] });
        }

        if (
          listGame[2][2] == whiteBallColor &&
          listGame[4][2] == emptyBallColor
        ) {
          listOption.push({ over: [2, 2], ball: [row, column], move: [4, 2] });
        }
      }
    } else if (row == 2) {
      if (column == 0) {
        if (
          listGame[1][0] == whiteBallColor &&
          listGame[0][1] == emptyBallColor
        ) {
          listOption.push({ over: [1, 0], ball: [row, column], move: [0, 1] });
        }
        if (
          listGame[2][1] == whiteBallColor &&
          listGame[2][2] == emptyBallColor
        ) {
          listOption.push({ over: [2, 1], ball: [row, column], move: [2, 2] });
        }

        if (
          listGame[3][0] == whiteBallColor &&
          listGame[4][1] == emptyBallColor
        ) {
          listOption.push({ over: [3, 0], ball: [row, column], move: [4, 1] });
        }
      } else if (column == 1) {
        if (
          listGame[1][0] == whiteBallColor &&
          listGame[0][0] == emptyBallColor
        ) {
          listOption.push({ over: [1, 0], ball: [row, column], move: [0, 0] });
        }
        if (
          listGame[1][1] == whiteBallColor &&
          listGame[0][2] == emptyBallColor
        ) {
          listOption.push({ over: [1, 1], ball: [row, column], move: [0, 2] });
        }

        if (
          listGame[3][0] == whiteBallColor &&
          listGame[4][0] == emptyBallColor
        ) {
          listOption.push({ over: [3, 0], ball: [row, column], move: [4, 0] });
        }
        if (
          listGame[3][1] == whiteBallColor &&
          listGame[4][2] == emptyBallColor
        ) {
          listOption.push({ over: [3, 1], ball: [row, column], move: [4, 2] });
        }
      } else if (column == 2) {
        if (
          listGame[1][1] == whiteBallColor &&
          listGame[0][1] == emptyBallColor
        ) {
          listOption.push({ over: [1, 1], ball: [row, column], move: [0, 1] });
        }
        if (
          listGame[2][1] == whiteBallColor &&
          listGame[2][0] == emptyBallColor
        ) {
          listOption.push({ over: [2, 1], ball: [row, column], move: [2, 0] });
        }

        if (
          listGame[3][1] == whiteBallColor &&
          listGame[4][1] == emptyBallColor
        ) {
          listOption.push({ over: [3, 1], ball: [row, column], move: [4, 1] });
        }
      }
    } else if (row == 4) {
      if (column == 0) {
        if (
          listGame[2][0] == whiteBallColor &&
          listGame[0][0] == emptyBallColor
        ) {
          listOption.push({ over: [2, 0], ball: [row, column], move: [0, 0] });
        }
        if (
          listGame[3][0] == whiteBallColor &&
          listGame[2][1] == emptyBallColor
        ) {
          listOption.push({ over: [3, 0], ball: [row, column], move: [2, 1] });
        }

        if (
          listGame[4][1] == whiteBallColor &&
          listGame[4][2] == emptyBallColor
        ) {
          listOption.push({ over: [4, 1], ball: [row, column], move: [4, 2] });
        }
      } else if (column == 1) {
        if (
          listGame[3][0] == whiteBallColor &&
          listGame[2][0] == emptyBallColor
        ) {
          listOption.push({ over: [3, 0], ball: [row, column], move: [2, 0] });
        }
        if (
          listGame[2][1] == whiteBallColor &&
          listGame[0][1] == emptyBallColor
        ) {
          listOption.push({ over: [2, 1], ball: [row, column], move: [0, 1] });
        }
        if (
          listGame[3][1] == whiteBallColor &&
          listGame[2][2] == emptyBallColor
        ) {
          listOption.push({ over: [3, 1], ball: [row, column], move: [2, 2] });
        }
      } else if (column == 2) {
        if (
          listGame[4][1] == whiteBallColor &&
          listGame[4][0] == emptyBallColor
        ) {
          listOption.push({ over: [4, 1], ball: [row, column], move: [4, 0] });
        }
        if (
          listGame[3][1] == whiteBallColor &&
          listGame[2][1] == emptyBallColor
        ) {
          listOption.push({ over: [3, 1], ball: [row, column], move: [2, 1] });
        }

        if (
          listGame[2][2] == whiteBallColor &&
          listGame[0][2] == emptyBallColor
        ) {
          listOption.push({ over: [2, 2], ball: [row, column], move: [0, 2] });
        }
      }
    }
  }
  return listOption;
}
