import { useCallback, useEffect, useState } from "react";
import { Utils } from "./utils";
import GridController from "./2048/GridController";
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

// FIXME: For some reason, being called twice.
const insertNewTile = (grid: number[][]): number[][] => {
  const newGrid = [...grid];

  let row = Utils.getRandomInt(3);
  let col = Utils.getRandomInt(3);

  // Randomly find an open position.
  while (newGrid[row][col] !== 0) {
    row = Utils.getRandomInt(3);
    col = Utils.getRandomInt(3);
  }

  newGrid[row][col] = 2;

  return newGrid;
};

const didWin = (grid: number[][]): boolean => {
  return grid.some((row) => row.some((val) => val === 2048));
};

const didLoose = (grid: number[][]): boolean => {
  return !grid.some((row) => row.some((val) => val === 0));
};

const TwentyFortyEight: React.FC = () => {
  const [grid, setGrid] = useState<number[][]>(initGrid());

  const handleArrowKeyPress = (dir: Direction) => {
    console.log(dir);

    let newGrid: number[][] = [];

    switch (dir) {
      case Direction.Left:
        newGrid = GridController.moveLeft(grid);
        break;
      case Direction.Right:
        newGrid = GridController.moveRight(grid);
        break;
      case Direction.Up:
        newGrid = GridController.moveUp(grid);
        break;
      case Direction.Down:
        newGrid = GridController.moveDown(grid);
        break;
      default:
        break;
    }

    newGrid = insertNewTile(newGrid);
    setGrid(newGrid);
  };
  useArrowKeyPress(handleArrowKeyPress);

  useEffect(() => {
    grid.forEach((row) => console.log(row));

    if (didWin(grid)) {
      console.log("You won!");
    } else if (didLoose(grid)) {
      console.log("You lost!");
    }
  }, [grid]);

  return <div>Welcome to 2048!</div>;
};

export default TwentyFortyEight;
