import classes from "../styles/2048/GridNumber.module.css";

type BackgroundColor =
  | "#c4b7ab"
  | "#e4dbd0"
  | "#e3d5bf"
  | "#e5a870"
  | "#f49561"
  | "#f67d5e"
  | "#f5663d";

interface Props {
  num: number;
}

interface ColorStyle {
  backgroundColor: BackgroundColor;
  color: "white" | "black";
}

const GridNumber = ({ num }: Props) => {
  const getColors = (val: number): ColorStyle => {
    switch (val) {
      case 2:
        return {
          backgroundColor: "#e3d5bf",
          color: "black",
        };
      case 4: {
        return {
          backgroundColor: "#e4dbd0",
          color: "black",
        };
      }
      case 8: {
        return {
          backgroundColor: "#e5a870",
          color: "white",
        };
      }
      case 16: {
        return {
          backgroundColor: "#f49561",
          color: "white",
        };
      }
      case 32: {
        return {
          backgroundColor: "#f67d5e",
          color: "white",
        };
      }
      case 64: {
        return {
          backgroundColor: "#f5663d",
          color: "white",
        };
      }
      default:
        return {
          backgroundColor: "#c4b7ab",
          color: "black",
        };
    }
  };

  return (
    <div className={classes["box"]} style={getColors(num)}>
      <span className={`${num == 0 && classes["hidden"]}`}>{num}</span>
    </div>
  );
};

export default GridNumber;
