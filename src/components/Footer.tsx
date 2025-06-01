import React from 'react';
import { Link } from 'react-scroll';
import { Code, ChevronUp, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { theme, toggleTheme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          {/* Back to top button */}
          {/* <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full p-3 mb-8 transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer"
          >
            <ChevronUp className="h-6 w-6" />
          </Link> */}
          
          {/* Logo and navigation */}
          {/* <div className="flex flex-col md:flex-row items-center justify-between w-full mb-8"> */}
            {/* <div className="flex items-center mb-6 md:mb-0">
              <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xl mr-2">
                <Code className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold">Balaji V</span>
            </div> */}
            
            {/* <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="hover:text-indigo-400 transition-colors cursor-pointer"
              >
                Home
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="hover:text-indigo-400 transition-colors cursor-pointer"
              >
                About
              </Link>
              <Link
                to="experience"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="hover:text-indigo-400 transition-colors cursor-pointer"
              >
                Experience
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="hover:text-indigo-400 transition-colors cursor-pointer"
              >
                Projects
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="hover:text-indigo-400 transition-colors cursor-pointer"
              >
                Contact
              </Link>
            </div> */}
          {/* </div> */}
          
          {/* Divider */}
          {/* <div className="w-full h-px bg-gray-800 dark:bg-gray-700 mb-6"></div> */}
          
          {/* Copyright and theme toggle */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Balaji V. All rights reserved.
            </p>
            
            {/* <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">Toggle theme</span>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-800 transition-colors"
                aria-label="Toggle dark mode"
              >
                {theme === 'light' ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;