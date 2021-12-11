import './App.css';
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
          <Routes>
          <Route exact path='/create' element={<Create/>} />
          <Route exact path='/read' element={<Read/>} />
          <Route path='/update' element={<Update/>} />
          </Routes>
        </div>
      </div>
    </Router>
    
    
  );
}

export default App;
