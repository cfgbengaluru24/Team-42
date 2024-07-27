// import React from "react";
// import useLogout from "../../hooks/useLogout";
// import { useAuthContext } from "../../context/AuthContext";
// const Home = () => {
//   const user = useAuthContext();
//   const { logout } = useLogout();
//   console.log(user.authUser.role);
//   return (
//     <>
//       <div>Home (Protected Route)</div>
//       <h1 className="text-3xl font-bold underline">Hello world!</h1>
//       <button onClick={logout}>Logout</button>
//       <p>ROLE: {user.authUser.role}</p>
//     </>
//   );
// };

// export default Home;
// src/components/Home.jsx

import React from "react";
import useLogout from "../../hooks/useLogout";
import { useAuthContext } from "../../context/AuthContext";

const Home = () => {
  const user = useAuthContext();
  const { logout } = useLogout();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 className="text-4xl font-bold mb-4">Welcome, {user.authUser.name}!</h1>
        <p className="text-lg mb-6">You are logged in as <span className="font-semibold">{user.authUser.role}</span>.</p>
        <button 
          onClick={logout} 
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
