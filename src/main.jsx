import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './styles/index.css'
import Owners from './routes/Owners'
import Harbour from './routes/Harbour'
import Boat from './routes/Boat'
import CreateBoat from './routes/CreateBoat'
import ConnectBoat from './routes/ConnectBoat'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="owners" element={<Owners />} />
        <Route path="harbour" element={<Harbour />} />
        <Route path="boat" element={<Boat />} />
        <Route path="createboat" element={<CreateBoat />} />
        <Route path="connectboat" element={<ConnectBoat />} />
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
