import { Route, Routes, Navigate } from "react-router-dom";
import { useAuthContext } from "./context/AuthContext";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Profile from "./pages/profile/Profile";
function App() {
  const { authUser } = useAuthContext();
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
        element={authUser? <Profile/>:<Navigate to='/'/>}
        />
      </Routes>
    </>
  );
}

export default App;
