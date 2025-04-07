import { useState } from 'react';
import "./static/css/login.css"
import { useNavigate } from 'react-router-dom';
import {Eye, EyeOff} from 'lucide-react';
import background1 from './static/media/MAINBG/bg1.jpg'
import { useLessor } from './lessorcontext';


function Home(){
  const navigate = useNavigate();
}

const LessorRegisterPage = () => {
    const { setLessorData } = useLessor();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [repassword, setrePassword] = useState('');
    const [telephone, setTelephone] = useState('');
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showrePassword, setShowrePassword] = useState(false);
    
    const validateEmail = (email) => {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const validatePassword = () => {
        console.log(password)
        console.log(repassword)
        var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        if (password !== repassword){
          alert("Passwords introduced are differents, care!")
          return False;
        }
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

    const handleSuccesfullConnection = () => {
      navigate("/lessorpage")
    }

    const sendBackendData = async (email, password, username) => {
        
  
        const type = "Register";
        const data = { email, password, username, telephone, type };
        try {
            console.log("Prepare to fech")
            const response = await fetch('https://tfgserver.onrender.com/api/lessor_identificaiton/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
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
              setLessorData(result);
              console.log("🎉 Success! Response from backend:", result);
              handleSuccesfullConnection();

                
          }
          
        }catch (error) {
          console.error("⚠️ Fetch error (caught in catch block):", error);
          alert("Network error occurred! Check the console for details.");
      };
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
                <label htmlFor="telephone-input" className="block text-sm font-medium text-gray-600">
                  Telephone
                </label>
                <input
                  type="telephone"
                  id="telephone-input"
                  name="telephone"
                  className="mt-1 w-full rounded border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Your telephone"
                  required
                  value={telephone}
                  onChange={(e) => setTelephone(e.target.value)}
                />
              </div>
      
              <div>
                <label htmlFor="email-password" className="block text-sm font-medium text-gray-600">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="email-password"
                  name="password"
                  className="mt-1 w-full rounded border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="**********"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="relative top-[-20px] left-90  transform -translate-y-1/2 text-gray-500"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
                <label htmlFor="repeat-password" className="block text-sm font-medium text-gray-600">
                  Repeat your password
                </label>
                <input
                  type={showrePassword ? "text" : "password"}
                  id="repeat-password"
                  name="repassword"
                  className="mt-1 w-full rounded border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="**********"
                  required
                  value={repassword}
                  onChange={(e) => setrePassword(e.target.value)}
                />
                <button
                  type="button"
                  className="relative top-[-20px] left-90  transform -translate-y-1/2 text-gray-500"
                  onClick={() => setShowrePassword((prev) => !prev)}
                >
                  {showrePassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
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

export default LessorRegisterPage;
