import React from 'react';
import HeaderPart from '../parts/header.part';
import ExamplePage from './example.page';

const PropertiesPage = () => {  
  return (
    <>
      <HeaderPart />
      <section className="container section-properties">
        <ExamplePage />
      </section>
    </>
  );
}

export default PropertiesPage;
