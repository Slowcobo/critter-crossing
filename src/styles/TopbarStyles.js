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
    letterSpacing: "0.05rem",
    fontSize: "1.3rem",
    marginLeft: theme.spacing(1),
  },
}));

export default useStyles;
