import React from 'react';
import logo from "../../../assets/mountain.png";
import appStore from "../../../assets/apple.png";
import playStore from "../../../assets/playstore.png";
import fb from "../../../assets/facebook.png";
import linkedin from "../../../assets/linkedin.png";
import github from "../../../assets/github.png";
import whatsapp from "../../../assets/whatsapp.png";

const Footer = () => {
  return (
    <div className="pt-14 pb-0 bg-gray-100">
      <footer className="w-full px-5 md:px-10 py-10 flex flex-col md:flex-row flex-wrap justify-center md:justify-between gap-8">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img src={logo} alt="Logo" className="h-16 w-auto mb-2" />
          <p className="text-yellow-400 text-2xl font-bold">Safaro</p>
        </div>

        {/* Options */}
        <nav className="flex flex-col items-center md:items-start">
          <h6 className="footer-title text-gray-700 mb-2 font-semibold">Options</h6>
          <a href="/" className="link link-hover text-gray-700 mb-1">Home</a>
          <a href="/" className="link link-hover text-gray-700 mb-1">Find Hotels</a>
          <a href="/" className="link link-hover text-gray-700 mb-1">Find Guides</a>
          <a href="/" className="link link-hover text-gray-700">My Booked Place</a>
        </nav>

        {/* About */}
        <nav className="flex flex-col items-center md:items-start">
          <h6 className="footer-title text-gray-700 mb-2 font-semibold">About</h6>
          <a href="/" className="link link-hover text-gray-700 mb-1">Website</a>
          <a href="https://md-sakib-hossain-rifat.web.app/" target="_blank" rel="noopener noreferrer" className="link link-hover text-gray-700">CEO</a>
        </nav>

        {/* Connect Us */}
        <nav className="flex flex-col items-center md:items-start">
          <h6 className="footer-title text-gray-700 mb-4 font-semibold">Connect Us</h6>
          <div className="space-y-4">
            <div className="flex items-center gap-3 bg-black text-white p-3 rounded-full w-52">
              <img src={appStore} alt="App Store" className="h-8" />
              <div className="text-xs">
                <p>Download on the</p>
                <p>App Store</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-black text-white p-3 rounded-full w-52">
              <img src={playStore} alt="Google Play" className="h-8" />
              <div className="text-xs">
                <p>Download on the</p>
                <p>Play Store</p>
              </div>
            </div>
          </div>
        </nav>

        {/* Follow Us */}
        <nav className="flex flex-col items-center md:items-start">
          <h6 className="footer-title text-gray-700 mb-4 font-semibold">Follow Us on</h6>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="https://www.linkedin.com/in/md-sakib-hossain-rifat-14s" target="_blank" rel="noopener noreferrer">
              <img className="w-8 h-8 transition-transform hover:scale-110" src={linkedin} alt="LinkedIn" />
            </a>
            <a href="https://github.com/RifatSakib" target="_blank" rel="noopener noreferrer">
              <img className="w-8 h-8 transition-transform hover:scale-110" src={github} alt="GitHub" />
            </a>
            <a href="https://www.facebook.com/riphata.sakiba" target="_blank" rel="noopener noreferrer">
              <img className="w-8 h-8 transition-transform hover:scale-110" src={fb} alt="Facebook" />
            </a>
            <a href="https://wa.me/8801791634313" target="_blank" rel="noopener noreferrer">
              <img className="w-8 h-8 transition-transform hover:scale-110" src={whatsapp} alt="WhatsApp" />
            </a>
          </div>
        </nav>
      </footer>

      {/* Bottom Footer */}
      <p className="text-md font-medium text-center p-5 text-gray-600">
        © {new Date().getFullYear()} All Rights Reserved | Developed by Rifat Sakib
      </p>
    </div>
  );
};

export default Footer;
