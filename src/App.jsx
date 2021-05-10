//Componentes
import Profile from "./components/Profile.jsx";
import UserList from "./components/UserList.jsx";
//Context
import UserState from "./context/User/UserState";

function App() {
  return (
    <UserState>
      <div className="container p-4">
        <div className="row">
          <div className=" col-lg-6 col-md-5">
            <UserList />
          </div>
          <div className="col-lg-6 col-md-7">
            <Profile />
          </div>
        </div>

      </div>
    </UserState>
  );
}

export default App;
