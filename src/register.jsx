import { useState } from 'react';
import "./static/css/login.css"
const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const validateEmail = (email) => {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const validatePassword = (password) => {
        var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        return re.test(password);
    };

    const validateForm = () => {
        let emailBool = validateEmail(email);
        let passwordBool = validatePassword(password);
        

        if (email === "") {
            alert("Email must be filled out");
            return;
        } else if (!emailBool) {
            alert("Email format is incorrect");
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

        sendBackendData(email, password,username);
    };

    const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
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

    const sendBackendData = async (email, password, username) => {
        
        console.log("Email: ", email)
        console.log("Password:", password)
        const data = { email, password, username };
        const csrfToken = getCookie('csrfToken');
        console.log("csrfToken",csrfToken)
        try {
            checkCookies(csrfToken);
            console.log("Prepare to fech")
            const response = await fetch('https://tfgserver.onrender.com/api/my_endpoint/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrfToken,
                },
                body: JSON.stringify(data),
                credentials: 'include'
                
            });
            console.log("Fetch finished", response.status)
            
            if (!response.ok) {
              console.error("❌ Server responded with an error:", response.status, response.statusText);
              const errorText = await response.text();
              console.error("❌ Error details:", errorText);
          } else {
              const result = await response.json();
              console.log("🎉 Success! Response from backend:", result);
          }
      } catch (error) {
          console.error("⚠️ Fetch error (caught in catch block):", error);
          alert("Network error occurred! Check the console for details.");
      };
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        validateForm();
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-6 text-center text-2xl font-semibold text-gray-700">Register</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="username-input" className="block text-sm font-medium text-gray-600">
                  Username
                </label>
                <input
                  type="username"
                  id="username-input"
                  name="username"
                  className="mt-1 w-full rounded border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Your username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email-input" className="block text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email-input"
                  name="email"
                  className="mt-1 w-full rounded border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Your email"
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
      
            
          </div>
        </div>
    );
};

export default RegisterPage;
