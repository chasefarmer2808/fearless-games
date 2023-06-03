export default {
  compress(grid: number[][]): number[][] {
    const compressedGrid = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];

    grid.forEach((row, rowIndex) => {
      let marker = 0;

      row.forEach((val) => {
        if (val != 0) {
          compressedGrid[rowIndex][marker] = val;
          marker++;
        }
      });
    });

    return compressedGrid;
  },
  merge(grid: number[][]): number[][] {
    const mergedGrid = [...grid];

    mergedGrid.forEach((row, rowIndex) => {
      row.forEach((val, colIndex) => {
        if (val == mergedGrid[rowIndex][colIndex + 1] && val !== 0) {
          mergedGrid[rowIndex][colIndex] *= 2;
          mergedGrid[rowIndex][colIndex + 1] = 0;
        }
      });
    });

    return mergedGrid;
  },
  reverse(grid: number[][]): number[][] {
    return grid.map((row) => row.reverse());
  },
  transpose(grid: number[][]): number[][] {
    const newGrid: number[][] = [];

    grid.forEach((row, rowIndex) => {
      newGrid.push([]);

      row.forEach((_, colIndex) => {
        newGrid[rowIndex].push(grid[colIndex][rowIndex]);
      });
    });

    return newGrid;
  },
  deepEquals(gridA: number[][], gridB: number[][]) {
    return (
      gridA.length == gridB.length &&
      gridA.every((row, rowIndex) => row.length == gridB[rowIndex].length) &&
      gridA.every((row, rowIndex) =>
        row.every((col, colIndex) => col == gridB[rowIndex][colIndex])
      )
    );
  },
  moveLeft(grid: number[][]): number[][] {
    let newGrid = this.compress(grid);
    newGrid = this.merge(newGrid);
    newGrid = this.compress(newGrid);

    return newGrid;
  },
  moveRight(grid: number[][]): number[][] {
    let newGrid = this.reverse(grid);
    newGrid = this.moveLeft(newGrid);
    newGrid = this.reverse(newGrid);

    return newGrid;
  },
  moveUp(grid: number[][]): number[][] {
    let newGrid = this.transpose(grid);
    newGrid = this.moveLeft(newGrid);
    newGrid = this.transpose(newGrid);

    return newGrid;
  },
  moveDown(grid: number[][]): number[][] {
    let newGrid = this.transpose(grid);
    newGrid = this.moveRight(newGrid);
    newGrid = this.transpose(newGrid);

    return newGrid;
  },
};
