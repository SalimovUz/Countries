import React from 'react'
import Container from './Container/Container'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css"
import CountryDetails from './Components/CountryDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/country/:name" element={<CountryDetails />} />
      </Routes>
    </Router>
  );
}

export default App
