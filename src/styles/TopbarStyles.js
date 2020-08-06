import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  butterflyIcon: {
    marginRight: theme.spacing(2),
    width: "50px",
  },
  topbar: {
    backgroundColor: "transparent",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(1),
    boxShadow: "none",
  },
  title: {
    letterSpacing: "0.1rem",
    fontSize: "1.6rem",
    marginLeft: theme.spacing(1),
  },
}));

export default useStyles;
