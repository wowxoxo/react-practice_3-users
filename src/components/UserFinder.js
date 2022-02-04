import { Component, Fragment } from "react";
import Users from "./Users";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" }
];

class UserFinder extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      filteredUsers: []
    };
  }

  componentDidMount() {
    this.setState({ filteredUsers: DUMMY_USERS });
  }

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: DUMMY_USERS.filter((user) =>
          user.name.includes(this.state.searchTerm)
        )
      });
    }
  }

  // useEffect(() => {
  //   first;

  // }, [third]);

  render() {
    return (
      <Fragment>
        <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        <Users users={this.state.filteredUsers} />
      </Fragment>
    );
  }
}

export default UserFinder;
