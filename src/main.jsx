import { render } from 'react-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './styles/index.css'
import Owners from './routes/Owners'

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="/owners" element={<Owners />} >

        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
