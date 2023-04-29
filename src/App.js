import React from 'react';

import {AboutUs,Chef,FindUs,Footer,Gallery,Intro,Header,Laurels,SpecialMenu} from './container';
import { Navbar } from './components';
import './App.css';

const App = () => {
  return(
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <Chef />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
}

export default App;

