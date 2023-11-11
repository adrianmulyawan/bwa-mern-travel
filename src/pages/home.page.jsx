import React, { useRef } from 'react';
import HeaderPart from '../parts/header.part';
import HeroPart from '../parts/hero.part';
import landingPage from '../json/landingPage.json';
import PickedPart from '../parts/picked.part';
import CategoryPart from '../parts/category.part';

const HomePage = () => {
  const refMostPicked = useRef(null);
  document.title = 'Staycation.';

  return (
    <>
      <HeaderPart />
      <HeroPart refMostPicked={ refMostPicked } data = { landingPage.hero } />
      <PickedPart refMostPicked={ refMostPicked } data = { landingPage.mostPicked } />
      <CategoryPart data = { landingPage.categories }></CategoryPart>
    </>
  );
}

export default HomePage;
