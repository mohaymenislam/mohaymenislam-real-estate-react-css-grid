import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';

import Best from './components/best/Best';
import Featured from './components/featured/Featured';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
       <Navbar></Navbar> 
       <Hero></Hero>
       <Best></Best>
       <Featured></Featured>
       <Footer></Footer>
    </>
  );
};

export default App;