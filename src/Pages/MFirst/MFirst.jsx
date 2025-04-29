import React from 'react';
import logo from "../../assets/mountain.png";
import { Link } from 'react-router-dom';

const MFirst = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen relative'>
            {/* Logo */}
            <div className="mx-auto text-center">
                <img src={logo} alt="Logo" className="w-24 h-24 mx-auto" />
                <p className="text-yellow-400 text-xl font-bold">Safaro</p>
            </div>

            {/* Texts */}
            <div className="text-center mt-6 space-y-3">
                <h1 className='text-xl'>Travel Book Is Here</h1>
                <h1 className='text-4xl text-yellow-400 font-bold'>Explore</h1>
                <h1 className='text-3xl font-bold'>The Unseen</h1>
            </div>

            {/* Button fixed to bottom */}
            <div className="absolute bottom-6 w-full px-6">
                <Link to="/mStart" className="btn btn-warning w-full">
                Press To Start
                </Link>
            </div>
        </div>
    );
};

export default MFirst;
