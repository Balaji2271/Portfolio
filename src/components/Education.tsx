import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";
import { educationData } from "../data/portfolioData";

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-12 relative inline-block"
          >
            Education
            <span className="absolute bottom-0 left-0 h-1 w-full bg-indigo-600 dark:bg-indigo-500 transform -translate-y-2 mb-[-11px]"></span>
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-indigo-200 dark:bg-indigo-900"></div>

            {/* Education items */}
            <div className="space-y-12">
              {educationData.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"
                    }`}
                  >
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {item.degree}
                      </h3>
                      <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">
                        {item.institution}
                      </p>
                      <div className="flex items-center mb-4 text-sm text-gray-600 dark:text-gray-400">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{item.period}</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-12 h-12 bg-indigo-600 dark:bg-indigo-500 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center text-white">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
