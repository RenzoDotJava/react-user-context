import React, { useEffect } from "react";
import { useContext } from "react";
import UserContext from "../context/User/UserContext";

function UserList() {
  const { users, getUsers, getProfile } = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="list-group h-100">
      {
        users.map(user => (
          <a className="list-group-item list-group-item-action d-flex align-items-center" href="#!" key={user.id} onClick={() => getProfile(user.id)}>
            <img src={user.avatar} className="img-fluid rounded-circle" width="70" />
            <p style={{ marginBottom: 0, marginLeft: '1rem' }}>
              {`${user.first_name} ${user.last_name}`}
            </p>
          </a>
        ))
      }
    </div>
  )
}

export default UserList;
