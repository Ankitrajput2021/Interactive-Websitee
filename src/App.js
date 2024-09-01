// App.js
import React, { useState, useEffect } from 'react';
import './styles.css';

const App = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleClick = () => {
    setShowMessage(!showMessage);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const particles = [];
    for (let i = 0; i < 100; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.width = `${Math.random() * 5 + 2}px`;
      particle.style.height = particle.style.width;
      particle.style.top = `${Math.random() * 100}vh`;
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.opacity = Math.random();
      document.querySelector('.background-layer').appendChild(particle);
      particles.push(particle);
    }

    const animateParticles = () => {
      particles.forEach(particle => {
        particle.style.top = `${parseFloat(particle.style.top) -0.5 }px`;
        if (parseFloat(particle.style.top) < -10) {
          particle.style.top = '400vh';
        }
      });
      requestAnimationFrame(animateParticles);
    };

    animateParticles();
  }, []);

  return (
    <div>
      <div id="background-animation">
        <div className="background-layer"></div>
      </div>
      <h1>Welcome to My Website!</h1>
      <button onClick={handleClick}>
        {showMessage ? 'Hide Message' : 'Show Message'}
      </button>
      {showMessage && <p style={{ marginTop: '20px' }}>Hello, Welcome to my website;) </p>}
      <form>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
