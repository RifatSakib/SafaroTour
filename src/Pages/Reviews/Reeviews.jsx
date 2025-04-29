
import AOS from 'aos';
import 'aos/dist/aos.css';

import profile from "../../assets/profile.jpg"

import girl from "../../assets/boy.png"
import { Link } from 'react-router-dom';



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
const Reeviews = () => {
    return (
        <div data-aos="zoom-in" data-aos-duration="3000" className='w-10/12 mx-auto py-10 pt-0'>

            <h1 className='text-4xl py-10 font-bold text-center'>Here What<span className='text-yellow-400'> Our Customers</span> Says?</h1>



            <div className='md:flex  md:gap-10'>



                <div className='w-full md:w-2/4 space-y-10'>


                    <p className='text-justify '>Safaro Tours, we turn every journey into a story worth telling. Our mission is to create travel experiences that are smooth, enriching, and filled with genuine moments. Every itinerary we design is carefully crafted by a team that’s passionate about adventure and authenticity. We go beyond typical tours, offering you a deeper connection to the places you visit — their people, culture, and natural beauty. Whether you're seeking excitement, relaxation, or cultural immersion, Safaro Tours ensures every moment feels effortless, memorable, and true to the spirit of discovery.</p>

                    <Link to="/signup" className="btn btn-outline rounded-full w-full md:w-52 hover:text-white bg-[#ffff00]">
                        Join Us
                    </Link>
                </div>

                <div className='w-full md:w-2/4 md:relative ' >

                    <img className='w-full md:w-1/4 pt-4 md:pt-0' src={profile} alt="" />


                    <div className="w-full md:w-3/4 border-2 border-l-yellow-400 bg-base-100 shadow-lg rounded-lg border-l-8 p-10 space-y-3">
                        <p className='text-justify '>Traveling with Safaro Tours was a dream come true! Every moment was thoughtfully planned, and the team went above and beyond to make us feel safe and welcomed. Highly recommended!</p>
                        <div className='text-end'>
                            <div className="rating rating-md ">
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />

                            </div>
                        </div>



                        <p>— David Winters, Australia</p>
                    </div>


                </div>

            </div>

        </div>
    );
};

export default Reeviews;