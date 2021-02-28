import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: 200,
    padding: 10,
  },
});

function valuetext(value) {
  return `{value}`;
}

function RangeSlider({ value, setValue, highest }) {
  const classes = useStyles();

  const handlePrice = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className={classes.root}>
        <Typography id="range-slider" gutterBottom>
          Price
        </Typography>

        <Slider
          max={highest}
          value={value}
          onChange={handlePrice}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
        />
      </div>
    </>
  );
}

export default RangeSlider;
