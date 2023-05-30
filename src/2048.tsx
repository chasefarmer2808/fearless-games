import { useEffect, useState } from "react";
import { Utils } from "./utils";

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

  useEffect(() => {
    grid.forEach((row) => console.log(row));
  }, [grid]);

  return <div>Welcome to 2048!</div>;
};

export default TwentyFortyEight;
