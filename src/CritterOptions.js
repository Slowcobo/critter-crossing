import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { CritterContext } from "./contexts/CritterContext";

const useStyles = makeStyles((theme) => ({
  critterOptions: {
    margin: "2rem auto",
    padding: "1rem 2rem",
  },
}));

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

  function valuetext(value) {
    return `${value}`;
  }

  return (
    <div className={classes.critterOptions}>
      {/* Month Slider */}
      <Typography id="month-slider" gutterBottom>
        Month
      </Typography>
      <Slider
        value={Number(date.month)}
        getAriaValueText={valuetext}
        aria-labelledby="month-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={12}
        onChange={handleMonthChange}
      />

      {/* Time Slider */}
      <Typography id="time-slider" gutterBottom>
        Time
      </Typography>
      <Slider
        value={Number(date.time)}
        getAriaValueText={valuetext}
        aria-labelledby="time-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={23}
        onChange={handleTimeChange}
      />
    </div>
  );
}
