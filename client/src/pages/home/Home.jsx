import React from "react";
import useLogout from "../../hooks/useLogout";
const Home = () => {
  const { logout } = useLogout();
  return (
    <>
      <div>Home (Protected Route)</div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button onClick={logout}>Logout</button>
    </>
  );
};

export default Home;
