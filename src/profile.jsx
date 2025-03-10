import React from "react";
import companyLogo from "./static/media/company.jpg";
import houseIcon from "./static/media/house1.svg";
import bedsIcon from "./static/media/beds-pillow.svg";
import profileIcon from "./static/media/profile.svg";
import contactIcon from "./static/media/agenda-phone-number-svgrepo-com.svg";
import searchIcon from "./static/media/search-svgrepo-com.svg";
import { Link } from 'react-router-dom';
import { AppExpo } from './App';
import { useNavigate } from 'react-router-dom';
import "./static/css/index1.css"
import "./static/css/profile.css"
import{ useState} from "react";
import companyImage from './static/media/company.jpg';
import houseImage from './static/media/house1.svg';
import bedsImage from './static/media/beds-pillow.svg';
import profileImage from './static/media/profile.svg';
import contactImage from './static/media/agenda-phone-number-svgrepo-com.svg';
import searchImage from './static/media/search-svgrepo-com.svg';
import roombanner3 from "./static/media/roombanner3.webp";
import roombanner4 from "./static/media/roombanner4.jpg";
import roombanner5 from "./static/media/roombanner5.jpg";
import { Footeras } from "./App";
import { Headers } from "./App";
import { LogProvider } from './LogContext';
import { useLog } from './LogContext'; // Import the context hook



function Home(){
    const navigate = useNavigate();
}

export function ProfileForm(){
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  console.log(token)
  const handleChange = (e) => {
    
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const [formData, setFormData] = useState({

    name : "",
    surnames:"",
    age:"",
    email:"",
    worktime:"",
    biorythm:"",
    studies:"",
    read:"",
    pets:"",
    cook:"",
    sport:"",
    smoke:"",
    organized:"",

  });

  const sendBackendData = async () => {
    //PIPELINE FOR THIS FUNCTION:
      //  -SEND INFO OF THE RECENTLY LOGGED USER
      //  -BACKEND STORE THE INFO IN THE TENANTS TABLE
    e.preventDefault(); // Prevent default form submission behavior
    try {
        const data = {...formData};
        const response = await fetch('https://tfgserver.onrender.com/api/tenants_features/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(data),
            
            
        });

        if (!response.ok) {
          console.error("❌ Server responded with an error:", response.status, response.statusText);
          const errorText = await response.text();
          console.error("❌ Error details:", errorText);
      } else {
          const result = await response.json();
          console.log("🎉 Success! Response from backend:", result);
          
      }
    }catch (error) {
      console.error("⚠️ Fetch error (caught in catch block):", error);
      alert("Network error occurred! Check the console for details.");
  };
};


if (token){
  return (
    <div>
        <LogProvider>
          <Headers>

          </Headers>
        </LogProvider>
      <section className="profile-section">
        <form className="form-class" method="post" onSubmit={sendBackendData}>
          
          <fieldset className="form-fieldset">
            <h1 className="profile-title">Your zone</h1>
            <label className="label-info" htmlFor="name">Name:</label>
            <input className="input-info" onChange={handleChange} type="text" id="name" name="name" placeholder="Your name" required />
            <label className="label-info" htmlFor="surnames">Surname:</label>
            <input className="input-info-surname" onChange={handleChange} type="text" id="surnames" name="surnames" placeholder="Your surnames" required />
            <label className="label-info" htmlFor="age">Age:</label>
            <input className="input-info-age" type="number" onChange={handleChange} id="age" name="age" placeholder="Your age" required />
            <label className="label-info" htmlFor="email">Email:</label>
            <input className="input-info-email" type="email" onChange={handleChange} id="email" name="email" placeholder="Your email" required />
          </fieldset>
          <fieldset className="selectors-fieldset">
            <label className="profile-label" htmlFor="worktime">Do you work during the morning, the night or both?</label>
            <select name = "worktime" value={formData.worktime} className = "relative left-[50px]" onChange={handleChange}  id="worktime">
              <option value="">Both of them</option>
              <option value="morning">Morning</option>
              <option value="night">Night</option>
            </select><br /> <br />
            <label className="profile-label" htmlFor="biorythm">
                When out of work, are you a morning or night person?
            </label><br />
            <select className = "relative left-[50px]"name="biorythm" value={formData.biorythm} onChange={handleChange} id="id-biorythm">
                <option value="morning">Morning</option>
                <option value="night">Night</option>
            </select>
            <br /><br />

      <label className="profile-label" htmlFor="studies">
        Which is your studies level? <br />
      </label>
      <select name = "studies" value={formData.studies} className = "relative left-[50px]" onChange={handleChange} id="level_studies">
        <option value="secondary">Secondary</option>
        <option value="universitary">Universitary</option>
      </select>
      <br /><br />

      <label className="profile-label" htmlFor="reading">
        Do you usually read? <br />
      </label>
      <select  name = "read" value={formData.read} className ="relative left-[50px]" onChange={handleChange}  id="id-read">
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <br /><br />

      <label className="profile-label" htmlFor="pets">
        Are you fine with having pets at home? <br />
      </label>
      <select name = "pets" value={formData.pets} className ="relative left-[50px]" onChange={handleChange} id="id-pets">
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <br /><br />

      <label className="profile-label" htmlFor="cook">
        Do you usually cook? <br />
      </label>
      <select name = "cook" value={formData.cook}className ="relative left-[50px]" onChange={handleChange}  id="id-cook">
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <br /><br />

      <label className="profile-label" htmlFor="sport">
        Do you often do sport? <br />
      </label>
      <select name = "sport" value={formData.sport} className ="relative left-[50px]" onChange={handleChange} id="id-sport">
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <br /><br />

      <label className="profile-label" htmlFor="smoker">
        Do you smoke? <br />
      </label>
      <select  name ="smoke" value={formData.smoke} className ="relative left-[50px]" onChange={handleChange}  id="id-smoker">
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <br /><br />

      <label className="profile-label" htmlFor="orderliness">
        Do you consider yourself an organized person? <br />
      </label>
      <select name = "organized" className ="relative left-[50px]" value={formData.organized} onChange={handleChange} id="id-order">
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <br /><br />

      <button className="profile-button" type="submit">  Save </button> 
        <button className="profile-button" type="submit"> Cancel </button>
          </fieldset>
        </form>
      </section>

      <Footeras></Footeras>
    </div>
    )
  };
    return (
      <div className="text-center align-center p-5">
        <h2 className="text-[#303ab2] text-xl font-bold " > Log in first please</h2>
        <p className="text-gray-700">You first need to log in to access the profile section.</p>
        <button 
          className="bg-[#303ab2] text-white px-4 py-2 rounded mt-3"
          onClick={() => navigate('/login')}
        >
          Go to Login
        </button>
      </div>
      )
}

export default ProfileForm;