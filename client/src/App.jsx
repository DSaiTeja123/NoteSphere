import React from 'react'
import {Home, Login, Signup} from './pages/index'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Modal from "react-modal";

Modal.setAppElement("#root");

const routes = (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </Router>
);

function App() {

  return (
    <>
      {routes}
    </>
  )
}

export default App
