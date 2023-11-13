import React from 'react';
import BreadCrumbComponent from '../components/BreadCrumb/BreadCrumb.component';

const ExampleBreadcrumbPage = () => {
  const breadcrumb = [
    { pageTitle: 'Home', pageHref: '/' },
    { pageTitle: 'House Details', pageHref: '' },
  ]

  return (
    <>
      <div className="row align-items-center justify-content-center" style={{ height: '100vh' }}>
        <div className="col-4">
          {/* Menggunakan InputDateComponent */}
          <BreadCrumbComponent data={ breadcrumb } />
        </div>
      </div>
    </>
  );
}

export default ExampleBreadcrumbPage;
