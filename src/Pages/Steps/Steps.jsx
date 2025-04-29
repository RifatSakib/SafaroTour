
import AOS from 'aos';
import 'aos/dist/aos.css';
import ticket from "../../assets/ticket.png";
import luggage from "../../assets/luggage.png"
import hotel from "../../assets/hotel.png"

import girl from "../../assets/girl.png"



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
const Steps = () => {
    return (
        <div data-aos="zoom-in" data-aos-duration="3000" className='w-10/12 mx-auto py-14 pt-0'>

            <h1 className='text-4xl py-10 font-bold'>Start Your Next Trip in Just 3 Steps</h1>
            
            <div className='md:flex '>

           
            <div className='w-full md:w-1/2  space-y-2'>

                    <div className='flex  items-center space-x-3 font-bold'>
                        <img className=' md:w-14' src={ticket} alt="" />
                        <p className=''>Book Your Ticket</p>
                    </div>

                    <div className='flex  items-center space-x-3 font-bold'>
                        <img className='w-14'  src={hotel} alt="" />
                        <p className=''>Book Your Hotel</p>
                    </div>

                    <div className='flex  items-center space-x-3 font-bold'>
                        <img className='w-14'  src={luggage} alt="" />
                        <p className=''>Pack Your Luggage</p>
                    </div>
            </div>

            <div className='w-full md:w-1/2  md:relative' >

            <img className=' md:absolute md:-top-36 -z-0' src={girl} alt="" />
            <p className='border-2 rounded-xl border-yellow-400 p-5 w-40 z-10 left-20 md:left-96 font-bold relative text-xl text-center '> 2K+ Customer</p>

            </div>

            </div>

        </div>
    );
};

export default Steps;