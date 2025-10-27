import './index.css';
// import Header from './components/Header';
// import Footer from './components/Footer';
import Home from './pages/HomePage';
// import Contact from './pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
  

        
        
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        

       
      </div>
    </Router>
  );
}
