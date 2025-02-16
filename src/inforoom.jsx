import React from "react";
import "./static/css/index1.css";
import "./static/css/roomStyle.css";
import "./static/css/slider.css";
import { Link } from "react-router-dom"
import companyImage from './static/media/company.jpg';
import houseImage from './static/media/house1.svg';
import bedsImage from './static/media/beds-pillow.svg';
import profileImage from './static/media/profile.svg';
import contactImage from './static/media/agenda-phone-number-svgrepo-com.svg';
import searchImage from './static/media/search-svgrepo-com.svg';
import roombanner3 from "./static/media/roombanner3.webp";
import roombanner4 from "./static/media/roombanner4.jpg";
import roombanner5 from "./static/media/roombanner5.jpg";
import { RecomInfo, RoomBanner } from "./Room"
import bedsvg from "./static/media/RoomBanners/bedroom.svg"
import profsvg from "./static/media/RoomBanners/userprof.svg"
import directionsvg from "./static/media/RoomBanners/location.svg"
import eurosvg from "./static/media/RoomBanners/euro.svg"
import bathroomsvg from "./static/media/RoomBanners/bathroom.svg"
import { Headers } from "./App";
import { Footeras } from "./App";


const RoomInfo = () => {
  return (
    <div>
      <Headers></Headers>
      
    <div className = "root-room">   
        <RoomBanner label = "Room at the center of Valencia" img = {roombanner3}
            rooms = "4 " metters = "120" bathrooms = "2" price = "350 €" bathroomsvg = {bathroomsvg}
            bedroomsvg = {bedsvg}  eurosvg = {eurosvg} 
            profilesvg= {profsvg} username = "PepitoVendepisos"
            directionsvg = {directionsvg} direction ="Joaquin Sorolla street"
            description = "Beatiful house in the center"> 
        </RoomBanner>
        <section className ="sec-recomend">
          <RecomInfo></RecomInfo>
        </section>
      
      <div className="slideshow-container">
        <div className="mySlides fade">
          <div className="numbertext">1 / 3</div>
          <img className="slide-img" src={roombanner3} alt="Room 1" />
          <div className="text">Caption Text</div>
        </div>
        <div className="mySlides fade">
          <div className="numbertext">2 / 3</div>
          <img className="slide-img" src={roombanner4} alt="Room 2" />
          <div className="text">Caption Two</div>

        </div>
        <div className="mySlides fade">
          <div className="numbertext">3 / 3</div>
          <img className="slide-img" src={roombanner5} alt="Room 3" />
          <div className="text">Caption Three</div>
        </div>
        <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
        <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
      </div>
      
      <div style={{ textAlign: "center" }}>
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
      </div>
    </div> 
      
      <Footeras></Footeras>
    </div>
  );
};

export default RoomInfo;
