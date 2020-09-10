import React, { useState, useEffect } from 'react';
import { Navbar, Header, Form, Statistics, CTA, Footer } from './components';
import './App.scss';

function App() {
  const [viewportSize, setViewportSize] = useState(window.innerWidth);

  function useWindowSize() {
    useEffect(() => {
      function updateSize() {
        setViewportSize(window.innerWidth);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return viewportSize;
  }

  useWindowSize();

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Form viewportSize={viewportSize}/>
      <Statistics />
      <CTA viewportSize={viewportSize}/>
      <Footer />
    </div>
  );
}

export default App;