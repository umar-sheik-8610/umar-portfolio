import { motion } from "framer-motion";
import {
  Code,
  Database,
  Brain,
  Server,
  Smartphone,
  Globe,
  Award,
  Trophy,
} from "lucide-react";

const About = () => {
  const skills = {
    languages: [
      { name: "Java", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Python", level: 80 },
      { name: "SQL", level: 85 },
      { name: "Solidity", level: 70 },
    ],
    frontend: [
      { name: "React.js", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Zustand", level: 80 },
      { name: "DOM Router", level: 85 },
    ],
    backend: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "J2EE", level: 75 },
      { name: "JSP", level: 70 },
    ],
    tools: [
      { name: "Git", level: 85 },
      { name: "Postman", level: 80 },
      { name: "REST APIs", level: 85 },
      { name: "JWT Auth", level: 80 },
    ],
    concepts: [
      { name: "Blockchain Basics", level: 75 },
      { name: "ML Classification", level: 70 },
      { name: "Smart Contracts", level: 80 },
      { name: "NFT", level: 75 },
    ],
  };

  const achievements = [
    {
      title: "Winner in Paper Presentation",
      description:
        "MVIT National Level Symposium for showcasing an innovative, real-world tech solution with practical applications",
      icon: <Trophy className="h-8 w-8" />,
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
      textColor: "text-amber-600",
    },
    {
      title: "Runner-up in Code Debugging",
      description:
        "Mechatronz Fest 2K24 for demonstrating strong problem-solving and debugging skills",
      icon: <Award className="h-8 w-8" />,
      color: "from-slate-500 to-slate-600",
      bgColor: "bg-slate-50",
      textColor: "text-slate-600",
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
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-purple-600">Me</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-emerald-600 mx-auto"></div>
          </motion.div>

          {/* About Content */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 backdrop-blur-sm bg-opacity-70">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Passionate Developer & Tech Enthusiast
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    I'm Umar Sheik S, a passionate Full Stack Developer with
                    hands-on experience in Java and the MERN stack. I enjoy
                    building scalable web applications and exploring emerging
                    technologies like blockchain and career automation.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    I have completed my B.Tech in Computer and Communication
                    Engineering from Sri Manakula Vinayagar Engineering College,
                    Puducherry. I'm always eager to take on challenging
                    development projects and learn new technologies that can
                    make a real impact.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    My goal is to create innovative solutions that solve
                    real-world problems while continuously expanding my
                    technical expertise and contributing to the developer
                    community.
                  </p>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-purple-600 to-emerald-600 rounded-2xl p-8 text-white shadow-lg">
                    <h3 className="text-2xl font-bold mb-4">Quick Facts</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                        B.Tech in Computer & Communication Engineering
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                        Full Stack Development Enthusiast
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                        AI/ML & Blockchain Explorer
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                        Problem Solver & Innovation Seeker
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div variants={itemVariants} className="mb-20">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Technical <span className="text-purple-600">Skills</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Languages */}
              <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 backdrop-blur-sm bg-opacity-70">
                <div className="flex items-center mb-6">
                  <Code className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Languages</h3>
                </div>
                <div className="space-y-4">
                  {skills.languages.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-purple-600 font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-purple-600 to-emerald-600 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Frontend */}
              <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 backdrop-blur-sm bg-opacity-70">
                <div className="flex items-center mb-6">
                  <Globe className="h-8 w-8 text-emerald-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Frontend</h3>
                </div>
                <div className="space-y-4">
                  {skills.frontend.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-emerald-600 font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 backdrop-blur-sm bg-opacity-70">
                <div className="flex items-center mb-6">
                  <Server className="h-8 w-8 text-slate-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Backend</h3>
                </div>
                <div className="space-y-4">
                  {skills.backend.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-slate-600 font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-slate-500 to-gray-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 backdrop-blur-sm bg-opacity-70">
                <div className="flex items-center mb-6">
                  <Database className="h-8 w-8 text-amber-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">
                    Tools & DevOps
                  </h3>
                </div>
                <div className="space-y-4">
                  {skills.tools.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-amber-600 font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-amber-500 to-orange-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Concepts */}
              <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 backdrop-blur-sm bg-opacity-70 md:col-span-2 lg:col-span-1">
                <div className="flex items-center mb-6">
                  <Brain className="h-8 w-8 text-violet-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Concepts</h3>
                </div>
                <div className="space-y-4">
                  {skills.concepts.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-violet-600 font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Achievements Section */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              <span className="text-purple-600">Achievements</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 backdrop-blur-sm bg-opacity-70"
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`p-4 ${achievement.bgColor} rounded-2xl flex-shrink-0`}
                    >
                      <div className={`${achievement.textColor}`}>
                        {achievement.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>

                  {/* Decorative gradient line */}
                  <div
                    className={`mt-6 h-1 bg-gradient-to-r ${achievement.color} rounded-full`}
                  ></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
