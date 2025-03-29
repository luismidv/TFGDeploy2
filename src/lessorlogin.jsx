import React, { useState } from 'react';
import "./static/css/login.css"
import { Link } from 'react-router-dom';
import { AppExpo } from './App';
import { useNavigate } from 'react-router-dom';
import { createContext, useContext } from 'react';
import { useTenant } from "./TenantContext"
import background1 from './static/media/MAINBG/bg1.jpg'


function Home(){
    const navigate = useNavigate();
}
const LessorLoginPage = () => {
  const { setTenantData } = useTenant()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const validateEmail = (email) => {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

const validatePassword = (password) => {
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    return re.test(password);
};

const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};

const validateForm = () => {
    let emailBool = validateEmail(email);
    let passwordBool = validatePassword(password);

    if (email === "") {
        alert("Email must be filled out");
        return;
    } 

    if (password === "") {
        alert("Password must be filled out");
        return;
    } else if (!passwordBool) {
        alert("Password format is incorrect \n" +
            "Should contain:\n" +
            "- 8 characters minimum\n" +
            "- At least 1 special sign\n" +
            "- At least 1 capital letter");
        return;
    }
    console.log("Hola validate")

    sendBackendData(email, password);
};

const checkCookies = (csrf) => {
  const cookies = document.cookie;
  if (cookies) {
      console.log("Cookies are present:", cookies);
  } else {
      console.log("No cookies found.");
  }

  if (csrf) {
      console.log("CSRF token is present:", csrf);
  } else {
      console.log("No CSRF token found.");
  }
};

const handleSuccesfullConnection = (connection_bool) => {
 
  console.log("Moving to home page")
  navigate("/lessor", {replace: true});
  
}


const sendBackendData = async (username, password) => {
  try {-
      console.log("🔄 Sending login request...");

      const response = await fetch('https://tfgserver.onrender.com/api/token/', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
      });

      console.log("✅ Fetch finished, status:", response.status);

      if (!response.ok) {
          const errorText = await response.text();
          console.error("❌ Server error:", response.status, response.statusText, errorText);
          return;
      }

      const result = await response.json();
      console.log("🎉 Success! Token received:", result);

      if (result.access) {
          console.log("🔑 Storing token...");
          localStorage.setItem('token', result.access); // Save JWT token

          // Fetch user details using the token
          fetchUserData(result.access);
          handleSuccesfullConnection(true);
          
      }
  } catch (error) {
      console.error("⚠️ Fetch error:", error);
      alert("Network error occurred! Check the console for details.");
  }
};

const fetchUserData = async (jwtToken) => {
  try {
      console.log("Fetching user data...");
      
      const response = await fetch('https://tfgserver.onrender.com/api/user/', {
          method: 'GET',
          headers: {
              'Authorization': `Bearer ${jwtToken}`,
              'Content-Type': 'application/json',
          },
      });

      if (!response.ok) {
          console.error("❌ Error fetching user data:", response.status);
          return;
      }

      const userData = await response.json();
      console.log("👤 User info:", userData);
      
  } catch (error) {
      console.error("⚠️ Fetch error while retrieving user data:", error);
  }
};


const handleSubmit = (event) => {
    event.preventDefault();
    validateForm();
};

return (
  <div className="relative flex min-h-screen items-center justify-center bg-gray-100 px-4">
    <div
        className="absolute inset-0 bg-cover bg-center opacity-100 brightness-60"
        style={{ backgroundImage: `url(${background1})` }}
    ></div>
    <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-md">
      
      <h2 className="mb-6 text-center text-2xl font-semibold text-gray-700">Log in</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email-input" className="block text-sm font-medium text-gray-600">
            Username
          </label>
          <input
            type="username"
            id="email-input"
            name="email"
            className="mt-1 w-full rounded border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Your username"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email-password" className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="email-password"
            name="password"
            className="mt-1 w-full rounded border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
            placeholder="**********"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full rounded bg-[#303ab2] px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Continue
        </button>
      </form>

      <p className="mt-4 text-center text-sm text-gray-600">
        Not registered yet?{' '}
        <Link to="/lessorregister" className="text-blue-500 hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  </div>
);
};
export default LessorLoginPage;
