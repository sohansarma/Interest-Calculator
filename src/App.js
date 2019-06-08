import React from 'react';
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;
