import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Sun, Moon, Code } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Handle scroll event to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { title: 'Home', to: 'hero', offset: -100 },
    { title: 'About', to: 'about', offset: -70 },
    { title: 'Experience', to: 'experience', offset: -70 },
    { title: 'Projects', to: 'projects', offset: -70 },
    { title: 'Skills', to: 'skills', offset: -70 },
    { title: 'Contact', to: 'contact', offset: -70 },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white dark:bg-gray-900 shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xl">
              <Code className="h-6 w-6" />
            </div>
            <span className="ml-2 text-xl font-bold">BV</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.to}
                spy={true}
                smooth={true}
                offset={link.offset}
                duration={500}
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium cursor-pointer transition-colors"
              >
                {link.title}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-800 shadow-lg py-4 px-4 absolute w-full">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.to}
                spy={true}
                smooth={true}
                offset={link.offset}
                duration={500}
                onClick={closeMenu}
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium cursor-pointer transition-colors py-2"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;