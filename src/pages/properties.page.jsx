import React from 'react';
import HeaderPart from '../parts/header.part';
import ExampleBreadcrumbPage from './exampleBreadcrumb.page';

const PropertiesPage = () => {  
  return (
    <>
      <HeaderPart />
      <section className="container section-properties">
        <ExampleBreadcrumbPage />
      </section>
    </>
  );
}

export default PropertiesPage;
