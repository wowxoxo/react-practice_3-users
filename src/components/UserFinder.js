import { Component, Fragment } from "react";
import UsersContext from "../state/users-context";
import ErrorBoundary from "./ErrorBoundary";
import Users from "./Users";

class UserFinder extends Component {
  static contextType = UsersContext;

  constructor() {
    super();
    this.state = {
      searchTerm: "",
      filteredUsers: []
    };
  }

  componentDidMount() {
    this.setState({ filteredUsers: this.context.users });
  }

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
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
        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </Fragment>
    );
  }
}

export default UserFinder;
