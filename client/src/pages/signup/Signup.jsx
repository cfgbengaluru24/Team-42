// import React, { useState } from "react";
// import useSignup from "../../hooks/useSignup";

// const SignUp = () => {
//   const { loading, signup } = useSignup();
//   const [inputs, setInputs] = useState({
//     username: "",
//     email: "",
//     password: "",
//     role: "volunteer", // default role set to "student"
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await signup(inputs);
//   };

//   return (
//     <div>
//       <h1>Sign-up</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="text"
//             value={inputs.username}
//             onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
//             placeholder="Username"
//             required
//           />
//         </div>
//         <div>
//           <input
//             type="email"
//             value={inputs.email}
//             onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
//             placeholder="Email"
//           />
//         </div>
//         <div>
//           <input
//             type="password"
//             value={inputs.password}
//             onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
//             placeholder="Password"
//             required
//           />
//         </div>
//         <div>
//           <select
//             name="role"
//             id="role"
//             value={inputs.role}
//             onChange={(e) => setInputs({ ...inputs, role: e.target.value })}
//           >
//             <option value="volunteer">Volunteer</option>
//             <option value="leader">Leader</option>
//           </select>
//         </div>
//         <button type="submit">{loading ? "Signing up..." : "Sign-up"}</button>
//       </form>
//       <p>
//         Already have an account? <a href="/login">Login</a>
//       </p>
//     </div>
//   );
// };

// export default SignUp;

// src/components/auth/SignUp.jsx



//utkarsh done
// import React, { useState } from "react";
// import useSignup from "../../hooks/useSignup";
// import "../../index.css";
// import { FaUserPlus } from "react-icons/fa";

// const SignUp = () => {
//   const { loading, signup } = useSignup();
//   const [inputs, setInputs] = useState({
//     username: "",
//     email: "",
//     password: "",
//     role: "volunteer", // default role set to "volunteer"
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await signup(inputs);
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/bgimage.jpg)' }}>
//       <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
//         <div className="flex justify-center mb-4">
//           <FaUserPlus className="text-blue-500 text-4xl" />
//         </div>
//         <h1 className="text-3xl font-bold mb-6 text-center text-gray-700">Sign Up</h1>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <input
//               type="text"
//               value={inputs.username}
//               onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
//               placeholder="Username"
//               required
//               className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <input
//               type="email"
//               value={inputs.email}
//               onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
//               placeholder="Email"
//               required
//               className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <input
//               type="password"
//               value={inputs.password}
//               onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
//               placeholder="Password"
//               required
//               className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <select
//               name="role"
//               id="role"
//               value={inputs.role}
//               onChange={(e) => setInputs({ ...inputs, role: e.target.value })}
//               className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="volunteer">Volunteer</option>
//               <option value="leader">Leader</option>
//             </select>
//           </div>
//           <button 
//             type="submit" 
//             className={`w-full py-3 px-4 rounded-lg text-white ${loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'} transition duration-300`}
//             disabled={loading}
//           >
//             {loading ? "Signing up..." : "Sign Up"}
//           </button>
//         </form>
//         <p className="text-center mt-6 text-gray-600">
//           Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignUp;


// src/components/auth/SignUp.jsx

import React, { useState } from "react";
import useSignup from "../../hooks/useSignup";
import "../../index.css";
import { FaUserPlus } from "react-icons/fa";

const SignUp = () => {
  const { loading, signup } = useSignup();
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    role: "volunteer",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
    navigate('/completeprofile');
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-md">
        <div className="flex justify-center mb-6">
          <FaUserPlus className="text-blue-500 text-5xl" />
        </div>
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Sign Up</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              value={inputs.username}
              onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
              placeholder="Username"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="email"
              value={inputs.email}
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
              placeholder="Email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="password"
              value={inputs.password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
              placeholder="Password"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <select
              name="role"
              id="role"
              value={inputs.role}
              onChange={(e) => setInputs({ ...inputs, role: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="volunteer">Volunteer</option>
              <option value="leader">Learning Circle Leader</option>
            </select>
          </div>
          <button 
            type="submit" 
            className={`w-full py-3 px-4 rounded-md text-white ${loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'} transition duration-300`}
            disabled={loading}
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>
        <p className="text-center mt-6 text-gray-600">
          Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
