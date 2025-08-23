import React, { useState, useEffect } from "react";
import "./App.css";
import MagneticCursor from "./MagneticCursor";
import ProjectCard from "./ProjectCard";
import flyLogo from "./fly_logo.png";
import flymindLogo from "./flymind_logo.png";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Sample project data with code snippets
  const projects = [
    {
      title: "Cosmic Dashboard",
      description: "Real-time space analytics with 3D visualizations",
      tech: ["React", "Three.js", "WebGL"],
      fileName: "Dashboard.jsx",
      codeSnippet: `import React, { useState, useEffect } from 'react';
import * as THREE from 'three';

const CosmicDashboard = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    
    // Create cosmic particles
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(1000 * 3);
    
    for (let i = 0; i < positions.length; i += 3) {
      positions[i] = (Math.random() - 0.5) * 100;
      positions[i + 1] = (Math.random() - 0.5) * 100;
      positions[i + 2] = (Math.random() - 0.5) * 100;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const material = new THREE.PointsMaterial({
      color: 0x00ffff,
      size: 0.5,
      transparent: true,
      opacity: 0.8
    });
    
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);
    
    return () => {
      renderer.dispose();
    };
  }, []);
  
  return (
    <div className="cosmic-dashboard">
      <div className="stats-grid">
        {data.map(stat => (
          <div key={stat.id} className="stat-card">
            <h3>{stat.title}</h3>
            <p>{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CosmicDashboard;`,
    },
    {
      title: "Quantum Chat",
      description: "End-to-end encrypted messaging with quantum protocols",
      tech: ["Next.js", "Socket.io", "Crypto"],
      fileName: "Chat.js",
      codeSnippet: `import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { encrypt, decrypt } from './quantum-crypto';

const QuantumChat = () => {
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);
  const [encryptionKey, setEncryptionKey] = useState(null);
  
  useEffect(() => {
    const newSocket = io('wss://quantum-server.flymind.dev');
    setSocket(newSocket);
    
    // Generate quantum encryption key
    const key = generateQuantumKey();
    setEncryptionKey(key);
    
    newSocket.on('message', (encryptedMessage) => {
      const decrypted = decrypt(encryptedMessage, key);
      setMessages(prev => [...prev, decrypted]);
    });
    
    return () => newSocket.close();
  }, []);
  
  const sendMessage = async (text) => {
    if (!socket || !encryptionKey) return;
    
    const encrypted = encrypt(text, encryptionKey);
    socket.emit('send-message', encrypted);
    
    setMessages(prev => [...prev, {
      id: Date.now(),
      text,
      sender: 'me',
      timestamp: new Date()
    }]);
  };
  
  return (
    <div className="quantum-chat">
      <div className="messages-container">
        {messages.map(msg => (
          <div key={msg.id} className={\`message \${msg.sender}\`}>
            <p>{msg.text}</p>
            <span className="timestamp">{msg.timestamp}</span>
          </div>
        ))}
      </div>
      <MessageInput onSend={sendMessage} />
    </div>
  );
};`,
    },
    {
      title: "AI Code Generator",
      description:
        "Machine learning powered code generation with syntax highlighting",
      tech: ["Python", "TensorFlow", "React"],
      fileName: "CodeGen.py",
      codeSnippet: `import tensorflow as tf
import numpy as np
from transformers import GPT2LMHeadModel, GPT2Tokenizer
import torch

class AICodeGenerator:
    def __init__(self):
        self.model = GPT2LMHeadModel.from_pretrained('gpt2')
        self.tokenizer = GPT2Tokenizer.from_pretrained('gpt2')
        self.device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
        self.model.to(self.device)
        
    def generate_code(self, prompt, max_length=100):
        # Tokenize the input prompt
        inputs = self.tokenizer.encode(prompt, return_tensors='pt')
        inputs = inputs.to(self.device)
        
        # Generate code with temperature sampling
        with torch.no_grad():
            outputs = self.model.generate(
                inputs,
                max_length=max_length,
                temperature=0.7,
                do_sample=True,
                pad_token_id=self.tokenizer.eos_token_id,
                num_return_sequences=1
            )
        
        # Decode and return the generated code
        generated_code = self.tokenizer.decode(outputs[0], skip_special_tokens=True)
        return self.format_code(generated_code)
    
    def format_code(self, code):
        # Apply syntax highlighting and formatting
        formatted_code = self.apply_syntax_highlighting(code)
        return formatted_code
    
    def apply_syntax_highlighting(self, code):
        # Custom syntax highlighting logic
        keywords = ['def', 'class', 'import', 'from', 'if', 'else', 'for', 'while']
        highlighted_code = code
        
        for keyword in keywords:
            highlighted_code = highlighted_code.replace(
                keyword, 
                f'<span class="keyword">{keyword}</span>'
            )
        
        return highlighted_code

# Usage example
if __name__ == "__main__":
    generator = AICodeGenerator()
    prompt = "Create a React component for a cosmic dashboard"
    generated = generator.generate_code(prompt)
    print(generated)`,
    },
    {
      title: "Blockchain Explorer",
      description: "Real-time blockchain transaction monitoring and analytics",
      tech: ["Web3.js", "Ethereum", "D3.js"],
      fileName: "Explorer.js",
      codeSnippet: `import Web3 from 'web3';
import * as d3 from 'd3';

class BlockchainExplorer {
    constructor() {
        this.web3 = new Web3(Web3.givenProvider);
        this.transactions = [];
        this.blocks = [];
        this.chart = null;
    }
    
    async initialize() {
        // Connect to Ethereum network
        if (typeof window.ethereum !== 'undefined') {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
        }
        
        // Set up real-time listeners
        this.setupEventListeners();
        this.initializeChart();
    }
    
    setupEventListeners() {
        // Listen for new blocks
        this.web3.eth.subscribe('newBlockHeaders', (error, result) => {
            if (!error) {
                this.handleNewBlock(result);
            }
        });
        
        // Listen for pending transactions
        this.web3.eth.subscribe('pendingTransactions', (error, result) => {
            if (!error) {
                this.handlePendingTransaction(result);
            }
        });
    }
    
    async handleNewBlock(blockHeader) {
        const block = await this.web3.eth.getBlock(blockHeader.number, true);
        this.blocks.push(block);
        this.updateBlockChart();
        this.updateTransactionChart();
    }
    
    async handlePendingTransaction(txHash) {
        const tx = await this.web3.eth.getTransaction(txHash);
        this.transactions.push(tx);
        this.updateTransactionChart();
    }
    
    initializeChart() {
        const svg = d3.select('#blockchain-chart')
            .append('svg')
            .attr('width', 800)
            .attr('height', 400);
            
        this.chart = svg;
    }
    
    updateTransactionChart() {
        // Create real-time transaction visualization
        const data = this.transactions.slice(-100);
        
        const xScale = d3.scaleTime()
            .domain(d3.extent(data, d => new Date(d.timestamp * 1000)))
            .range([0, 750]);
            
        const yScale = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.value)])
            .range([350, 50]);
            
        // Update chart with new data
        this.chart.selectAll('circle')
            .data(data)
            .enter()
            .append('circle')
            .attr('cx', d => xScale(new Date(d.timestamp * 1000)))
            .attr('cy', d => yScale(d.value))
            .attr('r', 3)
            .attr('fill', '#00ffff')
            .attr('opacity', 0.7);
    }
}

export default BlockchainExplorer;`,
    },
    {
      title: "Neural Network Visualizer",
      description:
        "Interactive 3D visualization of neural network architectures",
      tech: ["Three.js", "TensorFlow.js", "WebGL"],
      fileName: "NeuralViz.js",
      codeSnippet: `import * as THREE from 'three';
import * as tf from '@tensorflow/tfjs';

class NeuralNetworkVisualizer {
    constructor(container) {
        this.container = container;
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.nodes = [];
        this.connections = [];
        this.animationId = null;
        
        this.init();
    }
    
    init() {
        // Setup renderer
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setClearColor(0x000000, 0);
        this.container.appendChild(this.renderer.domElement);
        
        // Setup camera
        this.camera.position.z = 15;
        
        // Add lights
        const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
        this.scene.add(ambientLight);
        
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(10, 10, 5);
        this.scene.add(directionalLight);
        
        // Create neural network structure
        this.createNetwork();
        
        // Start animation loop
        this.animate();
    }
    
    createNetwork() {
        const layers = [4, 6, 6, 3]; // Input, hidden, hidden, output
        const layerSpacing = 4;
        
        layers.forEach((nodeCount, layerIndex) => {
            const layerX = (layerIndex - (layers.length - 1) / 2) * layerSpacing;
            
            for (let i = 0; i < nodeCount; i++) {
                const nodeY = (i - (nodeCount - 1) / 2) * 2;
                
                // Create node geometry
                const geometry = new THREE.SphereGeometry(0.3, 16, 16);
                const material = new THREE.MeshPhongMaterial({
                    color: this.getNodeColor(layerIndex),
                    transparent: true,
                    opacity: 0.8
                });
                
                const node = new THREE.Mesh(geometry, material);
                node.position.set(layerX, nodeY, 0);
                this.scene.add(node);
                this.nodes.push(node);
                
                // Create connections to next layer
                if (layerIndex < layers.length - 1) {
                    const nextLayerCount = layers[layerIndex + 1];
                    for (let j = 0; j < nextLayerCount; j++) {
                        const nextNodeY = (j - (nextLayerCount - 1) / 2) * 2;
                        const nextNodeX = ((layerIndex + 1) - (layers.length - 1) / 2) * layerSpacing;
                        
                        const connection = this.createConnection(
                            layerX, nodeY, 0,
                            nextNodeX, nextNodeY, 0
                        );
                        this.connections.push(connection);
                    }
                }
            }
        });
    }
    
    createConnection(x1, y1, z1, x2, y2, z2) {
        const points = [
            new THREE.Vector3(x1, y1, z1),
            new THREE.Vector3(x2, y2, z2)
        ];
        
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const material = new THREE.LineBasicMaterial({
            color: 0x00ffff,
            transparent: true,
            opacity: 0.3
        });
        
        const line = new THREE.Line(geometry, material);
        this.scene.add(line);
        return line;
    }
    
    getNodeColor(layerIndex) {
        const colors = [0xff6b6b, 0x4ecdc4, 0x45b7d1, 0x96ceb4];
        return colors[layerIndex] || 0xffffff;
    }
    
    animate() {
        this.animationId = requestAnimationFrame(() => this.animate());
        
        // Animate nodes
        this.nodes.forEach((node, index) => {
            node.rotation.x += 0.01;
            node.rotation.y += 0.01;
            
            // Pulse effect
            const scale = 1 + Math.sin(Date.now() * 0.001 + index) * 0.1;
            node.scale.setScalar(scale);
        });
        
        // Animate connections
        this.connections.forEach((connection, index) => {
            const material = connection.material;
            material.opacity = 0.3 + Math.sin(Date.now() * 0.002 + index) * 0.2;
        });
        
        this.renderer.render(this.scene, this.camera);
    }
    
    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        this.renderer.dispose();
    }
}

export default NeuralNetworkVisualizer;`,
    },
    {
      title: "Quantum Simulator",
      description: "Real-time quantum circuit simulation with visual feedback",
      tech: ["Qiskit", "Python", "WebAssembly"],
      fileName: "QuantumSim.py",
      codeSnippet: `import numpy as np
from qiskit import QuantumCircuit, QuantumRegister, ClassicalRegister, execute, Aer
from qiskit.visualization import plot_bloch_multivector, plot_histogram
import matplotlib.pyplot as plt

class QuantumSimulator:
    def __init__(self, num_qubits=2):
        self.num_qubits = num_qubits
        self.qr = QuantumRegister(num_qubits, 'q')
        self.cr = ClassicalRegister(num_qubits, 'c')
        self.circuit = QuantumCircuit(self.qr, self.cr)
        self.backend = Aer.get_backend('qasm_simulator')
        
    def create_bell_state(self):
        """Create a Bell state (quantum entanglement)"""
        self.circuit.h(self.qr[0])  # Hadamard gate on first qubit
        self.circuit.cx(self.qr[0], self.qr[1])  # CNOT gate
        
        # Measure both qubits
        self.circuit.measure(self.qr, self.cr)
        
        return self.circuit
    
    def create_quantum_fourier_transform(self):
        """Create Quantum Fourier Transform circuit"""
        for qubit in range(self.num_qubits):
            self.circuit.h(qubit)
            for other_qubit in range(qubit + 1, self.num_qubits):
                self.circuit.cp(np.pi / (2 ** (other_qubit - qubit)), qubit, other_qubit)
        
        # Reverse the order of qubits
        for qubit in range(self.num_qubits // 2):
            self.circuit.swap(qubit, self.num_qubits - 1 - qubit)
        
        self.circuit.measure(self.qr, self.cr)
        return self.circuit
    
    def create_grover_algorithm(self, marked_state):
        """Create Grover's search algorithm"""
        # Initialize superposition
        self.circuit.h(self.qr)
        
        # Oracle (marks the solution)
        self.mark_solution(marked_state)
        
        # Diffusion operator
        self.circuit.h(self.qr)
        self.circuit.x(self.qr)
        self.circuit.h(self.qr[self.num_qubits - 1])
        self.circuit.mct(self.qr[:-1], self.qr[self.num_qubits - 1])
        self.circuit.h(self.qr[self.num_qubits - 1])
        self.circuit.x(self.qr)
        self.circuit.h(self.qr)
        
        self.circuit.measure(self.qr, self.cr)
        return self.circuit
    
    def mark_solution(self, marked_state):
        """Mark the solution state in the oracle"""
        # Apply X gates to flip qubits where marked_state is 0
        for i, bit in enumerate(marked_state):
            if bit == 0:
                self.circuit.x(self.qr[i])
        
        # Apply multi-controlled Z gate
        self.circuit.h(self.qr[self.num_qubits - 1])
        self.circuit.mct(self.qr[:-1], self.qr[self.num_qubits - 1])
        self.circuit.h(self.qr[self.num_qubits - 1])
        
        # Unflip the qubits
        for i, bit in enumerate(marked_state):
            if bit == 0:
                self.circuit.x(self.qr[i])
    
    def run_simulation(self, shots=1000):
        """Execute the quantum circuit"""
        job = execute(self.circuit, self.backend, shots=shots)
        result = job.result()
        counts = result.get_counts(self.circuit)
        
        return counts
    
    def visualize_circuit(self):
        """Visualize the quantum circuit"""
        return self.circuit.draw(output='mpl')
    
    def get_statevector(self):
        """Get the state vector of the circuit"""
        backend_statevector = Aer.get_backend('statevector_simulator')
        job = execute(self.circuit, backend_statevector)
        result = job.result()
        statevector = result.get_statevector(self.circuit)
        
        return statevector
    
    def plot_bloch_sphere(self):
        """Plot the Bloch sphere representation"""
        statevector = self.get_statevector()
        return plot_bloch_multivector(statevector)

# Example usage
if __name__ == "__main__":
    # Create Bell state
    simulator = QuantumSimulator(2)
    bell_circuit = simulator.create_bell_state()
    
    # Run simulation
    counts = simulator.run_simulation()
    print("Bell state measurement results:", counts)
    
    # Visualize
    bell_circuit.draw(output='mpl')
    plt.show()`,
    },
  ];

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
            <div className="flex items-center">
              <img
                src={flymindLogo}
                alt="FlyMind Logo"
                className="h-16 w-auto"
                style={{
                  maskImage:
                    "radial-gradient(circle, rgba(255,255,255,1) 60%, rgba(255,255,255,0.3) 80%, rgba(255,255,255,0) 100%)",
                  WebkitMaskImage:
                    "radial-gradient(circle, rgba(255,255,255,1) 60%, rgba(255,255,255,0.3) 80%, rgba(255,255,255,0) 100%)",
                }}
              />
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
            <div className="mb-4 relative">
              <div className="flex justify-center mb-2">
                <div className="relative px-16 md:px-24 lg:px-32">
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
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 blur-3xl rounded-full"></div>
            </div>

            <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-gray-300">
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
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
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
