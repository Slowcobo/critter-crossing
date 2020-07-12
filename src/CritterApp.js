import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import CritterList from "./CritterList";
import CritterInfo from "./CritterInfo";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function CritterApp() {
  const classes = useStyles();
  const [mode, setMode] = useState("bugs");
  const [date, setDate] = useState({ month: "", time: "" });
  const [critters, setCritters] = useState({ bugs: [], fish: [], sea: [] });
  const [currentCritter, setCurrentCritter] = useState();
  const [showCritterInfo, setShowCritterInfo] = useState(false);

  useEffect(() => {
    const getCritterData = async () => {
      const bugRes = await axios.get("http://acnhapi.com/v1a/bugs/");
      const fishRes = await axios.get("http://acnhapi.com/v1a/fish/");
      const seaRes = await axios.get("http://acnhapi.com/v1a/sea/");

      const critterData = {
        bugs: bugRes.data,
        fish: fishRes.data,
        sea: seaRes.data,
      };
      setCritters(critterData);
    };
    //Get critter data from API
    getCritterData();

    //Set date to current
    const d = new Date();
    setDate({
      month: d.getMonth() + 1,
      time: d.getHours(),
    });
  }, []);

  const getCritter = (critterId) => {
    setCurrentCritter(critters[mode][critterId - 1]);
    setShowCritterInfo(true);
  };

  const closeCritterInfo = () => {
    setCurrentCritter();
    setShowCritterInfo(false);
  };

  const handleMonthChange = (event) => {
    const newDate = { ...date, month: event.target.value };
    setDate(newDate);
  };

  const handleTimeChange = (event, value) => {
    const newDate = { ...date, time: value };
    setDate(newDate);
  };

  function valuetext(value) {
    return `${value}`;
  }

  return (
    <>
      {/* Only render critter info if currentCritter has been selected */}
      {currentCritter && (
        <CritterInfo
          critter={currentCritter}
          critters={critters[mode]}
          getCritter={getCritter}
          showCritterInfo={showCritterInfo}
          closeCritterInfo={closeCritterInfo}
        />
      )}

      {/* Switch Critters */}
      <button onClick={() => setMode("bugs")}>Bugs</button>
      <button onClick={() => setMode("fish")}>Fish</button>
      <button onClick={() => setMode("sea")}>Sea</button>

      {/* Month Selection */}
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

      {/* List of current critters */}
      <CritterList
        critters={critters[mode]}
        date={date}
        getCritter={getCritter}
      />
    </>
  );
}
