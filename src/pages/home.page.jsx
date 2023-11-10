import React from 'react';
import HeaderPart from '../parts/header.part';
import HeroPart from '../parts/hero.part';
import landingPage from '../json/landingPage.json';

const HomePage = () => {
  return (
    <>
      <HeaderPart />
      <HeroPart data = { landingPage.hero } />
    </>
  );
}

export default HomePage;
