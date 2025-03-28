import React from 'react';
import ReactDOM from 'react-dom/client';  // Import from 'react-dom/client' instead of 'react-dom'
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));  // Create the root for React rendering
root.render(<App />);  // Render the App component
