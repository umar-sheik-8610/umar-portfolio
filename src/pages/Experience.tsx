import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Award,
  GraduationCap,
  Briefcase,
  Shield,
} from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Web Developer Intern",
      company: "Prodigy InfoTech",
      period: "Aug – Sep 2024",
      location: "Remote",
      description:
        "Worked on responsive websites using HTML, CSS, and JavaScript. Completed 4 major tasks focusing on modern web development practices and user experience optimization.",
      achievements: [
        "Developed 4 responsive web applications",
        "Implemented modern CSS techniques and animations",
        "Optimized website performance and accessibility",
        "Collaborated with design team on UI/UX improvements",
      ],
      icon: <Briefcase className="h-6 w-6" />,
      color: "from-purple-500 to-indigo-500",
    },
    {
      type: "work",
      title: "Cybersecurity Virtual Internship",
      company: "AICTE",
      period: "Sep – Nov 2023",
      location: "Virtual",
      description:
        "Comprehensive cybersecurity training program covering foundational network security, ethical hacking methodologies, and threat analysis techniques.",
      achievements: [
        "Learned network security fundamentals",
        "Studied ethical hacking techniques",
        "Analyzed various cybersecurity threats",
        "Completed hands-on security assessments",
      ],
      icon: <Shield className="h-6 w-6" />,
      color: "from-emerald-500 to-teal-500",
    },
  ];

  const education = [
    {
      degree: "B.Tech – Computer and Communication Engineering",
      institution: "Sri Manakula Vinayagar Engineering College",
      location: "Puducherry",
      period: "2021 – 2025",
      description:
        "Completed Bachelor of Technology with focus on computer science fundamentals, communication systems, and emerging technologies.",
      icon: <GraduationCap className="h-6 w-6" />,
      color: "from-slate-500 to-gray-500",
    },
    {
      degree: "12th Grade",
      institution: "Aditya Vidyashram Residential School",
      location: "Puducherry",
      period: "2020 – 2021",
      description:
        "Completed higher secondary education with strong foundation in mathematics and science.",
      icon: <GraduationCap className="h-6 w-6" />,
      color: "from-amber-500 to-orange-500",
    },
  ];

  const certifications = [
    {
      name: "Database Management System",
      issuer: "NPTEL",
      year: "2024",
      description:
        "Comprehensive course covering database design, SQL, and database management principles.",
    },
    {
      name: "Programming in Java",
      issuer: "NPTEL",
      year: "2024",
      description:
        "Advanced Java programming concepts including OOP, data structures, and application development.",
    },
    {
      name: "Introduction to CyberSecurity",
      issuer: "CISCO",
      year: "2023",
      description:
        "Foundational cybersecurity concepts, threat analysis, and security best practices.",
    },
    {
      name: "Azure Data Fundamentals",
      issuer: "Microsoft",
      year: "2023",
      description:
        "Cloud data services, Azure data platform, and data analytics fundamentals.",
    },
    {
      name: "Joy of Computing Using Python",
      issuer: "NPTEL",
      year: "2023",
      description:
        "Introductory Python programming, logic building, and problem-solving with real-world applications.",
    },
    {
      name: "Introduction to Networking",
      issuer: "CISCO",
      year: "2023",
      description:
        "Core networking concepts including IP addressing, routing, switching, and network communication principles.",
    },
    {
      name: "AI-ML Virtual Internship",
      issuer: "AICTE",
      year: "2024",
      description:
        "Hands-on exposure to foundational AI and Machine Learning concepts, models, and real-world case applications.",
    },
    {
      name: "Process Mining Virtual Internship",
      issuer: "AICTE",
      year: "2024",
      description:
        "Focused on process mining, including event log analysis, process discovery, and workflow optimization techniques.",
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
              My <span className="text-purple-600">Journey</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A timeline of my professional experience, education, and
              continuous learning journey in technology.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-emerald-600 mx-auto mt-6"></div>
          </motion.div>

          {/* Experience Section */}
          <motion.div variants={itemVariants} className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 flex items-center">
              <Briefcase className="h-8 w-8 text-purple-600 mr-3" />
              Professional Experience
            </h2>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 backdrop-blur-sm bg-opacity-70"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div
                      className={`p-4 bg-gradient-to-r ${exp.color} rounded-2xl text-white flex-shrink-0 shadow-lg`}
                    >
                      {exp.icon}
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {exp.title}
                          </h3>
                          <p className="text-xl text-purple-600 font-semibold">
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex flex-col lg:items-end text-gray-500 mt-2 lg:mt-0">
                          <div className="flex items-center mb-1">
                            <Calendar className="h-4 w-4 mr-2" />
                            {exp.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">
                          Key Achievements
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start">
                              <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span className="text-gray-600">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div variants={itemVariants} className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 flex items-center">
              <GraduationCap className="h-8 w-8 text-emerald-600 mr-3" />
              Education
            </h2>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 backdrop-blur-sm bg-opacity-70"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div
                      className={`p-4 bg-gradient-to-r ${edu.color} rounded-2xl text-white flex-shrink-0 shadow-lg`}
                    >
                      {edu.icon}
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {edu.degree}
                          </h3>
                          <p className="text-xl text-emerald-600 font-semibold">
                            {edu.institution}
                          </p>
                        </div>
                        <div className="flex flex-col lg:items-end text-gray-500 mt-2 lg:mt-0">
                          <div className="flex items-center mb-1">
                            <Calendar className="h-4 w-4 mr-2" />
                            {edu.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2" />
                            {edu.location}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 text-lg leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-gray-900 mb-12 flex items-center">
              <Award className="h-8 w-8 text-slate-600 mr-3" />
              Certifications
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 backdrop-blur-sm bg-opacity-70"
                >
                  <div className="flex items-center mb-4">
                    <Award className="h-6 w-6 text-slate-600 mr-3" />
                    <span className="text-sm font-semibold text-slate-600">
                      {cert.year}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-purple-600 font-semibold mb-3">
                    {cert.issuer}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
