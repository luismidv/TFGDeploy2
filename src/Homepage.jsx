
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
import { Headers } from './App';
import { Footeras } from './App';

function Home(){
    const navigate = useNavigate();
}
  


const HomePage = () => {
    return (
      <div>
        <Headers></Headers>
  
        <div id="image-expo" className="image-expositor">
          <AppExpo />
        </div>
        <div className = "text-section text-center md:text-left relative md:translate-y-0 translate-y-[700px] transition-transform duration-300">
          
          <a className="form-button block translate-x-[500px] md:translate-x-0 transition-transform duration-300" href="./src/templates/room/started.html" target="_blank" rel="noopener noreferrer">
            Get started
          </a>
        </div>
  
        <section className="why-us text-center md:text-left relative md:translate-y-0 translate-y-[1200px] transition-transform duration-300">
          <h1 className="why-us-h1">Why choosing Roomatch</h1>
          <p className="why-us-p">
            Find your dream room <br /> <br />
            Match incredible partners <br /> <br />
            Contact with them <br /> <br />
            Live the best sharing experience <br /> <br />
            Sharing a home can be a difficult experience <br />our idea is to turn that experience into<br />
            <strong>The greatest one possible.</strong>
          </p>
          <img className="img-banner w-full md:w-auto" src={roombannerImage} alt="Why Roomatch" />
        </section>
  
        <Footeras></Footeras>
      </div>
    );
};
  
export default HomePage;
