// import { useState } from "react";
// import useLogin from "../../hooks/useLogin";
// import "../../index.css";

// const Login = () => {
//   const { loading, login } = useLogin();
//   const [inputs, setInputs] = useState({
//     username: "",
//     password: "",
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await login(inputs);
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="text"
//             placeholder="Username"
//             value={inputs.username}
//             onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
//             required
//           />
//         </div>
//         <div>
//           <input
//             type="password"
//             placeholder="Password"
//             value={inputs.password}
//             onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
//             required
//           />
//         </div>
//         <div></div>
//         <button type="submit">{loading ? "Logging in..." : "Login"}</button>
//       </form>
//       <p>
//         Don't have an account? <a href="/signup">Sign up</a>
//       </p>
//     </div>
//   );
// };

// export default Login;
// src/components/auth/Login.jsx

// import { useState } from "react";
// import useLogin from "../../hooks/useLogin";
// import "../../index.css";

// const Login = () => {
//   const { loading, login } = useLogin();
//   const [inputs, setInputs] = useState({
//     username: "",
//     password: "",
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await login(inputs);
//   };


// i made that
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
//         <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <input
//               type="text"
//               placeholder="Username"
//               value={inputs.username}
//               onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
//               required
//               className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <input
//               type="password"
//               placeholder="Password"
//               value={inputs.password}
//               onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
//               required
//               className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <button 
//             type="submit" 
//             className={`w-full py-2 px-4 rounded text-white ${loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-700'} transition duration-300`}
//             disabled={loading}
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>
//         <p className="text-center mt-4">
//           Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign up</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

// src/components/auth/Login.jsx

import { useState } from "react";
import useLogin from "../../hooks/useLogin";
import "../../index.css";
import { FaUser } from "react-icons/fa";

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/bgimage.jpg)' }}>
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <div className="flex justify-center mb-4">
          <FaUser className="text-blue-500 text-4xl" />
        </div>
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-700">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Username"
              value={inputs.username}
              onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
              required
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={inputs.password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
              required
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button 
            type="submit" 
            className={`w-full py-3 px-4 rounded-lg text-white ${loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'} transition duration-300`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="text-center mt-6 text-gray-600">
          Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
