import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './NavBar';
import App from './App';
import Skills from './Skills';
import Projects from './Projects';
import ContactMe from './ContactMe';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <App />
    <Skills />
    <Projects />
    <ContactMe />
  </React.StrictMode>
);

