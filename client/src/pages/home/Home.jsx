import React from "react";
import useLogout from "../../hooks/useLogout";
import { useAuthContext } from "../../context/AuthContext";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  const user = useAuthContext();

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
          <h1 className="text-4xl font-bold mb-4">
            Welcome, {user.authUser.username}!
          </h1>
          <p className="text-lg mb-6">
            You are logged in as{" "}
            <span className="font-semibold">{user.authUser.role}</span>.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
