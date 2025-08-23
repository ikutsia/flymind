import React, { useState, useEffect } from "react";
import "./App.css";
import MagneticCursor from "./MagneticCursor";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);

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
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            >
              <div
                className={`w-1 h-1 ${
                  darkMode
                    ? "bg-cyan-400 shadow-cyan-400/50"
                    : "bg-purple-600 shadow-purple-600/50"
                } rounded-full shadow-lg`}
              ></div>
            </div>
          ))}
        </div>

        {/* Mouse Follower Effect */}
        <div
          className="absolute w-96 h-96 bg-gradient-radial from-purple-500/20 via-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none transition-all duration-700"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div
        className={`relative z-10 min-h-screen ${
          darkMode ? "text-white" : "text-gray-900"
        } transition-colors duration-500`}
      >
        {/* Navigation */}
        <nav
          className={`fixed top-0 w-full z-50 ${
            darkMode ? "bg-black/20" : "bg-white/20"
          } backdrop-blur-lg border-b ${
            darkMode ? "border-purple-500/30" : "border-purple-400/30"
          } transition-all duration-500`}
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              FlyMind
            </div>
            <div className="hidden md:flex space-x-8">
              {["Home", "Services", "Portfolio", "About", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`${
                      darkMode ? "hover:text-cyan-400" : "hover:text-purple-600"
                    } transition-colors duration-300 relative group glitch interactive magnetic-pull`}
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                  </a>
                )
              )}
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-purple-600/30 hover:bg-purple-600/50 transition-all duration-300 backdrop-blur-sm border border-purple-400/30 interactive magnetic-pull"
              >
                {darkMode ? "☀️" : "🌙"}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-purple-600/30 hover:bg-purple-600/50 transition-all duration-300 interactive magnetic-pull"
              >
                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                  <div
                    className={`w-full h-0.5 bg-white transition-all duration-300 ${
                      mobileMenuOpen ? "rotate-45 translate-y-1" : ""
                    }`}
                  ></div>
                  <div
                    className={`w-full h-0.5 bg-white transition-all duration-300 ${
                      mobileMenuOpen ? "opacity-0" : ""
                    }`}
                  ></div>
                  <div
                    className={`w-full h-0.5 bg-white transition-all duration-300 ${
                      mobileMenuOpen ? "-rotate-45 -translate-y-1" : ""
                    }`}
                  ></div>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden absolute top-full left-0 w-full ${
              darkMode ? "bg-black/90" : "bg-white/90"
            } backdrop-blur-lg border-b ${
              darkMode ? "border-purple-500/30" : "border-purple-400/30"
            } transition-all duration-300 ${
              mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <div className="px-6 py-4 space-y-4">
              {["Home", "Services", "Portfolio", "About", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block ${
                      darkMode ? "hover:text-cyan-400" : "hover:text-purple-600"
                    } transition-colors duration-300 text-lg font-medium`}
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center px-6 pt-20"
        >
          <div className="text-center max-w-6xl mx-auto">
            <div className="mb-8 relative">
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                FLYMIND
              </h1>
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 blur-3xl rounded-full"></div>
            </div>

            <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-gray-300">
              Cosmic Web & Mobile Development
            </h2>

            <p className="text-xl mb-12 text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We craft interdimensional digital experiences that transcend
              reality. Welcome to the future of web development.
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full text-white font-semibold text-lg overflow-hidden hover:scale-105 transition-all duration-300 interactive magnetic-pull">
                <span className="relative z-10">Launch Project</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button className="group px-8 py-4 border-2 border-cyan-400 rounded-full text-cyan-400 font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:scale-105 interactive magnetic-pull">
                Explore Universe
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Our Cosmic Services
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Web Development",
                  description:
                    "Interdimensional websites that break the laws of physics",
                  icon: "🌐",
                  gradient: "from-cyan-500 to-blue-500",
                },
                {
                  title: "Mobile Apps",
                  description: "Portable universes in your pocket dimension",
                  icon: "📱",
                  gradient: "from-purple-500 to-pink-500",
                },
                {
                  title: "UI/UX Design",
                  description: "Experiences that transcend space and time",
                  icon: "🎨",
                  gradient: "from-green-500 to-cyan-500",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="group relative p-8 bg-black/40 backdrop-blur-lg rounded-2xl border border-purple-500/30 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 interactive magnetic-pull"
                >
                  <div
                    className={`text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Dimensional Projects
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="group relative aspect-video bg-gradient-to-br from-purple-900/50 to-cyan-900/50 rounded-xl overflow-hidden border border-purple-500/30 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 interactive magnetic-pull"
                >
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-4">🚀</div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        Project {index + 1}
                      </h3>
                      <p className="text-sm text-gray-400">
                        Cosmic Web Experience
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              About the Cosmic Crew
            </h2>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <p
                  className={`text-lg ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  } leading-relaxed`}
                >
                  We are digital architects from the future, crafting
                  experiences that transcend the boundaries of conventional web
                  development. Our team specializes in creating interdimensional
                  user interfaces that feel like magic.
                </p>
                <p
                  className={`text-lg ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  } leading-relaxed`}
                >
                  With cutting-edge technologies and a passion for innovation,
                  we transform ideas into cosmic digital realities that
                  captivate users across the multiverse.
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  {[
                    "React",
                    "Next.js",
                    "Three.js",
                    "WebGL",
                    "AI/ML",
                    "Blockchain",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className={`px-4 py-2 ${
                        darkMode
                          ? "bg-purple-900/30 text-cyan-400"
                          : "bg-purple-100 text-purple-700"
                      } rounded-full text-sm font-semibold border ${
                        darkMode ? "border-purple-500/30" : "border-purple-300"
                      } hover:scale-105 transition-transform duration-300 magnetic`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div
                  className={`${
                    darkMode
                      ? "bg-gradient-to-br from-purple-900/30 to-cyan-900/30"
                      : "bg-gradient-to-br from-purple-100 to-cyan-100"
                  } rounded-2xl p-8 border ${
                    darkMode ? "border-purple-500/30" : "border-purple-300"
                  } backdrop-blur-lg hover:scale-105 transition-transform duration-500 float`}
                >
                  <div className="text-center">
                    <div className="text-6xl mb-6">🚀</div>
                    <h3
                      className={`text-2xl font-bold ${
                        darkMode ? "text-white" : "text-gray-800"
                      } mb-4`}
                    >
                      Our Mission
                    </h3>
                    <p
                      className={`${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      To push the boundaries of digital experiences and create
                      websites that feel like portals to other dimensions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Contact the Mothership
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Ready to launch your project into the digital cosmos?
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white font-semibold text-lg hover:scale-105 transition-all duration-300 relative overflow-hidden interactive magnetic-pull">
                <span className="relative z-10">Send Transmission</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-purple-500/30">
          <div className="max-w-7xl mx-auto text-center">
            <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              FlyMind
            </div>
            <p className="text-gray-400">
              © 2024 FlyMind. Crafting the future, one pixel at a time.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
