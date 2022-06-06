import { Component } from "react";
import User from "./User";
// import { User as UserI } from '../state/users-context'
import { UserI } from '../state/users-context'


import classes from "./Users.module.css";

type UsersProps = {
  users: UserI[];
}

type UsersState = {
  showUsers: boolean,
  more: string
}

class Users extends Component<UsersProps, UsersState> {
  constructor(props: UsersProps) {
    super(props);
    this.state = {
      showUsers: true,
      more: "kjhhh"
    };
    this.toggleUsersHandler2 = this.toggleUsersHandler.bind(this);
  }

  // state: UsersState = { showUsers: true, more: "kjhhh" };

  toggleUsersHandler() {
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    });
    // this.setState(prevState => ({ showUsers: !prevState.showUsers}))
  }

  toggleUsersHandler2() {}

  toggleUsersHandler3 = () => {
    // window.yaCounterXXXXXX.reachGoal('asas')
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    });
  };

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        {/* <button onClick={this.toggleUsersHandler.bind(this)}> */}
        {/* <button onClick={this.toggleUsersHandler2}> */}
        <button onClick={this.toggleUsersHandler3}>
          {/* <button onClick={() => {  }}> */}
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//     // setShowUsers(false);
//     // setShowUsers({ ...obj, setShowUsers: false })
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? "Hide" : "Show"} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
