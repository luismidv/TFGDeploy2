import "./static/css/roomStyle.css"
import "./static/css/roominfo.css"
import React from "react";
import roomImg from "./static/media/roombanner1.webp"
import roomImg2 from "./static/media/roombanner3.webp"
import roomImg3 from "./static/media/roombanner2.jpg"
import roomImg4 from "./static/media/roombanner4.jpg"
import bedsvg from "./static/media/RoomBanners/bedroom.svg"
import profsvg from "./static/media/RoomBanners/userprof.svg"
import directionsvg from "./static/media/RoomBanners/location.svg"
import eurosvg from "./static/media/RoomBanners/euro.svg"
import bathroomsvg from "./static/media/RoomBanners/bathroom.svg"
import { Link } from 'react-router-dom';
import profilepic from "./static/media/profilepic.jpg"
import {  useTenant  } from "./TenantContext";


export function RoomBannerCall() {
    return(
        <section id = "room-container" className="relative top-80 -left-45 grid lg:grid-cols-2 gap-4 md:grid-cols-1 md: py-40 ">
        

          <RoomBanner label = "Room at the center of Valencia" img = {roomImg}
          rooms = "4 " metters = "120" bathrooms = "2" price = "350 €" bathroomsvg = {bathroomsvg}
          bedroomsvg = {bedsvg}  eurosvg = {eurosvg} 
          profilesvg= {profsvg} username = "PepitoVendepisos"
          directionsvg = {directionsvg} direction ="Joaquin Sorolla street"
          description = "Beatiful house in the center "/>
    
          <RoomBanner label = "Room at the center of Madrid" img = {roomImg2} 
          rooms = "4" metters = "120" bathrooms = "2" price = "350 €" bathroomsvg = {bathroomsvg}
          bedroomsvg = {bedsvg}  eurosvg = {eurosvg} 
          profilesvg = {profsvg} username = "PepitoVendepisos"
          directionsvg = {directionsvg} direction="Joaquin Sorolla street"
          description = "Beatiful house in the center "/>
    
          <RoomBanner label = "Room at the center of Seville" img= {roomImg3} 
          rooms = "4" metters = "120" bathrooms = "2" price = "350 €" bathroomsvg = {bathroomsvg}
          bedroomsvg = {bedsvg}  eurosvg = {eurosvg} 
          profilesvg= {profsvg} username = "PepitoVendepisos"
          directionsvg = {directionsvg} direction ="Joaquin Sorolla street"
          description = "Beatiful house in the center "/>
          
          <RoomBanner label = "Room at the center of Malaga" img= {roomImg4} 
          rooms = "4" metters = "120" bathrooms = "2" price = "350 €" bathroomsvg = {bathroomsvg}
          bedroomsvg = {bedsvg}  eurosvg = {eurosvg} 
          profilesvg= {profsvg} username = "PepitoVendepisos"
          directionsvg = {directionsvg} direction ="Joaquin Sorolla street"
          description = "Beatiful house in the center"
          />
        </section>
      )
}



export function RoomBanner({label, img, rooms, metters, bathrooms,price, bedroomsvg, 
    bathroomsvg, eurosvg,profilesvg, username, directionsvg, direction, description}) {
    
    return(
        <div className = "room-label">
            <img className = "room-banner-img" src = {img}></img>
            <p className = "desc-p"> {label}  </p>
            <div className = "head-info">
                <p className = "metters-p"> {metters} M </p>
            </div>
            <div className = "head-info">
                <p className = "bathrooms-p"> {bathrooms} </p>
                <img className= "bathroom-img" src = {bathroomsvg} ></img>
            </div>
            <div className = "head-info">
                <p className = "bedroom-p">{rooms}</p>
                <img className = "bedroom-img" src = {bedroomsvg} ></img>
            </div>
           <p className = "price-p">  {price}</p>
            
            <img className ="profile-img" src = {profilesvg}></img>
            <p className = "username-p"> {username}</p>
            
            <img className = "direction-img" src = {directionsvg}></img>
            <p className = "direction-p"> {direction}</p>
            
            <Link className="room-info" to ="/inforoom">
                Visit
            </Link>
            {description.split("\n").map((line,index) => (
                <p className = "description-p" key={index}>{line}</p>
            ))}
        </div>
    )
}


export function RoomInfo({label, img, rooms, metters, bathrooms,price, bedroomsvg, 
    bathroomsvg, eurosvg,profilesvg, username, directionsvg, direction, description}) {
    
    return(
        <div className = "super-container">
            <div className = "room-label">
                <img className = "room-banner-img" src = {img}></img>
                <p className = "desc-p"> {label}  </p>
                <div className = "head-info">
                    <p className = "metters-p"> {metters} M </p>
                </div>
                <div className = "head-info">
                    <p className = "bathrooms-p"> {bathrooms} </p>
                    <img className= "bathroom-img" src = {bathroomsvg} ></img>
                </div>
                <div className = "head-info">
                    <p className = "bedroom-p">{rooms}</p>
                    <img className = "bedroom-img" src = {bedroomsvg} ></img>
                </div>
            <p className = "price-p">  {price}</p>
            
                <img className ="profile-img" src = {profilesvg}></img>
                <p className = "username-p"> {username}</p>
            
                <img className = "direction-img" src = {directionsvg}></img>
                <p className = "direction-p"> {direction}</p>
            
            
                {description.split("\n").map((line,index) => (
                    <p className = "description-p" key={index}>{line}</p>
                ))}
            </div>
            <div className = "tenants-info">
                
            </div>
        </div>
    )
    }

export function RecomInfo() {
    const { tenantData } = useTenant();
    const tenants = tenantData.Names?.map((_, index) => ({
        Names : tenantData.Names[index] || "Unknown",
        Age: tenantData.Age[index] || "Age not specified",
        Smoking: tenantData.Smoking[index] === "Yes" ? "Smokes" : "No smoking",
        Email: tenantData.Email[index] || "No email provided",
        Compatibility: tenantData.Similarity[index] || "0.0"

    })) ||[];
    console.log(tenants)
    //DEFINE THE 4 MOST COMPATIBLE TENANTS, PASS EACH ONE TO THE RECOMLINES TO PRINT ATTRIBUTES
     return (
         <div>
             {tenantData.map((tenant, index) => (
                     <div key = {index}>
                         <RecomLines tenant = {tenant} /> <br/><br/>
                     </div>
                 ))}
         </div>
    ) 
}

export function RecomLines({ tenant }){
    const features = [tenant.Names,`${tenant.Age} y/o`,tenant.Smoking,`${tenant.Compatibility}% compatibility`,tenant.Email];
    return(
        <section>
            <img className = "profilepic" src = {profilepic}></img>
            <p style={{ whiteSpace: "pre-wrap", position:"relative", left: "65px", fontWeight: "bold"}}>
                {features.join("\t\t\t")}
            </p>
        </section>
    )
}
