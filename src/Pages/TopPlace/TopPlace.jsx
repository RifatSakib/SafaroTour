import React from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import fuji from "../../assets/fuji.jpg";
import petra from "../../assets/petra.jpg";
import halong from "../../assets/halong.jpg";

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
const TopPlace = () => {
    return (
          <div data-aos="zoom-in" data-aos-duration="3000" className='w-10/12 mx-auto py-14 pt-0'>
                    {/* Title */}
                    <h1 className='text-4xl text-center py-10 font-bold'>
                        <span className='text-yellow-400 font-bold'>Top</span> Tour Palaces For You
                    </h1>
        
                    {/* Cards */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
                        
                        {/* Card 1 */}
                        <div className="card card-compact bg-base-100 shadow-xl transform transition-transform duration-500 hover:scale-105">
                            <figure>
                                <img src={fuji} alt="Taj Mahal" />
                            </figure>
                            <div className="card-body">
                                <h2 className="text-2xl font-bold text-center">Mount Fuji</h2>
                                <p className='text-gray-400 text-center text-xl'>Japan</p>
                            </div>
                        </div>
        
                        {/* Card 2 */}
                        <div className="card card-compact bg-base-100 shadow-xl transform transition-transform duration-500 hover:scale-105">
                            <figure>
                                <img src={petra} alt="Dolomites" />
                            </figure>
                            <div className="card-body">
                                <h2 className="text-2xl font-bold text-center">Petra</h2>
                                <p className='text-gray-400 text-center text-xl'>Jordan</p>
                            </div>
                        </div>
        
                        {/* Card 3 */}
                        <div className="card card-compact bg-base-100 shadow-xl transform transition-transform duration-500 hover:scale-105">
                            <figure>
                                <img src={halong} alt="Badshahi Mosque" />
                            </figure>
                            <div className="card-body">
                                <h2 className="text-2xl font-bold text-center">Ha Long Bay</h2>
                                <p className='text-gray-400 text-center text-xl'>Vietnam</p>
                            </div>
                        </div>
        
                    </div>
                </div>
    );
};

export default TopPlace;