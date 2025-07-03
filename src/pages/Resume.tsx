import { motion } from "framer-motion";
import { Download, Eye, FileText } from "lucide-react";

const Resume = () => {
  const handleDownload = () => {
    // Create a link to download the PDF
    const link = document.createElement("a");
    link.href = "/Umar Sheik ATS.pdf";
    link.download = "Umar_Sheik_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
              My <span className="text-purple-600">Resume</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Download my latest resume to learn more about my skills,
              experience, and qualifications.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-emerald-600 mx-auto mt-6"></div>
          </motion.div>

          {/* Resume Preview and Download */}
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden backdrop-blur-sm bg-opacity-70">
              {/* Header Section */}
              <div className="bg-gradient-to-r from-purple-600 to-emerald-600 p-8 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FileText className="h-12 w-12 mr-4" />
                    <div>
                      <h2 className="text-2xl font-bold">Umar Sheik S</h2>
                      <p className="text-purple-100">
                        Full Stack Developer Resume
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-purple-100">Last Updated</p>
                    <p className="font-semibold">March 2025</p>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  {/* Resume Highlights */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      Resume Highlights
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-600">
                          B.Tech in Computer and Communication Engineering
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-600">
                          Full Stack Development with MERN Stack
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-600">
                          Java Programming and J2EE Development
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-600">
                          AI/ML and Blockchain Technology Experience
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-600">
                          Multiple Industry Certifications
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-600">
                          Professional Internship Experience
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Technical Skills Summary */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      Technical Skills
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Programming Languages
                        </h4>
                        <p className="text-gray-600">
                          Java, JavaScript, Python, SQL, Solidity
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Frontend Technologies
                        </h4>
                        <p className="text-gray-600">
                          React.js, Tailwind CSS, Zustand, DOM Router
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Backend Technologies
                        </h4>
                        <p className="text-gray-600">
                          Node.js, Express.js, MongoDB, J2EE, JSP
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Tools & Concepts
                        </h4>
                        <p className="text-gray-600">
                          Git, Postman, REST APIs, JWT Auth, Blockchain, ML
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={handleDownload}
                    className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-emerald-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <Download className="mr-3 h-5 w-5" />
                    Download Resume
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.div>
                  </button>

                  <a
                    href="/Umar Sheik ATS.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center px-8 py-4 border-2 border-purple-600 text-purple-600 font-semibold rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105"
                  >
                    <Eye className="mr-3 h-5 w-5" />
                    View in Browser
                  </a>
                </div>

                {/* Additional Info */}
                <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-emerald-50 rounded-2xl">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    About This Resume
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    This resume showcases my journey as a Full Stack Developer
                    with expertise in modern web technologies, mobile app
                    development, and emerging technologies like blockchain and
                    AI/ML. It includes my educational background, professional
                    experience, technical skills, and notable projects that
                    demonstrate my capabilities in building scalable and
                    innovative solutions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
