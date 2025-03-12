
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
import { LogProvider } from './LogContext';


function Home(){
    const navigate = useNavigate();
}
  


const HomePage = () => {
  const token = localStorage.getItem('token');

    return (
      <div>
        <LogProvider>
          <Headers>

          </Headers>
        </LogProvider>
  
        <div id="image-expo" className="image-expositor">
          <AppExpo />
        </div>
        <div className = "text-section text-center md:text-left relative md:translate-y-0 translate-y-[700px] transition-transform duration-300">
        
        
        {token ? (
          <Link
            to="/profile"
            className="form-button block absolute  left-[250px] top-[2300px] md:left-[650px] md:top-[1500px] lg:left-[770px] lg:top-[1150px] md: transition-transform duration-300"
          >
            Get started
          </Link>
        ) : (
          <Link
            to="/login"
            className="form-button block absolute left-[100px] top-[1500px] md:left-[650px] md:top-[1500px] lg:left-[770px] lg:top-[1150px] transition-transform duration-300"
          >
            Get Started
          </Link>
        )}
        </div>
  
        <section className="why-us lg:translate-y-0 sm: translate-y-[500px] md:translate-y-[200px] hidden md:block transition transform duration-300">
          <h1 className="why-us-h1">Why choosing Roomatch</h1>
          <p className="why-us-p">
            Find your dream room <br /> <br />
            Match incredible partners <br /> <br />
            Contact with them <br /> <br />
            Live the best sharing experience <br /> <br />
            Sharing a home can be a difficult experience <br />our idea is to turn that experience into<br />
            <strong>The greatest one possible.</strong>
          </p>
          <img className="img-banner" src={roombannerImage} alt="Why Roomatch" />
        </section>
  
        <Footeras></Footeras>
      </div>
    );
};
  
export default HomePage;
