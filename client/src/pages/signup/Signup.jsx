import React, { useState } from "react";
import useSignup from "../../hooks/useSignup";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const { loading, signup } = useSignup();
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    role: "volunteer", // default role set to "student"
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
    navigate('/completeprofile');
  };


  return (
    <div>
      <h1>Sign-up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={inputs.username}
            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            placeholder="Username"
            required
          />
        </div>
        <div>
          <input
            type="email"
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="password"
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            placeholder="Password"
            required
          />
        </div>
        <div>
          <select
            name="role"
            id="role"
            value={inputs.role}
            onChange={(e) => setInputs({ ...inputs, role: e.target.value })}
          >
            <option value="volunteer">Volunteer</option>
            <option value="leader">Leader</option>
          </select>
        </div>
        <button type="submit">{loading ? "Signing up..." : "Sign-up"}</button>
      </form>
      <p>
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
};

export default SignUp;
