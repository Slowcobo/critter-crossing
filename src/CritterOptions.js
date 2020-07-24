import React, { useContext } from "react";
import { monthMarks, monthText, timeMarks, timeText } from "./helpers";
import { OptionsContext } from "./contexts/OptionsContext";
import Typography from "@material-ui/core/Typography";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import DateSlider from "./styles/DateSliderStyle";
import useStyles from "./styles/CritterOptionsStyles";

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
        track={false}
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
        track={false}
      />
    </div>
  );
}
