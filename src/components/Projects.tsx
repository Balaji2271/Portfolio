import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Tilt } from "react-tilt";
import { projectsData } from "../data/portfolioData";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

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

  const defaultTiltOptions = {
    reverse: false,
    max: 15,
    perspective: 1000,
    scale: 1,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-12 relative inline-block"
          >
            My Projects
            <span className="absolute bottom-0 left-0 h-1 w-full bg-indigo-600 dark:bg-indigo-500 transform -translate-y-2 mb-[-11px]"></span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <Tilt key={project.id} options={defaultTiltOptions}>
                <motion.div
                  variants={itemVariants}
                  className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col group transform hover:-translate-y-2"
                  onMouseEnter={() => setActiveProject(project.id)}
                  onMouseLeave={() => setActiveProject(null)}
                >
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                      <div className="p-4 w-full flex justify-between items-center">
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors text-white transform hover:scale-110"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                        <a
                          href={project.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors text-white transform hover:scale-110"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col bg-gradient-to-b from-gray-50 to-white dark:from-gray-700 dark:to-gray-800">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 flex-1 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium transform hover:scale-105 transition-transform cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
