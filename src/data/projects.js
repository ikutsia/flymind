export const projects = [
  {
    title: "Cosmic Dashboard",
    description:
      "An interactive space-themed dashboard with live data visualization and real-time analytics.",
    icon: "🚀",
    tags: ["React", "Three.js", "WebGL", "API"],
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
      geometry.dispose();
      material.dispose();
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
    description:
      "End-to-end encrypted messaging with quantum protocols and real-time communication.",
    icon: "💬",
    tags: ["Next.js", "Socket.io", "Crypto", "WebRTC"],
    fileName: "Chat.js",
    codeSnippet: `import { useState, useEffect } from 'react';
import io from 'socket.io-client';

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
  
  const sendMessage = (text) => {
    if (socket && encryptionKey) {
      const encrypted = encrypt(text, encryptionKey);
      socket.emit('message', encrypted);
    }
  };
  
  return (
    <div className="quantum-chat">
      <div className="messages">
        {messages.map((msg, i) => (
          <div key={i} className="message">{msg}</div>
        ))}
      </div>
      <MessageInput onSend={sendMessage} />
    </div>
  );
};

export default QuantumChat;`,
  },
  {
    title: "Neural Network Visualizer",
    description:
      "Interactive AI model visualization with real-time training and performance metrics.",
    icon: "🧠",
    tags: ["Python", "TensorFlow", "D3.js", "ML"],
    fileName: "neural_network.py",
    codeSnippet: `import tensorflow as tf
import numpy as np
import matplotlib.pyplot as plt
from tensorflow.keras import layers, models

class NeuralNetworkVisualizer:
    def __init__(self, input_shape, hidden_layers):
        self.model = self.build_model(input_shape, hidden_layers)
        self.training_history = []
    
    def build_model(self, input_shape, hidden_layers):
        model = models.Sequential()
        
        # Input layer
        model.add(layers.Dense(hidden_layers[0], 
                              activation='relu', 
                              input_shape=input_shape))
        
        # Hidden layers
        for units in hidden_layers[1:]:
            model.add(layers.Dense(units, activation='relu'))
            model.add(layers.Dropout(0.2))
        
        # Output layer
        model.add(layers.Dense(1, activation='sigmoid'))
        
        model.compile(optimizer='adam',
                     loss='binary_crossentropy',
                     metrics=['accuracy'])
        
        return model
    
    def train_and_visualize(self, X_train, y_train, epochs=100):
        history = self.model.fit(X_train, y_train, 
                                epochs=epochs, 
                                validation_split=0.2,
                                verbose=0)
        
        self.training_history.append(history.history)
        self.plot_training_progress()
    
    def plot_training_progress(self):
        plt.figure(figsize=(12, 4))
        
        plt.subplot(1, 2, 1)
        plt.plot(self.training_history[-1]['loss'], label='Training Loss')
        plt.plot(self.training_history[-1]['val_loss'], label='Validation Loss')
        plt.title('Model Loss')
        plt.xlabel('Epoch')
        plt.ylabel('Loss')
        plt.legend()
        
        plt.subplot(1, 2, 2)
        plt.plot(self.training_history[-1]['accuracy'], label='Training Accuracy')
        plt.plot(self.training_history[-1]['val_accuracy'], label='Validation Accuracy')
        plt.title('Model Accuracy')
        plt.xlabel('Epoch')
        plt.ylabel('Accuracy')
        plt.legend()
        
        plt.tight_layout()
        plt.show()`,
  },
  {
    title: "Blockchain Explorer",
    description:
      "Real-time blockchain transaction explorer with 3D visualization and smart contract analysis.",
    icon: "⛓️",
    tags: ["Web3.js", "Three.js", "Ethereum", "Solidity"],
    fileName: "BlockchainExplorer.js",
    codeSnippet: `import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import Web3 from 'web3';

const BlockchainExplorer = () => {
  const [transactions, setTransactions] = useState([]);
  const [blocks, setBlocks] = useState([]);
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  
  useEffect(() => {
    // Initialize Web3
    const web3 = new Web3(Web3.givenProvider || 'ws://localhost:8545');
    
    // Initialize Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);
    
    // Create blockchain visualization
    const createBlockGeometry = (hash, index) => {
      const geometry = new THREE.BoxGeometry(2, 1, 1);
      const material = new THREE.MeshPhongMaterial({ 
        color: 0x00ff88,
        transparent: true,
        opacity: 0.8
      });
      
      const block = new THREE.Mesh(geometry, material);
      block.position.set(index * 3, 0, 0);
      
      return block;
    };
    
    // Listen for new blocks
    web3.eth.subscribe('newBlockHeaders', (error, blockHeader) => {
      if (!error) {
        const block = createBlockGeometry(blockHeader.hash, blocks.length);
        scene.add(block);
        setBlocks(prev => [...prev, blockHeader]);
      }
    });
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      scene.children.forEach(child => {
        if (child.rotation) {
          child.rotation.y += 0.01;
        }
      });
      renderer.render(scene, camera);
    };
    
    camera.position.z = 10;
    scene.add(new THREE.AmbientLight(0x404040));
    scene.add(new THREE.DirectionalLight(0xffffff, 1));
    
    animate();
    sceneRef.current = scene;
    
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);
  
  return (
    <div className="blockchain-explorer">
      <div ref={mountRef} className="visualization" />
      <div className="transaction-list">
        {transactions.map(tx => (
          <div key={tx.hash} className="transaction">
            <span>{tx.hash.substring(0, 10)}...</span>
            <span>{tx.value} ETH</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlockchainExplorer;`,
  },
  {
    title: "AI Code Generator",
    description:
      "Intelligent code generation powered by machine learning with syntax highlighting.",
    icon: "🤖",
    tags: ["Next.js", "OpenAI", "TypeScript", "VSCode"],
    fileName: "CodeGenerator.jsx",
    codeSnippet: `import React, { useState, useRef } from 'react';
import Editor from '@monaco-editor/react';

const CodeGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const editorRef = useRef(null);
  
  const generateCode = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    
    try {
      const response = await fetch('/api/generate-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: prompt,
          language: 'javascript',
          maxTokens: 500
        })
      });
      
      const data = await response.json();
      setGeneratedCode(data.code);
      
      // Update Monaco editor
      if (editorRef.current) {
        editorRef.current.setValue(data.code);
      }
    } catch (error) {
      console.error('Error generating code:', error);
    } finally {
      setIsGenerating(false);
    }
  };
  
  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };
  
  const copyToClipboard = () => {
    if (editorRef.current) {
      const code = editorRef.current.getValue();
      navigator.clipboard.writeText(code);
    }
  };
  
  return (
    <div className="code-generator">
      <div className="input-section">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe the code you want to generate..."
          className="prompt-input"
        />
        <button 
          onClick={generateCode}
          disabled={isGenerating}
          className="generate-btn"
        >
          {isGenerating ? 'Generating...' : 'Generate Code'}
        </button>
      </div>
      
      <div className="editor-section">
        <Editor
          height="400px"
          defaultLanguage="javascript"
          defaultValue="// Generated code will appear here..."
          onMount={handleEditorDidMount}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            wordWrap: 'on',
            automaticLayout: true
          }}
        />
        <button onClick={copyToClipboard} className="copy-btn">
          Copy Code
        </button>
      </div>
    </div>
  );
};

export default CodeGenerator;`,
  },
  {
    title: "Virtual Reality Interface",
    description:
      "Immersive VR experiences with real-time interaction and spatial computing.",
    icon: "🥽",
    tags: ["A-Frame", "WebXR", "Three.js", "WebGL"],
    fileName: "VRInterface.js",
    codeSnippet: `import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';

const VRInterface = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  
  useEffect(() => {
    // Initialize Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.xr.enabled = true;
    mountRef.current.appendChild(renderer.domElement);
    mountRef.current.appendChild(VRButton.createButton(renderer));
    
    // Create VR environment
    const createDataVisualization = () => {
      // Create floating data panels
      const panelGeometry = new THREE.PlaneGeometry(2, 1);
      const panelMaterial = new THREE.MeshBasicMaterial({ 
        color: 0x00ffff,
        transparent: true,
        opacity: 0.8
      });
      
      const panels = [];
      for (let i = 0; i < 6; i++) {
        const panel = new THREE.Mesh(panelGeometry, panelMaterial);
        panel.position.set(
          Math.cos(i * Math.PI / 3) * 3,
          Math.sin(i * Math.PI / 3) * 2,
          -5
        );
        panel.rotation.y = i * Math.PI / 3;
        scene.add(panel);
        panels.push(panel);
      }
      
      return panels;
    };
    
    // Create interactive elements
    const createInteractiveElements = () => {
      const sphereGeometry = new THREE.SphereGeometry(0.2, 32, 32);
      const sphereMaterial = new THREE.MeshPhongMaterial({ color: 0xff0080 });
      
      const spheres = [];
      for (let i = 0; i < 8; i++) {
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.position.set(
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 4,
          -3
        );
        scene.add(sphere);
        spheres.push(sphere);
      }
      
      return spheres;
    };
    
    const panels = createDataVisualization();
    const spheres = createInteractiveElements();
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(0, 10, 5);
    scene.add(directionalLight);
    
    // Animation loop
    const animate = () => {
      renderer.setAnimationLoop(() => {
        // Animate panels
        panels.forEach((panel, index) => {
          panel.rotation.y += 0.01;
          panel.position.y += Math.sin(Date.now() * 0.001 + index) * 0.001;
        });
        
        // Animate spheres
        spheres.forEach((sphere, index) => {
          sphere.rotation.x += 0.02;
          sphere.rotation.y += 0.01;
          sphere.position.y += Math.sin(Date.now() * 0.002 + index) * 0.002;
        });
        
        renderer.render(scene, camera);
      });
    };
    
    camera.position.z = 5;
    animate();
    sceneRef.current = scene;
    
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);
  
  return (
    <div className="vr-interface">
      <div ref={mountRef} className="vr-container" />
      <div className="vr-controls">
        <p>Use VR headset or click to enter VR mode</p>
      </div>
    </div>
  );
};

export default VRInterface;`,
  },
];
