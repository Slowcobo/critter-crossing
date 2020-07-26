import { makeStyles } from "@material-ui/core/styles";
import { darken } from "@material-ui/core/styles/colorManipulator";

const useStyles = makeStyles((theme) => ({
  critterContainer: {
    height: "95px",
    width: "95px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: theme.spacing(0.3),
    backgroundColor: (props) =>
      (props.selected && "#fff176") ||
      (props.collected && "#81c784") ||
      "#f1f1f1",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: (props) =>
        darken(
          (props.selected && "#fff176") ||
            (props.collected && "#81c784") ||
            "#f1f1f1",
          0.05
        ),
    },
  },
  critter: {
    width: "70%",
    opacity: (props) =>
      props.available || props.available === undefined ? "1" : "0.1",
  },
  selected: {
    backgroundColor: "yellow",
  },
}));

export default useStyles;
