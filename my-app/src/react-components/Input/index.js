import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

// import "./styles.css";

/* Component for the Input field, a wrapper around MUI TextField */
class Input extends React.Component {
  render() {
    const { label, value, onChange, name } = this.props;

    return (
      <Grid className="grid">
        <TextField
          name={name}
          label={label}
          id="margin-normal"
          defaultValue={value || ""}
          className="input"
          margin="normal"
          onChange={onChange}
        />
      </Grid>
    );
  }
}

export default Input;