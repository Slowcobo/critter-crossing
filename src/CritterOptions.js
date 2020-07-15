import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { CritterContext } from "./contexts/CritterContext";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function CritterOptions() {
  const {date, changeDate} = useContext(CritterContext);
  const classes = useStyles();

  const handleMonthChange = (event) => {
    const newDate = { ...date, month: event.target.value };
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
    <>
      <FormControl className={classes.formControl}>
        <InputLabel id="month-selector">Month</InputLabel>
        <Select
          labelId="month-selector"
          id="month-selector"
          value={date.month}
          onChange={handleMonthChange}
        >
          <MenuItem value={1}>January</MenuItem>
          <MenuItem value={2}>February</MenuItem>
          <MenuItem value={3}>March</MenuItem>
          <MenuItem value={4}>April</MenuItem>
          <MenuItem value={5}>May</MenuItem>
          <MenuItem value={6}>June</MenuItem>
          <MenuItem value={7}>July</MenuItem>
          <MenuItem value={8}>August</MenuItem>
          <MenuItem value={9}>September</MenuItem>
          <MenuItem value={10}>October</MenuItem>
          <MenuItem value={11}>November</MenuItem>
          <MenuItem value={12}>December</MenuItem>
        </Select>
      </FormControl>

      {/* Time Slider */}
      <Typography id="discrete-slider" gutterBottom>
        Time
      </Typography>
      <Slider
        value={Number(date.time)}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={23}
        onChange={handleTimeChange}
      />
    </>
  );
}
