import { useState } from "react";
import useLogin from "../../hooks/useLogin";
import "../../index.css";

const Login = () => {
  const { loading, login } = useLogin();
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(inputs);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={inputs.username}
            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            required
          />
        </div>
        <div></div>
        <button type="submit">{loading ? "Logging in..." : "Login"}</button>
      </form>
      <p>
        Don't have an account? <a href="/signup">Sign up</a>
      </p>
    </div>
  );
};

export default Login;
