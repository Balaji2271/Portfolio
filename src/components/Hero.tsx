import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center relative pt-16 pb-20 px-4 md:px-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-indigo-950 -z-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjI4MzEiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
      </div>
      
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="max-w-2xl">
            <motion.p 
              variants={itemVariants}
              className="text-indigo-600 dark:text-indigo-400 font-medium mb-4 tracking-wide"
            >
              Hello, Welcome to my Portfolio
            </motion.p>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Hi, I'm{' '}
              <span className="text-indigo-600 dark:text-indigo-400">
                {personalInfo.name.split(' ')[0]}
              </span>{' '}
              — Building Modern Web Solutions with MERN and AI.
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed"
            >
              {personalInfo.title}
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.a 
                href={personalInfo.resumeUrl}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="h-5 w-5" />
                Download Resume
              </motion.a>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="flex items-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-indigo-600 dark:text-indigo-400 font-medium rounded-lg border-2 border-indigo-600 dark:border-indigo-500 transition-colors duration-300 cursor-pointer shadow-lg hover:shadow-xl"
                >
                  <Mail className="h-5 w-5" />
                  Contact Me
                </Link>
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div
            variants={itemVariants}
            className="hidden lg:block"
          >
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.02, 1],
                  rotate: [0, 1, -1, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute inset-0 bg-indigo-600 rounded-full opacity-10 blur-3xl transform -translate-x-10 translate-y-10"
              ></motion.div>
              {/* <motion.div
                className="h-96 w-96 mx-auto bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-1 bg-white dark:bg-gray-900 rounded-full"></div>
                <div className="absolute inset-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-white text-8xl font-bold">
                    BV
                  </div>
                </div>
              </motion.div> */}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;