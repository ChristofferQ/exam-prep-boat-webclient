import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './styles/index.css'
import Owners from './routes/Owners'
import Harbour from './routes/Harbour'
import Boat from './routes/Boat'
import HarbourId from './routes/HarbourId'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="owners" element={<Owners />} />
<<<<<<< HEAD
        <Route path="harbour" element={<Harbour />} >
         <Route path=':HarbourId' element={<HarbourId/>}/>
        </Route>
=======
        <Route path="harbour" element={<Harbour />} />
>>>>>>> f95dbce6271781cd7ae2ae2c67d80b5e2b55ad70
        <Route path="boat" element={<Boat />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
);
