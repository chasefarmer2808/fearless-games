import GridController from "../../src/2048/GridController";

describe("GridController", () => {
  describe("moveLeft", () => {
    it("shifts grid items left", () => {
      const testGrid = [
        [2, 0, 0, 0],
        [0, 2, 0, 0],
        [0, 0, 2, 0],
        [0, 0, 0, 2],
      ];

      expect(GridController.moveLeft(testGrid)).toEqual([
        [2, 0, 0, 0],
        [2, 0, 0, 0],
        [2, 0, 0, 0],
        [2, 0, 0, 0],
      ]);
    });

    it("combines same numbers", () => {
      const testGrid = [
        [2, 2, 0, 0],
        [0, 2, 2, 0],
        [0, 0, 2, 2],
        [0, 0, 0, 2],
      ];

      expect(GridController.moveLeft(testGrid)).toEqual([
        [4, 0, 0, 0],
        [4, 0, 0, 0],
        [4, 0, 0, 0],
        [2, 0, 0, 0],
      ]);
    });

    it("combines two sets of same numbers in same row", () => {
      const testGrid = [
        [2, 2, 2, 2],
        [0, 2, 0, 0],
        [0, 0, 2, 0],
        [0, 0, 0, 2],
      ];

      expect(GridController.moveLeft(testGrid)).toEqual([
        [4, 4, 0, 0],
        [2, 0, 0, 0],
        [2, 0, 0, 0],
        [2, 0, 0, 0],
      ]);
    });

    it("doesn't combine numbers when they are different", () => {
      const testGrid = [
        [4, 0, 2, 0],
        [0, 2, 0, 0],
        [0, 0, 2, 0],
        [0, 0, 0, 2],
      ];

      expect(GridController.moveLeft(testGrid)).toEqual([
        [4, 2, 0, 0],
        [2, 0, 0, 0],
        [2, 0, 0, 0],
        [2, 0, 0, 0],
      ]);
    });
  });

  describe("moveRight", () => {
    it("shifts grid items right", () => {
      const testGrid = [
        [2, 0, 0, 0],
        [0, 2, 0, 0],
        [0, 0, 2, 0],
        [0, 0, 0, 2],
      ];

      expect(GridController.moveRight(testGrid)).toEqual([
        [0, 0, 0, 2],
        [0, 0, 0, 2],
        [0, 0, 0, 2],
        [0, 0, 0, 2],
      ]);
    });

    it("combines same numbers", () => {
      const testGrid = [
        [2, 2, 0, 0],
        [0, 2, 2, 0],
        [0, 0, 2, 2],
        [0, 0, 0, 2],
      ];

      expect(GridController.moveRight(testGrid)).toEqual([
        [0, 0, 0, 4],
        [0, 0, 0, 4],
        [0, 0, 0, 4],
        [0, 0, 0, 2],
      ]);
    });

    it("combines two sets of same numbers in same row", () => {
      const testGrid = [
        [2, 2, 2, 2],
        [0, 2, 0, 0],
        [0, 0, 2, 0],
        [0, 0, 0, 2],
      ];

      expect(GridController.moveRight(testGrid)).toEqual([
        [0, 0, 4, 4],
        [0, 0, 0, 2],
        [0, 0, 0, 2],
        [0, 0, 0, 2],
      ]);
    });

    it("stacks different numbers", () => {
      const testGrid = [
        [2, 2, 0, 8],
        [0, 2, 0, 0],
        [0, 0, 2, 0],
        [0, 0, 0, 2],
      ];

      expect(GridController.moveRight(testGrid)).toEqual([
        [0, 0, 4, 8],
        [0, 0, 0, 2],
        [0, 0, 0, 2],
        [0, 0, 0, 2],
      ]);
    });

    it("doesn't combine numbers when they are different", () => {
      const testGrid = [
        [4, 0, 2, 0],
        [0, 2, 0, 0],
        [0, 0, 2, 0],
        [0, 0, 0, 2],
      ];

      expect(GridController.moveRight(testGrid)).toEqual([
        [0, 0, 4, 2],
        [0, 0, 0, 2],
        [0, 0, 0, 2],
        [0, 0, 0, 2],
      ]);
    });

    it("doesn't change grid items when same direction called twice", () => {
      const testGrid = [
        [2, 0, 4, 8],
        [0, 2, 0, 0],
        [0, 0, 2, 0],
        [0, 0, 0, 2],
      ];

      expect(
        GridController.moveRight(GridController.moveRight(testGrid))
      ).toEqual([
        [0, 2, 4, 8],
        [0, 0, 0, 2],
        [0, 0, 0, 2],
        [0, 0, 0, 2],
      ]);
    });
  });
});
