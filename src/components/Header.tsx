import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-brand-primary">
          <Link to="/">
            <img src="/novaspices logo.png" alt="YourLogo" className="h-20 w-auto margin-left=10" />
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="black" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className={`
          ${isMenuOpen ? 'block' : 'hidden'} 
          md:block absolute md:relative top-full left-0 w-full md:w-auto bg-white
        `}>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 p-4 md:p-0">
            <li><Link to="/" className="text-black font-bold hover:text-brand-secondary">Home</Link></li>
            <li><Link to="/about" className="text-black font-bold hover:text-brand-secondary">About Us</Link></li>
            <li><Link to="/products" className="text-black font-bold hover:text-brand-secondary">Products</Link></li>
            <li><Link to="/contact" className="text-black font-bold hover:text-brand-secondary">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
