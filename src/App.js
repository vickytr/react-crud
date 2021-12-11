import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

import Create from './components/create';
import Update from './components/update';
import Read from './components/read';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="main">
        <h2 className="main-header">React CURD Operations</h2>
        <div>
          <Navbar />
          <Routes>
            <Route path="/create" exact element={<Create />} />
            <Route path="/read" exact element={<Read />} />
            <Route path="/update" exact element={<Update />} />

          </Routes>
          
        </div>
      </div>
    </Router>
    
    
  );
}

export default App;
