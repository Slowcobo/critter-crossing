import React, { useContext } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { monthMarks, timeMarks } from "./helpers";
import { CritterContext } from "./contexts/CritterContext";
import Typography from "@material-ui/core/Typography";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles((theme) => ({
  critterOptions: {
    margin: "2rem auto",
    padding: "0 0.1rem",
    borderRadius: "0.25rem",
  },
  label: {
    display: "block",
    marginTop: theme.spacing(2),
  },
}));

const DateSlider = withStyles({
  root: {
    color: "#d0d0d0",
    height: 12,
  },
  thumb: {
    height: 12,
    width: 24,
    borderRadius: 0,
    marginTop: 0,
    marginLeft: -12,
    "&:hover": {
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
    },
  },
  mark: {
    height: 12,
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  markActive: {
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  markLabel: {},
  active: {},
  track: {
    display: "none",
  },
  rail: {
    height: 12,
  },
})(Slider);

export default function CritterOptions() {
  const { hemisphere, changeHemisphere, date, changeDate } = useContext(
    CritterContext
  );
  const classes = useStyles();

  const handleHemisphereChange = (event) => {
    changeHemisphere(event.target.value);
  };

  const handleMonthChange = (event, value) => {
    const newDate = { ...date, month: value };
    changeDate(newDate);
  };

  const handleTimeChange = (event, value) => {
    const newDate = { ...date, time: value };
    changeDate(newDate);
  };

  //TODO: Account for months/times
  function valuetext(value) {
    return `${value}`;
  }

  return (
    <div className={classes.critterOptions}>
      {/* Hemisphere Radio */}
      <Typography
        className={classes.label}
        id="month-slider"
        variant="overline"
      >
        Hemisphere
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup
          row
          aria-label="hemisphere"
          name="hemisphere"
          value={hemisphere}
          onChange={handleHemisphereChange}
        >
          <FormControlLabel
            value="northern"
            control={<Radio color="primary" />}
            label="Northern"
          />
          <FormControlLabel
            value="southern"
            control={<Radio color="primary" />}
            label="Southern"
          />
        </RadioGroup>
      </FormControl>

      {/* Month Slider */}
      <Typography
        className={classes.label}
        id="month-slider"
        variant="overline"
      >
        Month
      </Typography>
      <DateSlider
        value={Number(date.month)}
        getAriaValueText={valuetext}
        aria-labelledby="month-slider"
        step={1}
        marks={monthMarks}
        min={1}
        max={12}
        onChange={handleMonthChange}
      />

      {/* Time Slider */}
      <Typography className={classes.label} id="time-slider" variant="overline">
        Time
      </Typography>
      <DateSlider
        value={Number(date.time)}
        getAriaValueText={valuetext}
        aria-labelledby="time-slider"
        step={1}
        marks={timeMarks}
        min={0}
        max={23}
        onChange={handleTimeChange}
      />
    </div>
  );
}
