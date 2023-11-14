import React from 'react';
import { Fade } from 'react-reveal';

import BreadCrumbComponent from '../../components/BreadCrumb/BreadCrumb.component'

import '../../assets/scss/style.scss';

const TitlePart = (props) => {
  const { name, city, country, breadcrumb } = props;

  return (
    <>
      <Fade top>
        <div className="row row-detail-title align-items-center">
          <div className="col d-none d-md-block">
            <BreadCrumbComponent data={ breadcrumb } />
          </div>
          <div className="col-auto">
            <h3 className={`detail-title text-${window.innerWidth < 500 ? 'start' : 'center'}`}>
              { name }
            </h3>
            <p className={`detail-location text-${window.innerWidth < 500 ? 'start' : 'center'}`}>
              { city }, { country }
            </p>
          </div>
          <div className="col"></div>
        </div>
      </Fade>
    </>
  );
}

export default TitlePart;
