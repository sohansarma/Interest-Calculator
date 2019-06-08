import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  }
}));

export default function OutlinedTextFields({ amount,handleUpdates }) {
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    handleUpdates(newValue);
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        name="month"
        id="outlined-number"
        label="Month"
        readOnly
        value={amount}
        className={classes.textField}
        InputLabelProps={{
          shrink: true
        }}
        margin="normal"
        variant="outlined"
      />
    </form>
  );
}

