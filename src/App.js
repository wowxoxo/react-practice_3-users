import UserFinder from "./components/UserFinder";
import UsersContext from "./state/users-context";

const DUMMY_USERS = [
  { id: "u1", name: "Sergey" },
  { id: "u2", name: "Alex" },
  { id: "u3", name: "Nikita" }
];

function App() {
  const usersContext = {
    users: DUMMY_USERS
  };

  return (
    <div>
      <UsersContext.Provider value={usersContext}>
        <UserFinder />
      </UsersContext.Provider>
    </div>
  );
}

export default App;
