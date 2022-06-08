import React, { Component, Fragment } from "react";
import UsersContext, { UserI } from "../state/users-context";
import ErrorBoundary from "./ErrorBoundary";
import Users from "./Users";

interface UserFinderState {
  searchTerm: string;
  filteredUsers: UserI[]
}


class UserFinder extends Component<{}, UserFinderState> {
  static contextType = UsersContext;
  context!: React.ContextType<typeof UsersContext>

  constructor(props: any) {
    super(props);
    this.state = {
      searchTerm: "",
      filteredUsers: []
    };
  }

  componentDidMount() {
    this.setState({ filteredUsers: this.context.users });
  }

  searchChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ searchTerm: event.target.value });
  }

  componentDidUpdate(prevProps: {}, prevState: typeof this.state) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        )
      });
    }
  }

  stateUpdFromObject =(obj: Partial<typeof this.state>) => {
    this.setState({ ...this.state, ...obj })
  }

  // useEffect(() => {
  //   first;

  // }, [third]);

  render() {
    return (
      <Fragment>
        <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        {/* <Users users={this.state.filteredUsers} /> */}
        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </Fragment>
    );
  }
}

export default UserFinder;
