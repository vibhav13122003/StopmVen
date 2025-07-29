import React from "react";

const Footer = () => {
  return (
    <footer className='bg-gray-900 border-t border-gray-800 text-gray-400'>
      <div className='container mx-auto px-6 py-8 text-center'>
        <p>
          &copy; {new Date().getFullYear()} STOMPVEN Safety Systems. All Rights
          Reserved.
        </p>
        <p className='text-sm mt-2'>
          Saving lives through proactive technology.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
