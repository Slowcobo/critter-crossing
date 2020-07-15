import React, { useContext } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { monthMarks, timeMarks } from "./helpers";
import { CritterContext } from "./contexts/CritterContext";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles((theme) => ({
  critterOptions: {
    margin: "2rem auto",
    padding: "0 0.1rem",
    borderRadius: "0.25rem",
  },
}));

const DateSlider = withStyles({
  root: {
    color: "#d0d0d0",
    height: 12,
  },
  thumb: {
    display: "none",
  },
  mark: {
    height: 12,
    color: "rgba(0,0,0,0.1)",
  },
  markLabel: {},
  active: {},
  track: {
    height: 12,
  },
  rail: {
    height: 12,
  },
})(Slider);

export default function CritterOptions() {
  const { date, changeDate } = useContext(CritterContext);
  const classes = useStyles();

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
      <Typography id="month-slider" variant="overline">
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
      {/* Month Slider */}

      {/* Time Slider */}
      <Typography id="time-slider" variant="overline">
        Time
      </Typography>
      <DateSlider
        value={Number(date.time)}
        getAriaValueText={valuetext}
        aria-labelledby="time-slider"
        valueLabelDisplay="auto"
        step={1}
        marks={timeMarks}
        min={0}
        max={23}
        onChange={handleTimeChange}
      />
    </div>
  );
}
