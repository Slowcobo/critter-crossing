import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  critterOptions: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  label: {
    display: "block",
    fontSize: "1rem",
  },
  formLabel: {
    fontSize: "0.875rem",
  },
}));

export default useStyles;
