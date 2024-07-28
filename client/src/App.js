import { Route, Routes, Navigate } from "react-router-dom";
import { useAuthContext } from "./context/AuthContext";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Profile from "./pages/profile/Profile";
import Dashboard from "./pages/volunteerdashboard/Dashboard";

function App() {
  const { authUser } = useAuthContext();
  const isVolunteer = authUser?.role === "volunteer";

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <Signup />}
        />
        <Route
          path="/completeprofile"
          element={authUser ? <Profile /> : <Navigate to="/" />}
        />
        <Route
          path="/volunteerDashboard"
          element={isVolunteer ? <Dashboard /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  );
}

export default App;
