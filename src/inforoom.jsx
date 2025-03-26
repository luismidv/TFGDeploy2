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
import { RecomInfo, RoomBannerTenants } from "./Room"
import bedsvg from "./static/media/RoomBanners/bedroom.svg"
import profsvg from "./static/media/RoomBanners/userprof.svg"
import directionsvg from "./static/media/RoomBanners/location.svg"
import eurosvg from "./static/media/RoomBanners/euro.svg"
import bathroomsvg from "./static/media/RoomBanners/bathroom.svg"
import { Headers } from "./App";
import { Footeras } from "./App";
import { LogProvider } from './LogContext';


const RoomInfo = () => {
  return (
    <div>
        <LogProvider>
          <Headers>

          </Headers>
        </LogProvider>      
    <div className = "root-room">   
        <RoomBannerTenants label = "Room at the center of Valencia" img = {roombanner3}
            rooms = "4 " metters = "120" bathrooms = "2" price = "350 €" bathroomsvg = {bathroomsvg}
            bedroomsvg = {bedsvg}  eurosvg = {eurosvg} 
            profilesvg= {profsvg} username = "PepitoVendepisos"
            directionsvg = {directionsvg} direction ="Joaquin Sorolla street"
            description = "Beatiful house in the center"> 
        </RoomBannerTenants>
        <section className ="sec-recomend absolute 2xl:top-[100px] 2xl:left-[1100px] md:left-[250px] md:top-[600px] left-[250px] top-[1050px]">
          <RecomInfo></RecomInfo>
        </section>
    </div> 
      
      <Footeras></Footeras>
    </div>
  );
};

export default RoomInfo;
