import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './App';

// --- ¡AÑADE ESTA LÍNEA! ---
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// La llamada a la función necesita que la función esté importada.
// Si no quieres usar Web Vitals, también puedes comentar o borrar esta línea.
reportWebVitals();