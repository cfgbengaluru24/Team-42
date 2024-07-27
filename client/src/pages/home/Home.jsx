import React from "react";
import useLogout from "../../hooks/useLogout";
import { useAuthContext } from "../../context/AuthContext";
const Home = () => {
  const user = useAuthContext();
  const { logout } = useLogout();
  console.log(user.authUser.role);
  return (
    <>
      <div>Home (Protected Route)</div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button onClick={logout}>Logout</button>
      <p>ROLE: {user.authUser.role}</p>
    </>
  );
};

export default Home;
