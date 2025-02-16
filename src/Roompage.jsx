import companyImage from './static/media/company.jpg';
import houseImage from './static/media/house1.svg';
import bedsImage from './static/media/beds-pillow.svg';
import profileImage from './static/media/profile.svg';
import contactImage from './static/media/agenda-phone-number-svgrepo-com.svg';
import searchImage from './static/media/search-svgrepo-com.svg';
import roomIdxImage from './static/media/room_idx.webp';
import roombannerImage from './static/media/roombanner8.jpg';
import { Link } from 'react-router-dom';
import { AppExpo } from './App';
import { useNavigate } from 'react-router-dom';

import React from "react";
import "./static/css/index1.css";
import "./static/css/roomStyle.css";
import { RoomBannerCall } from './Room';
import { Footeras } from './App';
import { Headers } from './App';

    
function Home(){
    const navigate = useNavigate();
}

export function Template() {
    return (
    <div>
      <Headers></Headers>

      {/* Contenedor de habitaciones */}
      <div id="room-container1">
        <RoomBannerCall />
      </div>

      {/* Sección "Sobre nosotros" */}
      <Footeras></Footeras>
    </div>
  );
}
export default Template;

