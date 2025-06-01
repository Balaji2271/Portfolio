import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle } from "lucide-react";
import { experienceData } from "../data/portfolioData";

const Experience = () => {
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
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
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
            Work Experience
            <span className="absolute bottom-0 left-0 h-1 w-full bg-indigo-600 dark:bg-indigo-500 transform -translate-y-2 mb-[-11px]"></span>
          </motion.h2>

          <div className="space-y-12">
            {experienceData.map((job) => (
              <motion.div
                key={job.id}
                variants={itemVariants}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 md:p-8 shadow-md relative overflow-hidden"
              >
                {/* Decorative element */}
                <div className="absolute top-0 left-0 h-full w-2 bg-indigo-600 dark:bg-indigo-500"></div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {/* Job metadata */}
                  <div className="md:col-span-1">
                    <div className="flex items-center mb-3">
                      <Briefcase className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2" />
                      <h3 className="text-lg font-bold">{job.position}</h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">
                      {job.company}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                      {job.location}
                    </p>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{job.period}</span>
                    </div>
                  </div>

                  {/* Job description and achievements */}
                  <div className="md:col-span-3">
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      {job.description}
                    </p>

                    <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
