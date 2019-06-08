import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Slider from "@material-ui/lab/Slider";
import { fade } from "@material-ui/core/styles/colorManipulator";

const useStyles = makeStyles({
  root: {
    width: 230,
    padding: 24
  }
});

const StyledSlider = withStyles({
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid #de235b",
    "&$focused, &:hover": {
      boxShadow: `0px 0px 0px ${8}px ${fade("#de235b", 0.16)}`
    },
    "&$activated": {
      boxShadow: `0px 0px 0px ${8 * 1.5}px ${fade("#de235b", 0.16)}`
    },
    "&$jumped": {
      boxShadow: `0px 0px 0px ${8 * 1.5}px ${fade("#de235b", 0.16)}`
    }
  },
  track: {
    backgroundColor: "#de235b",
    height: 8
  },
  trackAfter: {
    backgroundColor: "#d0d7dc"
  },
  focused: {},
  activated: {},
  jumped: {}
})(Slider);

export default function CustomizedSlider({ amount, handleUpdates, disabled }) {
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    console.log(event, newValue);
    handleUpdates(newValue);
  };

  return (
    <div>
      <Paper className={classes.root}>
        <StyledSlider
          min={500}
          max={5000}
          valueReducer={val => Math.round(val)}
          name="amount"
          value={amount}
          aria-labelledby="label"
          onChange={handleChange}
        />
      </Paper>
    </div>
  );
}
