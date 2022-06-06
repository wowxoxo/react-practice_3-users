import React from "react";

export type UserI = {
  id: string;
  name: string;
}

type UsersContextType = {
  users: Array<UserI>
}

const UsersContext = React.createContext<UsersContextType>({
  users: []
});

export default UsersContext;
