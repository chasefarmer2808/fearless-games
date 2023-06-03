import GridNumber from "./GridNumber";
import classes from "../styles/2048/GameGrid.module.css";

interface Props {
  grid: number[][];
}

const GameGrid = ({ grid }: Props) => {
  return (
    <div className={classes["grid"]}>
      {grid.map((row, rowIndex) =>
        row.map((col, colIndex) => (
          <GridNumber key={`${rowIndex},${colIndex}`} num={col} />
        ))
      )}
    </div>
  );
};

export default GameGrid;
