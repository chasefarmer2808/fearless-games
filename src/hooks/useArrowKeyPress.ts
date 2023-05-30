import { useRef, useEffect } from "react";

export enum Direction {
  Left,
  Right,
  Up,
  Down,
}

type OnKeyPressHandler = (keyPressed: Direction) => void;

const useArrowKeyPress = (onKeyPress?: OnKeyPressHandler) => {
  const keyPressRef = useRef<Direction>(Direction.Right);

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowUp":
          keyPressRef.current = Direction.Up;
          break;
        case "ArrowDown":
          keyPressRef.current = Direction.Down;
          break;
        case "ArrowLeft":
          keyPressRef.current = Direction.Left;
          break;
        case "ArrowRight":
          keyPressRef.current = Direction.Right;
          break;
        default:
          break;
      }

      onKeyPress && onKeyPress(keyPressRef.current);
    };

    window.addEventListener("keydown", keyDownHandler);

    return () => {
      window.removeEventListener("keydown", keyDownHandler);
    };
  }, [onKeyPress]);

  return keyPressRef;
};

export default useArrowKeyPress;
