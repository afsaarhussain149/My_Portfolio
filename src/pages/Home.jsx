import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

const Home = () => {

    useEffect(() => {    
        AOS.init({ duration: 1000 });
        window.scrollTo(0, 0);
    }, []);

    return (
      <>
        <div 
        className="w-full h-[300px] sm:h-[68rem] bg-cover bg-[center_top_5%] sm:bg-[center_top_40%] bg-no-repeat"
        style={{ backgroundImage: "url('https://i.postimg.cc/nhxx5wFg/AS.jpg')" }}
        >
            <div 
              className="w-full min-h-[500px] sm:min-h-[68rem] bg-cover bg-[center_top_5%] sm:bg-[center_top_40%] bg-no-repeat"
              style={{ backgroundImage: "url('https://i.postimg.cc/nhxx5wFg/AS.jpg')" }}
            >
              <div className="text-center px-4 py-32 md:py-[20rem]" data-aos="zoom-in">
                <h1 className="text-3xl sm:text-5xl font-semibold text-white">Afsar Hussain</h1>
                <p className="text-lg sm:text-2xl mt-3 sm:mt-4 text-white">
                  I am Frontend and Backend Developer
                </p>
                <Link to="/about">
                  <button className="text-white font-semibold tracking-widest bg-[#34b7a7] mt-6 sm:mt-9 px-6 sm:px-9 py-2 rounded-full hover:scale-105 transition-transform duration-300">
                    About Me
                  </button>
                </Link>
              </div>
            </div>
        </div>
      </>
    );
};

export default Home;
