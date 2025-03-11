import React from 'react';
import './static/css/index1.css'; // Assuming the CSS files are stored in the 'static/css' folder
import { Banner } from './Banner';
import roombannerImage1 from './static/media/roombanner1.webp';
import roombannerImage2 from './static/media/roombanner2.jpg';
import roombannerImage3 from './static/media/roombanner3.webp';
import roombannerImage4 from './static/media/roombanner4.jpg';
import roombannerImage5 from './static/media/roombanner5.jpg';
import roombannerImage6 from './static/media/roombanner6.webp';
import background1 from './static/media/MAINBG/bg1.jpg'
import background2 from './static/media/MAINBG/bg2.jpg'
import background3 from './static/media/MAINBG/bg3.jpg'
import background4 from './static/media/MAINBG/bg4.jpg'
import { Link } from 'react-router-dom';
import { Template } from './Roompage';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Homepage';
import ProfileComponent from './profile';
import RegisterPage from './register';
import LoginPage from './login'
import RoomInfo from './inforoom';
import companyImage from './static/media/company.jpg';
import houseImage from './static/media/house1.svg';
import bedsImage from './static/media/beds-pillow.svg';
import profileImage from './static/media/profile.svg';
import contactImage from './static/media/agenda-phone-number-svgrepo-com.svg';
import searchImage from './static/media/search-svgrepo-com.svg';
import Started from './started';
import {useState, useEffect } from "react";
import { useLog } from './LogContext'; // Import the useUser hook
import { TenantProvider } from './TenantContext';
import { Lessor } from "./lessor.jsx"


export function AppExpo(){
  return (
    <div className = "banners-flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Banner image = {roombannerImage1} title = "Room number 1" ></Banner>
      <Banner image = {roombannerImage2} title = "Room number 2"></Banner>
      <Banner image = {roombannerImage3} title = "Room number 3"></Banner> 
      <Banner image = {roombannerImage4} title = "Room number 4"></Banner>
      <Banner image = {roombannerImage5} title = "Room number 5"></Banner>
      <Banner image = {roombannerImage6} title = "Room number 6"></Banner>
    </div>
  )
}

export function App() {
  return (
      
    <TenantProvider>
      <Routes>
        <Route path ="/"  element = {<Intro />} />
        <Route path ="/home"  element = {<HomePage />} />
        <Route path="/rooms" element={<Template />} />
        <Route path ="/profile"  element = {<ProfileComponent />} />
        <Route path="/contact" element={<Template />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/inforoom" element={<RoomInfo />} />
        <Route path="/started" element={<Started />} />
        <Route path="/lessor" element ={<Lessor />} />
      </Routes>
    </TenantProvider>
    
  );
}
export default App;

const Header = () => {
  const { user, logout } = useUser();
}

const Navbar = ({user, setUser}) => {
  const navigate = useNavigate();
}



export function Headers(){

  const handleLogout = () => {
    //Function used to handle logout in the page
    console.log("🚪 Logging out...");
    logout();
    navigate('/home');
    
  };

  const [setUser] = useState(() => {
    const token = localStorage.getItem('token');
    return token ? { loggedIn: true } : null;
  });
  const {user, login, logout} = useLog();
  return (
    
      
        <div>
          <div className="top-container p-6 rounded-lg shadow-lg">
            <img className="mainlogo" src={companyImage} alt="Company Logo" />
            <p className="pslogan text-center md:text-left">Improving your house sharing experience</p>
    
               <div className="menu-div justify-center">
                  <Link className="rooti-button" to="/home">
                     <img src={houseImage} alt="Home" />
                  </Link>
  
                  <Link className="rooti-button " to="/rooms">
                      <img src={bedsImage} alt="Rooms" />
                  </Link>
    
                  <Link className="rooti-button" to="/profile">
                      
                      <img src={profileImage} alt="Profile" />
                  </Link>
    
                  <Link className="rooti-button" to="/contact">
                      <img src={contactImage} alt="Contact" />
                  </Link>
              </div>
    
              {user ? (
              <Link className="log-in-button" to="/home" onClick= {handleLogout}>
                <p className="link-text text-center">Logout</p>
              </Link>

            ) : (
              <Link className="log-in-button" to="/login">
                  <p className="link-text text-center">Access</p>
              </Link>

            )}
              
          </div>
          <section className="recomendations max-w-[700px] w-full md:text-left">
            <p className="text-descriptive">Need a room?</p>
            <p className="text-descriptive-2 block sm:hidden">Discover our crazy offers</p>
            <p className="text-descriptive-2 hidden sm:block">
            Discover our crazy offers & Share with your dream partners
            </p>
            <div className="text-div"></div>
          </section>
    
        
    
        </div>
    
      );
  };

  export function HeadersRent(){

    const handleLogout = () => {
      //Function used to handle logout in the page
      console.log("🚪 Logging out...");
      logout();
      navigate('/home');
      
    };
  
    const [setUser] = useState(() => {
      const token = localStorage.getItem('token');
      return token ? { loggedIn: true } : null;
    });
    const {user, login, logout} = useLog();
    return (
      
        
          <div>
            <div className="top-container p-6 rounded-lg shadow-lg">
              <img className="mainlogo" src={companyImage} alt="Company Logo" />
              <p className="pslogan text-center md:text-left">Improving your house sharing experience</p>
      
                 <div className="menu-div justify-center">
                    <Link className="rooti-button" to="/home">
                       <img src={houseImage} alt="Home" />
                    </Link>
    
                    <Link className="rooti-button " to="/rooms">
                        <img src={bedsImage} alt="Rooms" />
                    </Link>
                  </div>

                
            </div>
            <section className="recomendations max-w-[700px] w-full md:text-left">
              <p className="text-descriptive">Need a room?</p>
              <p className="text-descriptive-2 block sm:hidden">Discover our crazy offers</p>
              <p className="text-descriptive-2 hidden sm:block">
              Discover our crazy offers & Share with your dream partners
              </p>
              <div className="text-div"></div>
            </section>
      
          
      
          </div>
      
        );
    };

export function Footeras(){
  return(
  <section className="about-us lg:py-20 text-center md:text-left relative md:translate-y-0 translate-y-[700px] lg:h-[600px] md:h-[800px] h-[1200px] transition-transform duration-300">
  <h1 className="about-us-h1 mb-6">About us</h1>
    <div class ="about-div grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
      <p className="p-div-section text-3xl py-20 relative -translate-x-[19px] ">
        <strong>Our purpose</strong> <br />
        Mainly our purpose is to help people <br />
        have the best experience when <br />sharing a home.
      </p>

      <p className="p-div-section text-3xl py-20 relative -translate-x-[19px]  ">
      <strong>Who are we?</strong> <br />
        Company created in 2024 as a final <br /> degree project
        with the idea of <br />improving students' sharing experience.
      </p>

      <p className="p-div-section text-3xl py-20 relative -translate-x-[19px] ">
      <strong>Our team</strong> <br />
        Our team is composed of 1 person: <br />a computer science 
        student focused <br />on machine learning.
      </p>

      <p className="p-div-section text-3xl py-20 relative -translate-x-[19px] ">
      
      <strong>Work with us</strong> <br />
        Feel free to message us via our email or <br />
        LinkedIn if you’re considering working with us.
      </p>
  </div>
</section>



  )
}

export function Intro() {
  return (
    <div className="relative h-screen w-screen flex items-center justify-center">
      
      <div
        className="absolute inset-0 bg-cover bg-center opacity-100 brightness-60"
        style={{ backgroundImage: `url(${background1})` }}
      ></div>

      
      <div className="relative flex flex-col items-center text-center text-white px-6">
        <img className="w-64 md:w-96 lg:w-[500px] h-auto mb-4" src={companyImage} alt="Company Logo" />
        <p className="mt-4 text-lg md:text-2xl font-bold">Improving your house sharing experience</p>

        
        <div className="mb-4 flex flex-col md:flex-row gap-2">
          <Link 
            className="w-full md:w-60 h-14 bg-white text-black text-lg font-semibold flex items-center justify-center rounded-lg shadow-lg"
            to="/home"
          > I am searching for a room </Link>

          <Link 
            className="w-full md:w-60 h-14 bg-white text-black text-lg font-semibold flex items-center justify-center rounded-lg shadow-lg"
            to="/lessor"
          > I am renting a room </Link>
        </div>
      </div>
    </div>
  );
};
  

    
  



