import React, { useContext } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { monthMarks, timeMarks } from "./helpers";
import { OptionsContext } from "./contexts/OptionsContext";
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

export default function CritterOptions() {
  const { hemisphere, changeHemisphere, date, changeDate } = useContext(
    OptionsContext
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

  const timeText = (value) => {
    return value < 13 ? `${value}AM` : `${value}PM`;
  };

  const monthText = (value) => {
    return monthMarks[value - 1];
  };

  return (
    <div className={classes.critterOptions}>
      {/* Heading */}
      <Typography className={classes.heading} id="month-slider" variant="h2">
        Critter Options
      </Typography>

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
            classes={{ label: classes.formLabel }}
            value="northern"
            control={<Radio color="secondary" />}
            label="Northern"
          />
          <FormControlLabel
            classes={{ label: classes.formLabel }}
            value="southern"
            control={<Radio color="secondary" />}
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
        getAriaValueText={monthText}
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
        getAriaValueText={timeText}
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
