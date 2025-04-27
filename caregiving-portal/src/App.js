import './App.css';
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Error from './pages/Error'
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import Signup from './pages/Signup/Signup';
import FAQs from './pages/FAQs';
import Bookings from './pages/Bookings';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
      {/* <Route path="/courses" element={
          <PrivateLink >
            <Courses />
          </PrivateLink>
        } />
        <Route path="/cart" element={
          <PrivateLink  >
            <Cart />
          </PrivateLink>
        } /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/*" element={<Error />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
