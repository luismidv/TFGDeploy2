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


function Home(){
    const navigate = useNavigate();
}


export function ProfileForm(){

    const [formData, setFormData] = useState({
        name : "",
        surnames:"",
        age:"",
        email:"",
        worktime:"",
        biorythm:"",
        level_studies:"",
        reading:"",
        pets:"",
        cook:"",
        sport:"",
        smoker:"",
        orderliness:"",
    });


const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
}

const handleSubmit = async(e) => {
    e.preventDefault();

    try{
        const response = await fetch("https://tfgserver.onrender.com/api/algo_view/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
    });

      const result = await response.json();
      alert("Form submitted successfully");
    }catch(error){
      console.error("Error submitting form: ", error);
      alert("Failed to submit the form");
    }
  };
  return (
    <div>
        <Headers></Headers>

      <section className="profile-section">
        <form className="form-class" method="post" action="/">
          <fieldset className="form-fieldset">
            <h1 className="profile-title">Your zone</h1>
            <label className="label-info" htmlFor="name">Name:</label>
            <input className="input-info" type="text" id="name" name="name" placeholder="Your name" required />
            <label className="label-info" htmlFor="surnames">Surname:</label>
            <input className="input-info-surname" type="text" id="surnames" name="surnames" placeholder="Your surnames" required />
            <label className="label-info" htmlFor="age">Age:</label>
            <input className="input-info-age" type="number" id="age" name="age" placeholder="Your age" required />
            <label className="label-info" htmlFor="email">Email:</label>
            <input className="input-info-email" type="email" id="email" name="email" placeholder="Your email" required />
          </fieldset>
          <fieldset className="selectors-fieldset">
            <label className="profile-label" htmlFor="worktime">Do you work during the morning, the night or both?</label>
            <select name="worktime" id="worktime">
              <option value="">Both of them</option>
              <option value="morning">Morning</option>
              <option value="night">Night</option>
            </select><br />
            <label className="profile-label" htmlFor="biorythm">
                When out of work, are you a morning or night person?
            </label>
            <select name="biorythm" id="id-biorythm">
                <option value="morning">Morning</option>
                <option value="night">Night</option>
            </select>
            <br /><br />

      <label className="profile-label" htmlFor="studies">
        Which is your studies level?
      </label>
      <select name="level_studies" id="level_studies">
        <option value="secondary">Secondary</option>
        <option value="universitary">Universitary</option>
      </select>
      <br /><br />

      <label className="profile-label" htmlFor="reading">
        Do you usually read?
      </label>
      <select name="reading" id="id-read">
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <br /><br />

      <label className="profile-label" htmlFor="pets">
        Are you fine with having pets at home?
      </label>
      <select name="pets" id="id-pets">
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <br /><br />

      <label className="profile-label" htmlFor="cook">
        Do you usually cook?
      </label>
      <select name="cook" id="id-cook">
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <br /><br />

      <label className="profile-label" htmlFor="sport">
        Do you often do sport?
      </label>
      <select name="sport" id="id-sport">
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <br /><br />

      <label className="profile-label" htmlFor="smoker">
        Do you smoke?
      </label>
      <select name="smoker" id="id-smoker">
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <br /><br />

      <label className="profile-label" htmlFor="orderliness">
        Do you consider yourself an organized person?
      </label>
      <select name="orderliness" id="id-order">
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
  );
}
export default ProfileForm;