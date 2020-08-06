import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  heading: {
    backgroundColor: theme.palette.primary.light,
    borderBottom: "1px solid rgba(0, 0, 0, .2)",
    minHeight: 56,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: theme.spacing(2),
    fontSize: "1.15rem",
  },
}));

export default useStyles;
