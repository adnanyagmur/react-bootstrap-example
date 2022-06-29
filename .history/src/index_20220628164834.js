import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'bootstrap';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <ThemeProvider dir="rtl">
  <App />
</ThemeProvider>
  </React.StrictMode>
);


