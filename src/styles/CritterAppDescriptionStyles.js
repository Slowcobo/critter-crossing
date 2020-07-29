import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  description: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(3),
  },
  descriptionText: {
    width: "75%",
  },
}));

export default useStyles;
