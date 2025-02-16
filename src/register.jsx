import { useState } from 'react';
import "./static/css/login.css"
const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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

        sendBackendData(email, password);
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

    const sendBackendData = async (email, password) => {
        
        console.log("Email: ", email)
        console.log("Password:", password)
        const data = { email, password };
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
      <div className="log-in-container">
        <p className="log-in-text">Register</p>
        <form className="form-class" name="register-form" onSubmit={handleSubmit}>
          <fieldset className="form-fieldset">
          <label className="label-email" htmlFor="email-input">Email</label>
              <input
                className ="input-email"
                type="email" 
                name="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />
          <label className="label-password" htmlFor="email-password">Password</label>
            <input 
                className ="input-password"
                type="password" 
                name="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            <button className="log-in-form" type="submit">
             
             Continue
           </button>
          </fieldset>
        </form>
      </div>
    );
};

export default RegisterPage;
