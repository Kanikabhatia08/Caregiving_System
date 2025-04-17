import './App.css';
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Error from './pages/Error'
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import ContactUs from './pages/ContactUs';


function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/login" element={<Home />} />
        <Route path="/signup" element={<Home />} />
        <Route path="/blogs" element={<Home />} />
        <Route path="/faqs" element={<Home />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/*" element={<Error />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
