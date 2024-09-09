import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Placement from './pages/Placement';
import Admission from './pages/Admission';
import Courses from './pages/Courses';
import Course from './pages/Course';
import ContactUs from './pages/ContactUs';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/placement" element={<Placement />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/courses/:category/:courseType" element={<Course />} />
        <Route path="/courses/*" element={<Courses />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
