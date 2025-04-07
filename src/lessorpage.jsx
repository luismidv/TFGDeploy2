import { Link } from 'react-router-dom';
import { AppExpo } from './App';
import { useNavigate } from 'react-router-dom';
import { HeadersRent } from './App';
import { Footeras } from './App';
import { LogProvider } from './LogContext';
import{ useState} from "react";
import roomImg from "./static/media/roombanner1.webp"
import roomImg2 from "./static/media/roombanner3.webp"
import roomImg3 from "./static/media/roombanner2.jpg"
import roomImg4 from "./static/media/roombanner4.jpg"
import bedsvg from "./static/media/RoomBanners/bedroom.svg"
import profsvg from "./static/media/RoomBanners/userprof.svg"
import directionsvg from "./static/media/RoomBanners/location.svg"
import eurosvg from "./static/media/RoomBanners/euro.svg"
import bathroomsvg from "./static/media/RoomBanners/bathroom.svg"
import { useLessor } from './lessorcontext';


const LessorPage = () => {
    return (
        <LogProvider>
            <HeadersRent></HeadersRent>
            <h2 className=" relative left-[120px] top-[100px] text-6xl font-bold text-[#303ab2]">Your rooms</h2>
            <Link className="w-[450px] h-[300px] bg-[#303ab2] rounded-xl text-white relative left-[770px] top-[60px] text-3xl font-bold" to="/lessor">
                Add room
            </Link>
                <RoomBannerLessor>

                </RoomBannerLessor>
            <Footeras> </Footeras>
        </LogProvider>
    )
}
export default LessorPage


export function RoomBannerLessor() {
    //CREAR UN LOGPROVIDER PARA LAS LLAMADAS A ROOMBANNER
    //DENTRO DE LOS LOGPROVIDER METEMOS LOS DATOS OBTENIDOS A TRAVES DE LA BASE DE DATOS
    //DE MANERA QUE SI ACCEDEMOS AL PISO NOS MUESTRE LOS DATOS DINAMICAMENTE NO PLACEHOLDER
    const { lessorData } = useLessor();
    console.log(lessorData.roomsData[0].direction)
    return(
        <section id = "room-container" className="relative top-80 -left-65 md:-left-50 grid 2xl:grid-cols-2 gap-4  md:grid-cols-1 md: py-40 ">
        

          <RoomLessor label = {lessorData.roomsData[0].description} img = {roomImg}
          rooms = "4 " metters = "120" bathrooms = "2" price = "350 €" bathroomsvg = {bathroomsvg}
          bedroomsvg = {bedsvg}  eurosvg = {eurosvg} 
          profilesvg= {profsvg} username = "Mark Johnson"
          directionsvg = {directionsvg} direction ="Joaquin Sorolla street"
          description = "Beatiful house in the center "/>
    
          <RoomLessor label = "Room at the center of Madrid" img = {roomImg2} 
          rooms = "4" metters = "120" bathrooms = "2" price = "350 €" bathroomsvg = {bathroomsvg}
          bedroomsvg = {bedsvg}  eurosvg = {eurosvg} 
          profilesvg = {profsvg} username = "Jose Alvarez"
          directionsvg = {directionsvg} direction="Mayor square"
          description = "Beatiful house in the center "/>
    
          <RoomLessor label = "Room at the center of Seville" img= {roomImg3} 
          rooms = "4" metters = "120" bathrooms = "2" price = "350 €" bathroomsvg = {bathroomsvg}
          bedroomsvg = {bedsvg}  eurosvg = {eurosvg} 
          profilesvg= {profsvg} username = "Mark Johnson"
          directionsvg = {directionsvg} direction ="Seville center"
          description = "Beatiful house in the center "/>
          
        </section>
      )
}



export function RoomLessor({label, img, rooms, metters, bathrooms,price, bedroomsvg, 
    bathroomsvg, eurosvg,profilesvg, username, directionsvg, direction, description}) {
    
    return(
        <div className = "room-label lg:w-[800px] lg:h-[500px] md:w-[800px] md:h-[500px] w-[500px] h-[100px] left-[-320px] top-[-300px] lg:left-[300px] md:left-[300px] mb-300 md:mb-0">
            <img className = "room-banner-img w-[80%] height-[70%] relative top-[550px] left-[0px] md:top-[0px] md:left-[420px] md:w-[50%] md:h-[100%]" src = {img}></img>
            <p className = "desc-p"> {label}  </p>
            <div className = "head-info absolute md:left-[120px] md:top-[80px] left-[265px] top-[85px]">
                <p className = "metters-p"> {metters} M </p>
            </div>
            <div className = "head-info1 absolute md:left-[210px] md:top-[80px] left-[190px] top-[85px]">
                <p className = "bathrooms-p"> {bathrooms} </p>
                <img className= "bathroom-img relative" src = {bathroomsvg} ></img>
            </div>
            <div className = "head-info2 absolute md:left-[300px] md:top-[80px] left-[230px] top-[115px]">
                <p className = "bedroom-p">{rooms}</p>
                <img className = "bedroom-img relative top-[-25px]" src = {bedroomsvg} ></img>
            </div>
           <p className = "price-p absolute top-[110px] ">  {price}</p>
            
            <img className ="profile-img absolute top-[200px]" src = {profilesvg}></img>
            <p className = "username-p absolute top-[210px]"> {username}</p>
            
            <img className = "direction-img absolute top-[250px]" src = {directionsvg}></img>
            <p className = "direction-p absolute top-[260px]"> {direction}</p>
            <Link className="w-[450px] h-[300px] bg-[#303ab2] rounded-xl text-white relative left-[220px] top-[-100px] text-2xl font-bold px-4 py-2" to="/lessor">
                Edit room
            </Link>
            <Link className="w-[450px] h-[300px] bg-[#303ab2] rounded-xl text-white relative left-[-130px] top-[-100px] text-2xl font-bold px-4 py-2" to="/lessor">
                Delete room
            </Link>

            {description.split("\n").map((line,index) => (
                <p className = "description-p absolute top-[360px]" key={index}>{line}</p>
            ))}
        </div>
    )
}