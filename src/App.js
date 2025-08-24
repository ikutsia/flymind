import React, { useState } from "react";
import "./App.css";
import MagneticCursor from "./MagneticCursor";
import ProjectCard from "./ProjectCard";
import SmoothScroll from "./SmoothScroll";
import FireEffect from "./FireEffect";
import flyLogo from "./fly_logo.png";
import flymindLogo from "./flymind_logo.png";
import { projects } from "./data/projects";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const scrollToSection = (sectionId) => {
    const sections = ["home", "services", "portfolio", "about", "contact"];
    const targetIndex = sections.indexOf(sectionId);

    if (targetIndex !== -1) {
      // Calculate the scroll position for the target section
      const container = document.querySelector(".smooth-scroll-container");
      if (container && container.children.length > 0) {
        let targetScroll = 0;
        for (let i = 0; i < targetIndex; i++) {
          targetScroll += container.children[i].offsetWidth;
        }

        // Smooth scroll to the target position
        window.scrollTo({
          top: targetScroll,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div
      className={`${
        darkMode ? "dark" : "light-mode"
      } transition-all duration-500`}
    >
      <MagneticCursor />
      {/* Cosmic Background */}
      <div
        className={`fixed inset-0 ${
          darkMode
            ? "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
            : "bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100"
        } transition-all duration-1000 cosmic-bg`}
      >
        {/* Animated Stars */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-white rounded-full animate-pulse ${
                darkMode ? "opacity-60" : "opacity-30"
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 ${
                darkMode ? "bg-cyan-400" : "bg-purple-400"
              } rounded-full animate-float opacity-40`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-100 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src={flymindLogo}
                alt="FlyMind"
                className="h-16 w-auto"
                style={{
                  maskImage:
                    "radial-gradient(circle, rgba(255,255,255,1) 60%, rgba(255,255,255,0.3) 80%, rgba(255,255,255,0) 100%)",
                  WebkitMaskImage:
                    "radial-gradient(circle, rgba(255,255,255,1) 60%, rgba(255,255,255,0.3) 80%, rgba(255,255,255,0) 100%)",
                }}
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="nav-btn relative px-4 py-2 text-white/80 hover:text-white transition-all duration-300 cursor-pointer group"
              >
                <span className="relative z-10">Home</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border border-cyan-400/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="nav-btn relative px-4 py-2 text-white/80 hover:text-white transition-all duration-300 cursor-pointer group"
              >
                <span className="relative z-10">Services</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border border-purple-400/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="nav-btn relative px-4 py-2 text-white/80 hover:text-white transition-all duration-300 cursor-pointer group"
              >
                <span className="relative z-10">Portfolio</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border border-pink-400/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/10 to-cyan-500/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="nav-btn relative px-4 py-2 text-white/80 hover:text-white transition-all duration-300 cursor-pointer group"
              >
                <span className="relative z-10">About</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border border-cyan-400/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="nav-btn relative px-4 py-2 text-white/80 hover:text-white transition-all duration-300 cursor-pointer group"
              >
                <span className="relative z-10">Contact</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border border-blue-400/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-300"
            >
              {darkMode ? (
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-300"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => {
                  scrollToSection("home");
                  setMobileMenuOpen(false);
                }}
                className="mobile-nav-btn block w-full text-left px-3 py-2 text-white/80 hover:text-white transition-all duration-300 cursor-pointer group relative"
              >
                <span className="relative z-10">Home</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button
                onClick={() => {
                  scrollToSection("services");
                  setMobileMenuOpen(false);
                }}
                className="mobile-nav-btn block w-full text-left px-3 py-2 text-white/80 hover:text-white transition-all duration-300 cursor-pointer group relative"
              >
                <span className="relative z-10">Services</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button
                onClick={() => {
                  scrollToSection("portfolio");
                  setMobileMenuOpen(false);
                }}
                className="mobile-nav-btn block w-full text-left px-3 py-2 text-white/80 hover:text-white transition-all duration-300 cursor-pointer group relative"
              >
                <span className="relative z-10">Portfolio</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-cyan-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button
                onClick={() => {
                  scrollToSection("about");
                  setMobileMenuOpen(false);
                }}
                className="mobile-nav-btn block w-full text-left px-3 py-2 text-white/80 hover:text-white transition-all duration-300 cursor-pointer group relative"
              >
                <span className="relative z-10">About</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button
                onClick={() => {
                  scrollToSection("contact");
                  setMobileMenuOpen(false);
                }}
                className="mobile-nav-btn block w-full text-left px-3 py-2 text-white/80 hover:text-white transition-all duration-300 cursor-pointer group relative"
              >
                <span className="relative z-10">Contact</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content with Horizontal Scrolling */}
      <SmoothScroll>
        {/* Hero Section */}
        <section
          id="home"
          className="flex-shrink-0 w-screen h-screen flex items-center justify-center px-6 scroll-snap-align-start"
        >
          <div className="text-center max-w-6xl mx-auto">
            <div className="relative flex justify-center items-center">
              <img
                src={flyLogo}
                alt="FlyMind Logo"
                className="h-64 md:h-96 lg:h-128 w-auto animate-pulse"
                style={{
                  maskImage:
                    "radial-gradient(circle, rgba(255,255,255,1) 60%, rgba(255,255,255,0.3) 80%, rgba(255,255,255,0) 100%)",
                  WebkitMaskImage:
                    "radial-gradient(circle, rgba(255,255,255,1) 60%, rgba(255,255,255,0.3) 80%, rgba(255,255,255,0) 100%)",
                }}
              />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
              Cosmic Web & Mobile Development
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              We craft interdimensional digital experiences that transcend
              reality. Welcome to the future of web development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                Explore Projects
              </button>
              <button className="px-8 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                Get in Touch
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="flex-shrink-0 w-screen h-screen flex items-center px-6 scroll-snap-align-start"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
              Our Cosmic Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Web Development",
                  description:
                    "Cutting-edge web applications with modern frameworks and cosmic design patterns.",
                  icon: "🌐",
                },
                {
                  title: "Mobile Development",
                  description:
                    "Native and cross-platform mobile apps that transcend device boundaries.",
                  icon: "📱",
                },
                {
                  title: "AI Integration",
                  description:
                    "Intelligent systems that learn, adapt, and evolve with your business needs.",
                  icon: "🤖",
                },
                {
                  title: "Blockchain Solutions",
                  description:
                    "Decentralized applications and smart contracts for the future of finance.",
                  icon: "⛓️",
                },
                {
                  title: "Cloud Architecture",
                  description:
                    "Scalable cloud solutions that handle cosmic-scale data and traffic.",
                  icon: "☁️",
                },
                {
                  title: "UI/UX Design",
                  description:
                    "Intuitive interfaces that create seamless user experiences across dimensions.",
                  icon: "🎨",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/70">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section
          id="portfolio"
          className="flex-shrink-0 w-screen h-screen flex items-center px-6 scroll-snap-align-start"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
              Dimension Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  icon={project.icon}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                />
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="flex-shrink-0 w-screen h-screen flex items-center px-6 scroll-snap-align-start"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                  About Our Mission
                </h2>
                <p className="text-lg text-white/80 mb-6">
                  At FlyMind, we believe in pushing the boundaries of what's
                  possible in digital space. Our team of cosmic developers and
                  designers work together to create experiences that are not
                  just functional, but truly extraordinary.
                </p>
                <p className="text-lg text-white/80 mb-8">
                  From quantum computing interfaces to AI-powered applications,
                  we specialize in the technologies that will define tomorrow's
                  digital landscape.
                </p>
                <div className="flex flex-wrap gap-4">
                  {[
                    "React",
                    "Next.js",
                    "Three.js",
                    "TensorFlow",
                    "Web3",
                    "Python",
                    "Node.js",
                    "AWS",
                  ].map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white/10 text-white rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div
                  id="our-vision-card"
                  className="mission-card bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-2xl p-8 backdrop-blur-md border border-white/10 relative group hover:scale-105 transition-all duration-300 overflow-hidden"
                >
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Our Vision
                    </h3>
                    <p className="text-white/80 mb-6">
                      To create digital experiences that bridge the gap between
                      imagination and reality, making the impossible possible
                      through innovative technology and creative design.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-cyan-400 rounded-full mr-3"></div>
                        <span className="text-white/80">Innovation First</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-purple-400 rounded-full mr-3"></div>
                        <span className="text-white/80">
                          User-Centric Design
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-pink-400 rounded-full mr-3"></div>
                        <span className="text-white/80">
                          Future-Ready Solutions
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Fire effect anchored to bottom border */}
                  <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <FireEffect />
                  </div>

                  {/* Fire glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-red-500/20 to-yellow-500/20 rounded-2xl blur-md animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="flex-shrink-0 w-screen h-screen flex items-center px-6 scroll-snap-align-start"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Launch?
            </h2>
            <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
              Let's create something extraordinary together. Reach out to us and
              let's discuss how we can bring your cosmic vision to life.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Get in Touch
                </h3>
                <p className="text-white/70 mb-4">
                  Ready to start your next project? Let's discuss your ideas.
                </p>
                <a
                  href="mailto:hello@flymind.dev"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Send Message
                </a>
              </div>
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Follow Us
                </h3>
                <p className="text-white/70 mb-4">
                  Stay updated with our latest cosmic creations and innovations.
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://twitter.com/flymind"
                    className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300"
                    title="Follow us on X (Twitter)"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com/flymind"
                    className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300"
                    title="Follow us on Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com/flymind"
                    className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300"
                    title="Follow us on Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="text-white/60">
              <p>&copy; 2024 FlyMind. All rights reserved.</p>
            </div>
          </div>
        </section>
      </SmoothScroll>
    </div>
  );
}

export default App;
