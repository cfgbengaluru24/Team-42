import React from "react";

const Dashboard = () => {
  const user = localStorage.getItem(user);
  console.log(user);
  return (
    <h1 className="text-4xl font-bold mb-4">
      Welcome, {user.authUser.username}!{console.log(user)}
    </h1>
  );
};

export default Dashboard;
