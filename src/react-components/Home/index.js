import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";


/* Component for the Home page */
class Home extends React.Component {
  render() {
    return (
      <div className="home__bg-image center">
        <Link className="home__button-link center" to={"./../Login"}>
          <Button className="home__button">Login {this.props.state.abc}</Button>
        </Link> 
      </div>
    );
  }
}

export default Home;
