import { useRef, useEffect } from "react";

export enum Direction {
  Left,
  Right,
  Up,
  Down,
}

type OnKeyPressHandler = (keyPressed: Direction) => void;

const useArrowKeyPress = (onArrowKeyPress?: OnKeyPressHandler) => {
  const keyPressRef = useRef<Direction>();

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      event.preventDefault();

      switch (event.key) {
        case "ArrowUp":
          keyPressRef.current = Direction.Up;
          onArrowKeyPress && onArrowKeyPress(keyPressRef.current);
          break;
        case "ArrowDown":
          keyPressRef.current = Direction.Down;
          onArrowKeyPress && onArrowKeyPress(keyPressRef.current);
          break;
        case "ArrowLeft":
          keyPressRef.current = Direction.Left;
          onArrowKeyPress && onArrowKeyPress(keyPressRef.current);
          break;
        case "ArrowRight":
          keyPressRef.current = Direction.Right;
          onArrowKeyPress && onArrowKeyPress(keyPressRef.current);
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", keyDownHandler);

    return () => {
      window.removeEventListener("keydown", keyDownHandler);
    };
  }, [onArrowKeyPress]);

  return keyPressRef;
};

export default useArrowKeyPress;
