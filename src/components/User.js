import React, { Component } from "react";
import classes from "./User.module.css";

class User extends Component {
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }

  componentDidMount() {
    console.log("I'm ready");
  }

  componentWillUnmount() {
    console.log("User will unmount");
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// useEffect(() => {
//   console.log('init');
//   return () => {
//     console.log('im done')
//   }
// }, []);

// };

export default User;
