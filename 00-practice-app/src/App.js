import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Portfolio from './components/pages/Portfolio';
import About from './components/pages/About';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
return (
<>
<div className="App">
<Header />
<div className="AppBody">
<Router>
<Routes>
<Route path='/' element={<About />} exact />
<Route path='/about' element={<About />} exact />
<Route path='/portfolio' element={<Portfolio />} exact />
<Route path='/resume' element={<Resume />} exact />
<Route path='/contact' element={<Contact />} exact />
</ Routes>
</Router>
</div>
<Footer />
</div>
</>
)}
export default App;
