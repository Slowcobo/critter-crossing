import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  butterflyIcon: {
    marginRight: theme.spacing(2),
    width: "50px",
  },
  topbar: {
    backgroundColor: "transparent",
    color: theme.palette.common.white,
    boxShadow: "none",
  },
  title: {
    letterSpacing: "0.2rem",
    fontSize: "1.8rem",
    fontWeight: 500,
    textShadow: "0 2px 3px rgba(0,0,0,0.5)",
  },
}));

export default useStyles;
