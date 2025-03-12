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
import { useEffect, useState } from "react";



export function RoomBannerCall() {
    //CREAR UN LOGPROVIDER PARA LAS LLAMADAS A ROOMBANNER
    //DENTRO DE LOS LOGPROVIDER METEMOS LOS DATOS OBTENIDOS A TRAVES DE LA BASE DE DATOS
    //DE MANERA QUE SI ACCEDEMOS AL PISO NOS MUESTRE LOS DATOS DINAMICAMENTE NO PLACEHOLDER
    return(
        <section id = "room-container" className="relative top-80 -left-65 grid lg:grid-cols-2 gap-60 md:grid-cols-1 md: py-40 ">
        

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
        <div className = "room-label md:w-[800px] md:h-[500px] w-[200px] h-[100px] left-[-500px] top-[-300px] md:left-[300px]">
            <img className = "room-banner-img w-[50%] height-[100%]" src = {img}></img>
            <p className = "desc-p"> {label}  </p>
            <div className = "head-info absolute md:left-[120px] md:top-[80px] left-[260px] top-[115px]">
                <p className = "metters-p"> {metters} M </p>
            </div>
            <div className = "head-info1 absolute left-[210px] top-[80px]">
                <p className = "bathrooms-p"> {bathrooms} </p>
                <img className= "bathroom-img relative" src = {bathroomsvg} ></img>
            </div>
            <div className = "head-info2 absolute left-[300px] top-[80px]">
                <p className = "bedroom-p">{rooms}</p>
                <img className = "bedroom-img relative top-[-25px]" src = {bedroomsvg} ></img>
            </div>
           <p className = "price-p absolute top-[140px] ">  {price}</p>
            
            <img className ="profile-img absolute top-[200px]" src = {profilesvg}></img>
            <p className = "username-p absolute top-[210px]"> {username}</p>
            
            <img className = "direction-img absolute top-[250px]" src = {directionsvg}></img>
            <p className = "direction-p absolute top-[260px]"> {direction}</p>
            
            <Link className="room-info absolute top-[450px]" to ="/inforoom">
                Visit
            </Link>
            {description.split("\n").map((line,index) => (
                <p className = "description-p absolute top-[340px]" key={index}>{line}</p>
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
        const [tenants, setTenants] = useState([]);
        console.log(tenantData.Names, tenantData.Age)
        
        useEffect(() => {
            if (tenantData && tenantData.Names && tenantData.Age && tenantData.Smoking && tenantData.Email && tenantData.Similarity) {
                try {
                    const formattedTenants = Object.keys(tenantData.Names).map((key, index) => ({
                        Names: tenantData.Names[index],
                        Age: tenantData.Age[index],
                        Smoking: tenantData.Smoking[index] === "Yes" ? "Smokes" : "No smoking",
                        Email: tenantData.Email[index],
                        Similarity: tenantData.Similarity[index]
                    }));
                    setTenants(formattedTenants);
                } catch (error) {
                    console.error("Error processing tenantData:", error);
                }
            } else {
                console.error("tenantData is missing or not properly structured");
            }
        }, [tenantData]);   
    
        return (
            <div>
                {tenants.length === 0 ? (
                    <p>Loading tenants...</p>  
                ) : (
                    tenants.map((tenant, index) => (
                        <div key={index}>
                            <RecomLines tenant={tenant} />
                            <br /><br />
                        </div>
                    ))
                )}
            </div>
        );
    }
    
    export function RecomLines({ tenant }) {
        const changeEmail = (email, maximumLength = 20)=>
            email.length > maximumLength ? email.slice(0, maximumLength) + "...": email;
    
        const features = [
            tenant.Names,
            `${tenant.Age} y/o`,
            tenant.Smoking,
            `${tenant.Similarity}% Similarity`,
            changeEmail(tenant.Email)
        ];
    
        return (
            <section>
                <img className="profilepic" src="default-pic.jpg" alt="Profile" />
                <p style={{ whiteSpace: "pre-wrap", position: "relative", left: "65px", fontWeight: "bold" }}>
                    {features.join("\t\t\t")}
                </p>
            </section>
        );
    }

// export function RecomLines({ tenant }){
//     console.log("RecomLines")
//     const features = [tenant.Names,`${tenant.Age} y/o`,tenant.Smoking,`${tenant.Compatibility}% compatibility`,tenant.Email];
//     return(
//         <section>
//             <img className = "profilepic" src = {profilepic}></img>
//             <p style={{ whiteSpace: "pre-wrap", position:"relative", left: "65px", fontWeight: "bold"}}>
//                 {features.join("\t\t\t")}
//             </p>
//         </section>
//     )
// }
