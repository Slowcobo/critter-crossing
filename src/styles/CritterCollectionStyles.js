import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  critterList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  snack: {
    backgroundColor: theme.palette.secondary.main,
    padding: 0,
    display: "flex",
    justifyContent: "center",
  },
  actions: {
    marginLeft: 0,
    marginRight: 0,
    padding: theme.spacing(0.5),
  },
}));

export default useStyles;
