import React from 'react';
import turist from "../../assets/tourist.png";
import { Link } from 'react-router-dom';


const MBanner = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen relative md:hidden'>
        {/* Logo */}
        <div className="mx-auto text-center">
            <img src={turist} alt="Logo" className="w-36 h-36 mx-auto" />
        </div>

        {/* Texts */}
        <div className="text-center mt-6 space-y-3">
            <h1 className='text-xl text-justify p-10'>Touring is an essential part of life because it broadens our perspective and refreshes our mind. When we travel, we break free from our daily routines and experience new cultures, people, and places. It brings joy, excitement, and a deeper understanding of the world around us. Tours allow us to create unforgettable memories, learn history firsthand.</h1>
            
        </div>

        {/* Button fixed to bottom */}
        <div className="absolute bottom-6 w-full px-6">
            <Link to="/login" className="btn btn-warning w-full">
            login
            </Link>
        </div>
    </div>
    );
};

export default MBanner;