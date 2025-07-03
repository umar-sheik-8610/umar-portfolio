import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  Send,
  MessageCircle,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "umarsheikoff@outlook.com",
      href: "mailto:umarsheikoff@outlook.com",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+91-7339682905",
      href: "tel:+917339682905",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/umar-sheik",
      href: "https://linkedin.com/in/umar-sheik",
      color: "from-slate-600 to-slate-700",
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      value: "github.com/umar-sheik",
      href: "https://github.com/umar-sheik",
      color: "from-gray-700 to-gray-800",
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
              Get In <span className="text-purple-600">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm always open to discussing new opportunities, interesting
              projects, or just having a chat about technology.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-emerald-600 mx-auto mt-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <div className="bg-white rounded-3xl shadow-xl p-8 backdrop-blur-sm bg-opacity-70">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                  <MessageCircle className="h-8 w-8 text-purple-600 mr-3" />
                  Let's Connect
                </h2>

                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Whether you have a project in mind, want to collaborate, or
                  just want to say hello, I'd love to hear from you. Feel free
                  to reach out through any of the channels below.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.href}
                      target={
                        info.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        info.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-300 group"
                    >
                      <div
                        className={`p-3 bg-gradient-to-r ${info.color} rounded-xl text-white mr-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}
                      >
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                          {info.label}
                        </p>
                        <p className="text-lg font-medium text-gray-900">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Location */}
                <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-emerald-50 rounded-2xl">
                  <div className="flex items-center mb-3">
                    <MapPin className="h-6 w-6 text-purple-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      Location
                    </h3>
                  </div>
                  <p className="text-gray-600">Puducherry, India</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Available for remote work worldwide
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-white rounded-3xl shadow-xl p-8 backdrop-blur-sm bg-opacity-70">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                  <Send className="h-8 w-8 text-purple-600 mr-3" />
                  Send Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-700 mb-2"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="Project Collaboration"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell me about your project or just say hello..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-purple-600 to-emerald-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-purple-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </motion.button>
                </form>

                <div className="mt-8 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl">
                  <p className="text-sm text-gray-600 text-center">
                    <strong>Quick Response:</strong> I typically respond to
                    messages within 24 hours. For urgent matters, feel free to
                    reach out via phone or LinkedIn.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
