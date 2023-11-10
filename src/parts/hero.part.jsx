import React from 'react';
import { Fade } from 'react-reveal';
import ButtonComponent from '../components/Button/button.component';
import numberFormat from '../tools/numberFormat';
import banner from '../assets/images/banner.png';
import iconCities from '../assets/icons/ic_cities.svg';
import iconTraveler from '../assets/icons/ic_traveler.svg';
import iconTreasure from '../assets/icons/ic_treasure.svg';
import '../assets/scss/style.scss';

const HeroPart = (props) => {
  const { data } = props;

  const showMostPicked = () => {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: 'smooth'
    });
  };

  return (
    <section className='section-hero pt-4'>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          {/* Text Hero */}
          <Fade left>
            <div className="col-lg-6 col-md-6 col-sm-12 pr-5">
            {/* Text Hero */}
            <h1 className='text-hero'>
              Forget Busy Work, <br />
              Start Next Vacation
            </h1>

            {/* Sub Text Hero */}
            <p className='subtext-hero'>
              We provide what you need to enjoy your  <br />
              holiday with family. Time to make another <br />
              memorable moments.
            </p>

            {/* Button */}
            <ButtonComponent className="btn btn-show btn-primary" hasShadow isPrimary onClick={ showMostPicked }>
              Show Me Now
            </ButtonComponent>

            {/* Statistic */}
            <div className="statistic row justify-content-start">
              <div className="col-4">
                <img src={ iconTraveler } className='img-fluid img-stat' alt="stat-1" />
                <p className='text-stat'>
                  <span className='stat-number'>{ numberFormat(data.travelers) }</span> travelers
                </p>
              </div>
              <div className="col-4">
                <img src={ iconTreasure } className='img-fluid img-stat' alt="stat-2" />
                <p className='text-stat'>
                  <span className='stat-number'>{ numberFormat(data.treasures) }</span> treasure
                </p>
              </div>
              <div className="col-4">
                <img src={ iconCities } className='img-fluid img-stat' alt="stat-3" />
                <p className='text-stat'>
                  <span className='stat-number'>{ numberFormat(data.cities) }</span> cities
                </p>
              </div>
            </div>
            </div>
          </Fade>

          {/* Image Hero */}
          <Fade right>
            <div className="col-lg-6 col-md-6 d-none d-sm-block" style={{ marginTop: '40px' }}>
              <img 
                src={ banner } 
                className='img-hero img-fluid' 
                alt="hero" 
              />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default HeroPart;
