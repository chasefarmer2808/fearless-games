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

const compress = (grid: number[][]): number[][] => {
  const compressedGrid = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];

  grid.forEach((row, rowIndex) => {
    let marker = 0;

    row.forEach((val, colIndex) => {
      if (val != 0) {
        compressedGrid[rowIndex][marker] = val;
        marker++;
      }
    });
  });

  return compressedGrid;
};

const merge = (grid: number[][]) => {
  grid.forEach((row, rowIndex) => {
    row.forEach((_, colIndex) => {
      if (
        grid[rowIndex][colIndex] == grid[rowIndex][colIndex + 1] &&
        grid[rowIndex][colIndex] !== 0
      ) {
        grid[rowIndex][colIndex] *= 2;
        grid[rowIndex][colIndex + 1] = 0;
      }
    });
  });
};

const reverse = (grid: number[][]): number[][] => {
  return grid.map((row) => row.reverse());
};

const transpose = (grid: number[][]): number[][] => {
  const newGrid: number[][] = [];

  grid.forEach((row, rowIndex) => {
    newGrid.push([]);

    row.forEach((_, colIndex) => {
      newGrid[rowIndex].push(grid[colIndex][rowIndex]);
    });
  });

  return newGrid;
};

const moveLeft = (grid: number[][]): number[][] => {
  let newGrid = compress(grid);
  merge(newGrid);
  newGrid = compress(newGrid);

  return newGrid;
};

const moveRight = (grid: number[][]): number[][] => {
  let newGrid = reverse(grid);
  newGrid = moveLeft(newGrid);
  newGrid = reverse(newGrid);

  return newGrid;
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

    switch (dir) {
      case Direction.Left:
        setGrid((prevGrid) => moveLeft(prevGrid));
        break;
      case Direction.Right:
        setGrid((prevGrid) => moveRight(prevGrid));
        break;
      default:
        break;
    }

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
