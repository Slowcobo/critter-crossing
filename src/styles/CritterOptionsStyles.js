import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  critterOptions: {
    margin: "2rem auto",
    padding: "0 0.1rem",
    borderRadius: "0.25rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  heading: {
    width: "100%",
    fontSize: "1.5rem",
    padding: theme.spacing(1),
    color: "#fff",
    backgroundColor: theme.palette.primary.main,
    boxShadow:
      "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
    borderRadius: 4,
  },
  label: {
    display: "block",
    marginTop: theme.spacing(2),
    fontSize: "1rem",
  },
  formLabel: {
    fontSize: "0.875rem",
  },
}));

export default useStyles;
