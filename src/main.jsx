import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'

import "./index.css";

import "./styles/shared/variables.css";
import "./styles/shared/global.css";
import "./styles/shared/header.css";
import "./styles/course/hero.css";
import "./styles/shared/buttons.css";
import "./styles/shared/floating-whatsapp.css";
import "./styles/course/index.css";
import "./styles/shared/responsive.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
