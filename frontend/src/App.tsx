import './index.css';
// import Header from './components/Header';
// import Footer from './components/Footer';
import Home from './pages/HomePage';
import Services from './pages/ServicesPage';
import Contact from './pages/ContactPage';
import About from './pages/AboutPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen overflow-x-hidden w-full">
  

        
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        

       
      </div>
    </Router>
  );
}
