
import AOS from 'aos';
import 'aos/dist/aos.css';

import arabic from "../../assets/arbi.png"

import banner2 from "../../assets/banner3.jpg"



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


const Promotion = () => {

  
    return (
        <div data-aos="zoom-in" data-aos-duration="3000" className=' w-full shadow-sm'>

<div className='w-10/12  mx-auto py-10   '>




            <div className='md:flex items-center  md:gap-10 space-y-10 md:space-y-0'>



                <div className='w-full md:w-2/4 '>

                    <img src={arabic} alt="" />
                    <p className='text-5xl font-bold'>Super Delux</p>
                    <p className='text-3xl'>6 Days 5 Night Tour</p>

                </div>

                <div className='w-full md:w-2/4  ' >

                    <img className='w-full rounded-l-full ' src={banner2} alt="" />






                </div>

                 

            </div>


            <form  className="flex items-center w-full max-w-lg mx-auto z-10 relative md:-top-10 top-3">
            <input
                type="text"
                
                placeholder="Search destinations..."
                className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
                type="submit"
                className="px-6 py-2 bg-yellow-400 text-white font-semibold rounded-r-lg hover:bg-yellow-500 transition-all duration-300"
            >
                Search
            </button>
        </form>
        </div>
        </div>
    );
};

export default Promotion;