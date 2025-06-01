import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, Linkedin, Github, Twitter } from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(
    null
  );

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "service_w408cgn", // 🔁 Replace with your EmailJS Service ID
        "template_3a06f2v", // 🔁 Replace with your Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "0XyxSGDTLjkCul6Z5" // 🔁 Replace with your Public Key
      )
      .then(() => {
        setIsSubmitting(false);
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitStatus(null), 3000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setIsSubmitting(false);
        setSubmitStatus("error");
      });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
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
            className="text-3xl md:text-4xl font-bold text-center mb-4 relative inline-block"
          >
            Get In Touch
            <span className="absolute bottom-0 left-0 h-1 w-full bg-indigo-600 dark:bg-indigo-500 transform -translate-y-2 mb-[-11px]"></span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-center text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out!
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                Contact Information
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      Email
                    </h4>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      Phone
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      +91 63823 51213
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Follow Me
              </h3>
              <div className="flex space-x-4">
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg hover:translate-y-[-2px] transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-[#0A66C2] dark:text-[#0A66C2]" />
                </a>
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg hover:translate-y-[-2px] transition-all"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5 text-gray-900 dark:text-white" />
                </a>
                {/* <a 
                  href={personalInfo.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg hover:translate-y-[-2px] transition-all"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5 text-[#1DA1F2] dark:text-[#1DA1F2]" />
                </a> */}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                Send Me a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Hello, I'd like to discuss a project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </span>
                  )}
                </button>

                {submitStatus === "success" && (
                  <div className="p-3 bg-green-100 text-green-800 rounded-lg">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-3 bg-red-100 text-red-800 rounded-lg">
                    Sorry, there was an error sending your message. Please try
                    again.
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
