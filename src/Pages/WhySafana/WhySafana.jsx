
import AOS from 'aos';
import 'aos/dist/aos.css';
import ticket from "../../assets/ticket.png";
import luggage from "../../assets/luggage.png"
import hotel from "../../assets/hotel.png"

import girl from "../../assets/boy.png"



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
const WhySafana = () => {
    return (
        <div data-aos="zoom-in" data-aos-duration="3000" className='w-10/12 mx-auto py-14 pt-0'>
        
                    <h1 className='text-4xl py-10 font-bold text-center'>Why  <span className='text-yellow-400'>Safaro</span> Tours?</h1>
                    <p className='w-8/12 mx-auto text-justify text-center pb-20 '>At Safaro Tours, we believe travel should be unforgettable, seamless, and filled with authentic experiences. Our expert team designs every trip with passion and attention to detail, ensuring you experience the heart and soul of every destination.</p>


                    <div className='md:flex '>
        
                    <div className='w-full md:w-1/4 md:relative flex flex-col md:flex-none mx-auto md:mx-0' >
        
                    <img className=' md:absolute md:-top-20 -z-0' src={girl} alt="" />
                 
        
                    </div>
                   
                    <div className='w-full md:w-3/4 '>
                    <div className=' space-y-2 grid grid-cols-1 md:grid-cols-3 gap-2'>
                    <div className='border p-10 shadow-xl rounded-full text-center space-x-3 '>
                                <h1 className='text-4xl font-bold'>480k+</h1>
                                <p>Satisfied Travelers</p>
                            </div>
        

                            <div className='border p-10 shadow-xl rounded-full text-center space-x-3 '>
                                <h1  className='text-4xl font-bold'>2k+</h1>
                                <p>Successful Tours</p>
                            </div>

                            <div className=' border p-10 shadow-xl rounded-full text-center space-x-3'>
                                <h1  className='text-4xl font-bold'>⭐ 4.7</h1>
                                <p>Overall Ratings</p>
                            </div>
                            
                    </div>
        
                    <p className='text-justify py-10 ' >Safaro Tours was founded with a simple mission: to redefine the way people travel. Combining decades of hospitality expertise with a love for exploration, we offer journeys that inspire, connect, and leave lasting memories.</p>
                            
                        
                    </div>

        
        
                    </div>
        
                </div>
    );
};

export default WhySafana;