import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const DateSlider = withStyles((theme) => ({
  root: {
    height: 10,
    width: "95%",
  },
  thumb: {
    height: 20,
    width: 20,
    marginTop: -6,
    marginLeft: -10,
    color: theme.palette.secondary.main,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
    "&$disabled": {
      height: 10,
      width: 10,
      marginTop: 0,
      borderRadius: 0,
    },
  },
  active: {},
  disabled: {},
  mark: {
    display: "none",
  },
  markLabel: {
    marginTop: theme.spacing(1),
    color: theme.palette.text.primary,
  },
  markLabelActive: {},
  track: {},
  rail: {
    height: 10,
    borderRadius: 4,
    opacity: 1,
    backgroundColor: "rgba(0,0,0,0.1)",
  },
}))(Slider);

export default DateSlider;
