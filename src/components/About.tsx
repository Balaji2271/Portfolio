import React from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Briefcase } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

const About = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={variants}
          className="max-w-5xl mx-auto"
        >
          <motion.h2
            variants={childVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-12 relative inline-block"
          >
            About Me
            <span className="absolute bottom-0 left-0 h-1 w-full bg-indigo-600 dark:bg-indigo-500 transform -translate-y-2 mb-[-11px]"></span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              variants={childVariants}
              className="md:col-span-1 flex justify-center"
            >
              <div className="relative w-64 h-64 overflow-hidden rounded-xl shadow-lg">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{personalInfo.name}</h3>
                    <p className="text-sm">
                      {personalInfo.title.split("|")[0].trim()}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={childVariants} className="md:col-span-2">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {personalInfo.about}
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {personalInfo.location}
                  </span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-3" />
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                {personalInfo.openToFreelance && (
                  <div className="flex items-center">
                    <Briefcase className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Available for freelance work
                    </span>
                  </div>
                )}
              </div>

              <div className="flex gap-4">
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors"
                  aria-label="GitHub"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                {/* <a 
                  href={personalInfo.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors"
                  aria-label="Twitter"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a> */}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
