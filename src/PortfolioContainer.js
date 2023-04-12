import React, {useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Portfolio from './components/pages/Portfolio';
import About from './components/pages/About';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('about');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'about') {
      return <About />;
    }
    if (currentPage === 'portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'contact') {
      return <Contact />;
    }
    if (currentPage === 'resume') {
        return <Resume />;
      }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="App">
      {/* We are passing the currentPage from state and the function to update it */}
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer />
    </div>
  );
}