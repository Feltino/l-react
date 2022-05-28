import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

const container = document.querySelector('.app');
const root = createRoot(container)
root.render(
  <App />
);
