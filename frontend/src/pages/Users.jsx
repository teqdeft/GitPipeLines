import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);



  const getUsersDetails = async ()=>{
    const response = await axios.get("http://localhost:3000/users")
    setUsers(response.data.data)
  
    
  }
  useEffect(()=>{
    getUsersDetails()
  },[])
    console.log(users)

  return (
    <div>
      <h2>Users List</h2>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Role: {user.role}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;