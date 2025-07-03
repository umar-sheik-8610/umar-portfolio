import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Download,
  Mail,
  Github,
  Linkedin,
  Code,
  Database,
  Brain,
  Zap,
  Cpu,
  Layers,
  Clock,
  Globe,
  BarChart2,
  Sparkles,
  Smartphone,
  MessageCircle,
} from "lucide-react";

const Home = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    "Full Stack Developer",
    "React Enthusiast",
    "Java Coder",
    "Blockchain Explorer",
  ];

  // Floating icons animation
  const floatingIcons = [
    {
      icon: <Code className="h-6 w-6" />,
      color: "text-purple-500",
      pos: "top-1/4 left-1/4",
    },
    {
      icon: <Database className="h-8 w-8" />,
      color: "text-emerald-500",
      pos: "top-1/3 right-1/4",
    },
    {
      icon: <Brain className="h-7 w-7" />,
      color: "text-slate-500",
      pos: "bottom-1/4 left-1/3",
    },
    {
      icon: <Cpu className="h-5 w-5" />,
      color: "text-amber-500",
      pos: "top-1/5 right-1/5",
    },
  ];

  // Tech stack items
  const techStack = [
    {
      name: "React",
      icon: <Layers className="h-5 w-5" />,
      color: "bg-purple-100 text-purple-600",
    },
    {
      name: "Node.js",
      icon: <Zap className="h-5 w-5" />,
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      name: "Java",
      icon: <Cpu className="h-5 w-5" />,
      color: "bg-amber-100 text-amber-600",
    },
    {
      name: "Git",
      icon: <Sparkles className="h-5 w-5" />,
      color: "bg-slate-100 text-slate-600",
    },
    {
      name: "MongoDB",
      icon: <Database className="h-5 w-5" />,
      color: "bg-green-100 text-green-600",
    },
  ];

  // Stats
  const stats = [
    { value: "4+", label: "Projects", icon: <Globe className="h-6 w-6" /> },
    { value: "10+", label: "Technologies", icon: <Code className="h-6 w-6" /> },
    {
      value: "2+",
      label: "Years Experience",
      icon: <Clock className="h-6 w-6" />,
    },
    {
      value: "100%",
      label: "Passion",
      icon: <BarChart2 className="h-6 w-6" />,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-emerald-50/20 to-slate-50/10"></div>

        {/* Floating tech icons */}
        {floatingIcons.map((icon, index) => (
          <motion.div
            key={index}
            animate={{
              y: [0, -15 + index * 5, 0],
              rotate: [0, 5 - index * 2, 0],
            }}
            transition={{
              duration: 8 + index,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`absolute ${icon.pos} opacity-20 ${icon.color}`}
          >
            {icon.icon}
          </motion.div>
        ))}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            {/* Animated greeting */}
            <motion.div variants={itemVariants} className="mb-2">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-lg md:text-xl text-purple-600 font-medium"
              ></motion.p>
            </motion.div>

            {/* Name with gradient text */}
            <motion.div variants={itemVariants} className="mb-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                I'm{" "}
                <span className="bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent">
                  Umar Sheik
                </span>
              </h1>

              {/* Rotating roles */}
              <div className="h-16 flex items-center justify-center">
                <motion.p
                  key={currentText}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-xl md:text-2xl lg:text-3xl text-gray-600 font-medium"
                >
                  {texts[currentText]}
                </motion.p>
              </div>
            </motion.div>

            {/* Short bio */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              Crafting digital experiences with clean code and modern design.
              Passionate about building scalable web applications and exploring
              cutting-edge technologies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <Link
                to="/resume"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-emerald-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Download className="mr-2 h-5 w-5" />
                View Resume
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center px-8 py-4 border-2 border-purple-600 text-purple-600 font-semibold rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Link>
            </motion.div>

            {/* Tech stack pills */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-3 mb-12 max-w-2xl mx-auto"
            >
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -3 }}
                  className={`flex items-center px-4 py-2 ${tech.color} rounded-full shadow-sm`}
                >
                  {tech.icon}
                  <span className="ml-2 font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center space-x-6"
            >
              <motion.a
                whileHover={{ y: -5 }}
                href="mailto:umarsheikoff@outlook.com"
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-purple-50"
              >
                <Mail className="h-6 w-6 text-purple-600" />
              </motion.a>
              <motion.a
                whileHover={{ y: -5 }}
                href="https://linkedin.com/in/umar-sheik"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-purple-50"
              >
                <Linkedin className="h-6 w-6 text-purple-600" />
              </motion.a>
              <motion.a
                whileHover={{ y: -5 }}
                href="https://github.com/umar-sheik"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-purple-50"
              >
                <Github className="h-6 w-6 text-purple-600" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-purple-100 to-emerald-100 rounded-full">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Project Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured <span className="text-purple-600">Work</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Check out some of my recent projects that showcase my skills
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-emerald-600 mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-purple-50 to-emerald-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-purple-100 rounded-lg mr-4">
                    <Smartphone className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Career Development App
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  ML-powered mobile app that helps students choose career paths
                  based on their skills and interests.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Python", "ML", "XGBoost", "Flutter"].map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white text-sm rounded-full shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  to="/projects"
                  className="inline-flex items-center text-purple-600 font-medium group"
                >
                  View Project
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-emerald-100 rounded-lg mr-4">
                    <MessageCircle className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Real-Time Chat App
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Full-stack MERN application with WebSocket communication and
                  JWT authentication.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["React", "Node.js", "Socket.io", "MongoDB"].map(
                    (tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white text-sm rounded-full shadow-sm"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
                <Link
                  to="/projects"
                  className="inline-flex items-center text-emerald-600 font-medium group"
                >
                  View Project
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            <div className="text-center mt-12">
              <Link
                to="/projects"
                className="inline-flex items-center px-6 py-3 border-2 border-purple-600 text-purple-600 font-semibold rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
