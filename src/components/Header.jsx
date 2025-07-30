import React from "react";
import { LogoIcon } from "/TreqLogo";

const Header = () => {
  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-30 backdrop-blur-lg'>
      <div className='container mx-auto px-6 py-4 flex justify-between items-center'>
        <div className='flex items-center text-white'>
          <LogoIcon className='h-8 w-8 ' />
          <span className='ml-3 text-2xl font-bold tracking-tight'>
            TREQO
          </span>
        </div>
        <nav className='hidden md:flex items-center space-x-8'>
          <a
            href='#solution'
            className='text-gray-300 hover:text-white transition-colors'
          >
            Solution
          </a>
          <a
            href='#dashboard'
            className='text-gray-300 hover:text-white transition-colors'
          >
            Dashboard
          </a>
          <a
            href='#simulation'
            className='text-gray-300 hover:text-white transition-colors'
          >
            Simulation
          </a>
          <a
            href='#product-review'
            className='text-gray-300 hover:text-white transition-colors'
          >
            Prototype
          </a>
        </nav>
        <a
          href='#demo'
          className='hidden md:inline-block bg-cyan-400 text-black font-bold py-2 px-5 rounded-lg hover:bg-cyan-300 transition-all transform hover:scale-105'
        >
          Request a Demo
        </a>
      </div>
    </header>
  );
};

export default Header;
