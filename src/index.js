// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App';

// createRoot(document.getElementById('root')).render(<App />);


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </React.StrictMode>
);