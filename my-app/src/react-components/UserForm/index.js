import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Form from "semantic-ui-react"
import { Link } from "react-router-dom";


import Input from "./../Input";

import "./styles.css";


class UserForm extends React.Component {
  render() {
    
    const {
      state,
      handleChange,
      verifyUser
    } = this.props;

    const username = this.props.username
    const password = this.props.password

    // console.log(this.props)

    return (
        
      <div>
        <form className="form"> 
          <div id="username">
            <label htmlFor="username">Username</label>
            <Input
              name="username"
              value={username}
              onChange={handleChange}
              label="User"
            />
          </div>
          <div id="password">
            
            <label htmlFor="password">Password</label>
            <Input
              name="password"
              value={password}
              onChange={handleChange}
              label="Password"
            />
          </div>

          <div id="button">
            
            <Button
              variant="contained"
              color="primary"
              onClick={verifyUser}
              className="student-form__submit-button"
            >
              Sign in
            </Button>
            
          </div>

        </form>

      </div>



    );
  }
}

export default UserForm;
