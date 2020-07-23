import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  temp: {
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(3),
  },
  tempText: {
    width: "75%",
    color: theme.palette.common.white,
  },
  heading: {
    backgroundColor: theme.palette.primary.light,
    borderBottom: "1px solid rgba(0, 0, 0, .2)",
    minHeight: 56,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: theme.spacing(2),
  },
}));

export default useStyles;
