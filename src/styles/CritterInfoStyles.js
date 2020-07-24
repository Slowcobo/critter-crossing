import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  critterName: {
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.common.white,
    boxShadow:
      "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
  },
  closeButton: {
    color: theme.palette.common.white,
    position: "absolute",
    top: 0,
    right: 0,
  },
  critterImage: {
    width: "80%",
  },
  label: {
    fontSize: "1rem",
    alignSelf: "start",
  },
  date: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  navButtons: {
    display: "flex",
    justifyContent: "space-between",
    boxShadow:
      "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
  },
}));

export default useStyles;
