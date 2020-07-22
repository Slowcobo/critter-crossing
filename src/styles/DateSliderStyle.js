import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const DateSlider = withStyles((theme) => ({
  root: {
    height: 10,
    width: "95%",
  },
  thumb: {
    height: 24,
    width: 24,
    marginTop: -8,
    marginLeft: -12,
    color: theme.palette.secondary.main,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  mark: {
    display: "none",
  },
  markLabel: {
    marginTop: theme.spacing(1),
    color: theme.palette.text.primary,
  },
  markLabelActive: {},
  track: {
    height: 10,
    borderRadius: 4,
    backgroundColor: "transparent",
  },
  rail: {
    height: 10,
    borderRadius: 4,
    opacity: 1,
    backgroundColor: "rgba(0,0,0,0.1)",
  },
}))(Slider);

export default DateSlider;
