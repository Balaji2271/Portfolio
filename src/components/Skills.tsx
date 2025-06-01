import React from "react";
import { motion } from "framer-motion";
import { skillsData } from "../data/portfolioData";

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (width) => ({
      width: `${width}%`,
      transition: { duration: 1, ease: "easeInOut" },
    }),
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
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
            Skills & Expertise
            <span className="absolute bottom-0 left-0 h-1 w-full bg-indigo-600 dark:bg-indigo-500 transform -translate-y-2 mb-[-11px]"></span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillsData.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl font-bold mb-6 text-indigo-600 dark:text-indigo-400 flex items-center">
                  {category.category}
                  <span className="ml-2 h-1 w-10 bg-indigo-600 dark:bg-indigo-400 rounded-full"></span>
                </h3>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden relative">
                        <motion.div
                          custom={skill.level}
                          variants={progressVariants}
                          className="h-full bg-gradient-to-r from-indigo-600 to-indigo-400 dark:from-indigo-500 dark:to-indigo-300 rounded-full absolute top-0 left-0"
                          style={{
                            boxShadow: "0 0 10px rgba(99, 102, 241, 0.5)",
                          }}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "React",
                "Node.js",
                "Express.js",
                "MongoDB",
                "LLM",
                "RAG",
                "AWS",
                "Git",
                "REST APIs",
                "JavaScript",
                "HTML/CSS",
                "Tailwind CSS",
              ].map((tech) => (
                <motion.span
                  key={tech}
                  className="px-6 py-3 bg-white dark:bg-gray-800 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium shadow-md hover:shadow-xl transition-all duration-300"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#EEF2FF",
                    color: "#4F46E5",
                  }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
