import React from 'react';
import Bg from "../../../assets/bg.png";
import Bg2 from "../../../assets/bg2.png";
import Bg3 from "../../../assets/bg3.png";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import bgBoat from "../../../assets/bg-boat.jpg";

AOS.init();

// You can also pass an optional settings object
AOS.init({
    disable: false,
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,
    offset: 120,
    delay: 0,
    duration: 400,
    easing: 'ease',
    once: true,
    mirror: false,
    anchorPlacement: 'top-bottom',
});

const Banner = () => {
    return (
        <div
            className='w-full mx-auto  bg-cover bg-center bg-fixed h-screen mb-10'
            style={{ backgroundImage: `url(${bgBoat})` }}
        >
            <div className='flex flex-col justify-center h-full w-8/12 mx-auto space-y-4 md:space-y-10'>
                <h1 className='text-2xl text-center md:text-start md:text-5xl text-yellow-400 font-bold'>Explore the unseen</h1>
                <h1 className='text-2xl text-center md:text-start md:text-5xl text-white font-bold'>Discover the new way</h1>
                <Link to="/signup" className="w-full btn btn-outline rounded-full md:w-52 hover:text-white bg-[#ffff00]">
                    Join Us
                </Link>
            </div>
        </div>
    );
};

export default Banner;
