export const personalInfo = {
  name: "Balaji V",
  title: "MERN Stack Developer | LLM Integrations | RAG Systems Expert",
  location: "Chennai, India",
  email: "balajiv2271@gmail.com",
  about: "I'm a MERN Stack Developer with around 3 years of experience building scalable, high-performance web applications. I specialize in developing modern solutions using React, Node.js, Express, and MongoDB. Lately, I've been deeply focused on integrating Large Language Models (LLMs) and building Retrieval-Augmented Generation (RAG) systems to power AI-driven applications. I enjoy solving real-world problems through clean, efficient code and continuous learning.",
  openToFreelance: true,
  resumeUrl: "/Balaji_resume.pdf",
  profileImage: "/Balaji_image.jpg",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/balaji-dev/",
    github: "https://github.com/Balaji2271",
    twitter: "https://twitter.com/username",
  }
};

export const educationData = [
  {
    id: 1,
    degree: "Bachelor of Business Administration (BBA)",
    institution: "Sathyabama Institute of Science and Technology",
    location: "Chennai, India",
    period: "2019 - 2021",
    description: "Completed undergraduate studies in Business Administration with a strong interest in technology and digital innovation. Developed foundational skills in project management, communication, and analytical thinking."
  },
  {
    id: 2,
    degree: "Full Stack Web Development",
    institution: "Fita Academy",
    location: "Chennai, India",
    period: "2021 - 2022",
    description: "Completed hands-on training in full stack development, covering React, Node.js, Express, MongoDB, and modern JavaScript. Built real-world projects and strengthened skills in frontend and backend integration."
  }
];

export const experienceData = [
  {
    id: 1,
    position: "Senior Product Engineer",
    company: "ESG Data & Solutions",
    location: "Chennai, India",
    period: "April 2023 – Present",
    description: "Leading AI-powered feature development for ESG platforms using MERN stack, LLMs, and AWS services. Building scalable APIs, integrating intelligent data processing workflows, and driving quality control initiatives.",
    achievements: [
      "Built a robust RAG pipeline using MongoDB, reducing document analysis time by 60%",
      "Integrated LLMs via AWS Bedrock for ESG data summarization, reducing manual work by 50%",
      "Mentored junior developers through code reviews and technical guidance",
      "Conducted Level Two QC to improve data quality and support analyst feedback loops",
      "Developed scalable REST APIs and integrated third-party services for enhanced platform capabilities"
    ]
  },
  {
    id: 2,
    position: "Software Developer",
    company: "Sprite Software",
    location: "Chennai, India",
    period: "July 2022 – December 2022",
    description: "Contributed to frontend development using React.js, working closely with designers and backend engineers to deliver seamless UI experiences.",
    achievements: [
      "Delivered responsive, high-performance interfaces for enterprise web applications",
      "Collaborated on full product lifecycles including UI/UX improvements and API integrations",
      "Ensured performance through rigorous testing and optimization"
    ]
  }
];


export const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "HTML5/CSS3", level: 90 },
      { name: "Redux", level: 80 },
      { name: "Tailwind CSS", level: 85 }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "TypeScript", level: 65 }
    ]
  },
  {
    category: "AI & ML",
    skills: [
      { name: "LLM Integrations", level: 80 },
      { name: "RAG Systems", level: 85 },
      { name: "Langchain", level: 75 },
      { name: "Prompt Engineering", level: 85 }
    ]
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Git", level: 90 },
      { name: "AWS", level: 75 },
      { name: "Postman", level: 70 },
      { name: "Jenkins", level: 65 }
    ]
  }
];

export const projectsData = [
  {
    id: 1,
    title: "Netflix Clone",
    description: "Developed a Netflix-inspired web application with React, featuring dynamic movie listings and authentication.Implemented responsive UI with categorized content and rich metadata for an engaging user experience",
    technologies: ["React", "firebase", "Tailwind css"],
    image: "/Netflix_clone.png",
    demoLink: "https://darling-souffle-41359a.netlify.app/",
    codeLink: "https://github.com/Balaji2271/Netflix-"
  },
  {
    id: 2,
    title: "RAG-based Q&A Chatbot",
    description: "Built an intelligent chatbot that scrapes content from URLs and stores data as vector embeddings in Astra DB",
    technologies: ["LLM", "RAG", "Vector Database", "Next.js", "Astra DB", "OpenAI", "TypeScript", "Langchain"],
    image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoLink: "#",
    codeLink: "https://github.com/Balaji2271/RAG-Chatbot"
  },
  {
    id: 3,
    title: "Interactive Admin Dashboard",
    description: "Built a fully responsive and interactive Admin Dashboard using React.js and Tailwind CSS, designed to provide real-time insights into business operations. The dashboard includes dynamic widgets for earnings, sales, customer analytics, and product performance, alongside productivity tools like Calendar, Kanban board, and Rich Text Editor.",
    technologies: ["React", "TailwindCSS", "Syncfusion"],
    image: "/Dashboard.png",
    demoLink: "https://dashboard-five-umber.vercel.app/",
    codeLink: "https://github.com/Balaji2271/DASHBOARD"
  }
];