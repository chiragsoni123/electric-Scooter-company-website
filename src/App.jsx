import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import About from './Components/About';
import Home from './Components/Home';
import Scooter1 from './Components/Scooters/Scooter1';
import Scooter2 from './Components/Scooters/Scooter2';
import Scooter3 from './Components/Scooters/Scooter3';
import Parts from './Components/Parts';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/scooter1" element={<Scooter1/>} />
                <Route path="/scooter2" element={<Scooter2/>} />
                <Route path='/scooter3' element={<Scooter3/>} />
                <Route path='/parts' element={<Parts/>} />
                <Route path='/contact' element={<Contact/>} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
