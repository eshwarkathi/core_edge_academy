import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'

import "./index.css";

import "./styles/variables.css";
import "./styles/global.css";
import "./styles/header.css";
import "./styles/hero.css";
import "./styles/cards.css";
import "./styles/buttons.css";
import "./styles/course.css";
import "./styles/animations.css";
import "./styles/responsive.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)