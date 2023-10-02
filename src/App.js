
import './App.css';
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom'
import About from './routes/About';
import Home from './routes/Home'
import Contact from './routes/Contact';
import Project from './routes/Project';
function App() {
  return (
   // empty fragments
   <>
   <Router basename='/portfolio'>
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/contact" element={<Contact/>}/>
     <Route path="/project" element={<Project/>}/>
    </Routes>
    </Router>
   </>
  );
}

export default App;
