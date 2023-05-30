import { useCallback, useEffect, useState } from "react";
import { Utils } from "./utils";
import useArrowKeyPress, { Direction } from "./hooks/useArrowKeyPress";

const initGrid = (): number[][] => {
  const grid = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];

  let row = Utils.getRandomInt(3);
  let col = Utils.getRandomInt(3);

  grid[row][col] = 2;

  while (grid[row][col] != 0) {
    row = Utils.getRandomInt(3);
    col = Utils.getRandomInt(3);
  }

  grid[row][col] = 2;

  return grid;
};

const TwentyFortyEight: React.FC = () => {
  const [grid, setGrid] = useState<number[][]>(initGrid());

  const didWin = useCallback(() => {
    return grid.some((row) => row.some((val) => val === 2048));
  }, [grid]);

  const didLoose = useCallback(() => {
    return !grid.some((row) => row.some((val) => val === 0));
  }, [grid]);

  const handleArrowKeyPress = (dir: Direction) => {
    console.log(dir);

    // TODO: Handle dirs

    if (didWin()) {
      console.log("You won!");
    } else if (didLoose()) {
      console.log("You lost!");
    }
  };
  useArrowKeyPress(handleArrowKeyPress);

  useEffect(() => {
    grid.forEach((row) => console.log(row));
  }, [grid]);

  return <div>Welcome to 2048!</div>;
};

export default TwentyFortyEight;
