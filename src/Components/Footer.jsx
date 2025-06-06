import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 ">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-around">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Shubham Sharma. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="https://github.com/Shubhamsharma2002" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/shubhamsharma2026/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            LinkedIn
          </a>
          <a href="mailto:shubhamjii2002@gmail.com" className="text-gray-400 hover:text-white transition">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
