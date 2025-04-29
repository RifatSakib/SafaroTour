import React from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import tajmahal from "../../assets/tajmahal.jpg";
import badshahi from "../../assets/badshahi.jpg";
import dolomites from "../../assets/dolomites.jpg";

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

const BestDestination = () => {
    return (
        <div data-aos="zoom-in" data-aos-duration="3000" className='w-10/12 mx-auto py-14 pt-0'>
            {/* Title */}
            <h1 className='text-4xl text-center py-10 font-bold'>
                <span className='text-yellow-400 font-bold'>Best</span> Destinations
            </h1>

            {/* Cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
                
                {/* Card 1 */}
                <div className="card card-compact bg-base-100 shadow-xl transform transition-transform duration-500 hover:scale-105">
                    <figure>
                        <img src={tajmahal} alt="Taj Mahal" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-2xl font-bold text-center">Taj Mahal</h2>
                        <p className='text-gray-400 text-center text-xl'>India</p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="card card-compact bg-base-100 shadow-xl transform transition-transform duration-500 hover:scale-105">
                    <figure>
                        <img src={dolomites} alt="Dolomites" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-2xl font-bold text-center">Dolomites</h2>
                        <p className='text-gray-400 text-center text-xl'>Italy</p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="card card-compact bg-base-100 shadow-xl transform transition-transform duration-500 hover:scale-105">
                    <figure>
                        <img src={badshahi} alt="Badshahi Mosque" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-2xl font-bold text-center">Badshahi Mosque</h2>
                        <p className='text-gray-400 text-center text-xl'>Pakistan</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BestDestination;
