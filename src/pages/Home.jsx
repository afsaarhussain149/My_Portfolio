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
            className="w-full h-screen sm:h-[68rem] bg-cover sm:bg-center bg-[url('/src/assets/images/AS.jpg')]"
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
      </>
    );
};

export default Home;