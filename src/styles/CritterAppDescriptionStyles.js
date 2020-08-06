import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  description: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1),
  },
  descriptionImages: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "nowrap",
    "& img": {
      width: "33.33%",
    },
  },
  descriptionText: {
    color: theme.palette.common.white,
    letterSpacing: "0.01rem",
    "& h1": {
      fontSize: "1.3rem",
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    "& h2": {
      fontSize: "0.9rem",
      marginBottom: theme.spacing(3),
    },
  },
}));

export default useStyles;
