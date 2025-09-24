import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Calendar,
  Zap,
  Smartphone,
  Globe,
  Coins,
  MessageCircle,
} from "lucide-react";
import mailIcon from "../assets/mail-icon.png";

const Projects = () => {
  const projects = [
    {
      title: "Career Development E-Mentorship App",
      description:
        "A comprehensive mobile application that assists students in making informed career choices based on their interests, available time, and skill level using ML-based recommendations.",
      image:
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: [
        "xgboost",
        "Python",
        "Machine Learning",
        "TensorFlow",
        "Real-time Database",
      ],
      features: [
        "Exploratory Mode with ML-based career path suggestions",
        "Direct Mode for goal-oriented learning plans",
        "Personalized timetable generator",
        "Code evaluation and progress tracking",
        "Over 90% accuracy in career predictions",
      ],
      status: "Completed",
      period: "Jan 2025 – Feb 2025",
      icon: <Smartphone className="h-6 w-6" />,
      color: "from-purple-500 to-pink-500",
      codeLink:
        "https://github.com/umar-sheik-8610/-ML-Based-Career-Prediction-System-for-IT-Students",
      demoLink:
        "https://github.com/umar-sheik-8610/-ML-Based-Career-Prediction-System-for-IT-Students",
    },
    {
      title: "Real-Time Chat Application",
      description:
        "A full-stack MERN-based real-time chat application with JWT authentication and WebSocket communication using Socket.io, integrated with Zustand for state management.",
      image:
        "https://files.ably.io/ghost/prod/2023/02/the-ultimate-live-chat-features-list.png",
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Socket.io",
        "Zustand",
      ],
      features: [
        "Real-time messaging using Socket.io",
        "JWT-based secure authentication and protected routes",
        "Zustand for efficient global state management",
        "User-to-user private chat and message history",
        "Responsive UI with dynamic message updates",
      ],
      status: "Completed",
      period: "2024",
      icon: <MessageCircle className="h-6 w-6" />,
      color: "from-purple-600 to-indigo-600",
      codeLink: "https://github.com/umar-sheik-8610/Realtime-Chat-Application",
      demoLink: "https://realtime-chat-application-5fce.onrender.com/login",
    },
    {
      title: "Workout Scheduler App",
      description:
        "A full-stack MERN application with comprehensive CRUD functionality and JWT-based authentication for managing workout routines.",
      image:
        "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
      features: [
        "User authentication and authorization",
        "Create, read, update, delete workout routines",
        "Track workout progress and history",
        "Responsive design for all devices",
        "Secure API endpoints",
      ],
      status: "Completed",
      period: "2024",
      icon: <Zap className="h-6 w-6" />,
      color: "from-emerald-500 to-teal-500",
      codeLink:
        "https://github.com/umar-sheik-8610/Workout-Schedule-App-With-JWT-Authentication",
      demoLink:
        "https://github.com/umar-sheik-8610/Workout-Schedule-App-With-JWT-Authentication",
    },
    {
      title: "Nike Landing Page",
      description:
        "A modern, responsive landing page built with React and Tailwind CSS featuring reusable components and contemporary design patterns.",
      image:
        "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React.js", "Tailwind CSS", "Responsive Design"],
      features: [
        "Modern UI with smooth animations",
        "Fully responsive across all devices",
        "Reusable component architecture",
        "Optimized performance",
        "Clean and maintainable code",
      ],
      status: "Completed",
      period: "2024",
      icon: <Globe className="h-6 w-6" />,
      color: "from-slate-500 to-gray-500",
      codeLink:
        "https://github.com/umar-sheik-8610/nike-landing-page-using-react-and-tailwind",
      demoLink:
        "https://umar-sheik-8610.github.io/nike-landing-page-using-react-and-tailwind/",
    },
    {
      title: "Blockchain Twitter dApp",
      description:
        "A decentralized social media application built on Ethereum blockchain with smart contracts for posting, liking, and viewing tweets.",
      image:
        "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Solidity", "Web3.js", "Ethereum", "MetaMask", "Smart Contracts"],
      features: [
        "Post tweets on blockchain",
        "Like and interact with posts",
        "MetaMask wallet integration",
        "Decentralized data storage",
        "Smart contract functionality",
      ],
      status: "Completed",
      period: "2024",
      icon: <Coins className="h-6 w-6" />,
      color: "from-amber-500 to-orange-500",
      codeLink: "https://github.com/umar-sheik-8610/x-dapp",
      demoLink:
        "https://codesandbox.io/p/sandbox/twitter-dapp-exercise-forked-mvl2rg",
    },
    {
      title: "Smart Email Assistant",
      description:
        "A full-stack email assistant application built with React, Spring Boot, and Gemini API, designed to generate AI-powered email replies with seamless Gmail integration.",
      image: mailIcon,
      tech: [
        "React.js",
        "Spring Boot",
        "REST API",
        "Material UI",
        "Gemini API",
      ],
      features: [
        "AI-powered email reply generation using Gemini API",
        "Seamless integration with Gmail via Chrome extension",
        "Responsive Material UI interface for smooth user experience",
        "Efficient REST APIs for email processing",
        "Full-stack architecture with maintainable codebase",
      ],
      status: "Completed",
      period: "Mar 2025",
      icon: <Globe className="h-6 w-6" />,
      color: "from-indigo-500 to-blue-500",
      codeLink:
        "https://github.com/umar-sheik-8610/-Smart-Email-Assistant-Project-Using-Spring-Boot-Spring-AI",
      demoLink:
        "https://github.com/umar-sheik-8610/-Smart-Email-Assistant-Project-Using-Spring-Boot-Spring-AI",
    },
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              My <span className="text-purple-600">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of my technical projects spanning full-stack
              development, mobile applications, and blockchain technology.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-emerald-600 mx-auto mt-6"></div>
          </motion.div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 backdrop-blur-sm bg-opacity-70"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div
                    className={`relative overflow-hidden ${
                      index % 2 === 1 ? "lg:col-start-2" : ""
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-20`}
                    ></div>
                    <div className="absolute top-4 left-4">
                      <div className={`p-3 bg-white rounded-full shadow-lg`}>
                        <div
                          className={`text-transparent bg-gradient-to-r ${project.color} bg-clip-text`}
                        >
                          {project.icon}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-4 mb-4">
                      <span
                        className={`px-3 py-1 text-sm font-semibold rounded-full ${
                          project.status === "Completed"
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-purple-100 text-purple-800"
                        }`}
                      >
                        {project.status}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {project.period}
                      </div>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {project.features.slice(0, 3).map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-emerald-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-emerald-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                      >
                        <Github className="h-5 w-5 mr-2" />
                        View Code
                      </a>
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-6 py-3 border-2 border-purple-600 text-purple-600 font-semibold rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300"
                      >
                        <ExternalLink className="h-5 w-5 mr-2" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
