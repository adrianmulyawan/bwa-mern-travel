import React from 'react';

import '../../assets/scss/style.scss';
import { Slide } from 'react-reveal';

const PropertiesImagePart = (props) => {
  const { images } = props;

  return (
    <>
      <div className="row row-properties-image justify-content-center">
        {/* Gambar Besar */}
        {
          images.map((image, index) => (
            index === 0 && (
              <Slide left>
                <div key={index} className="col-lg-6 col-md-6 col-sm-6 mb-lg-2 mb-md-2 mb-sm-2">
                  {/* Tambahkan elemen atau komponen yang sesuai untuk gambar besar */}
                  <img src={image.url} className='img-fluid h-100' alt={`Large img ${index}`} />
                </div>
              </Slide>
            )
          ))
        }
        
        {/* Gambar Kecil */}
        <div className="col-lg-6 col-md-6 col-sm-6">
          {
            images.map((image, index) => (
              index !== 0 && (
                <Slide right>
                  <div key={index} className="col-lg-12 col-md-12 col-sm-12 mb-lg-2 mb-md-2 mb-sm-2">
                    {/* Tambahkan elemen atau komponen yang sesuai untuk gambar kecil */}
                    <img src={image.url} className='img-fluid' alt={`Small img ${index}`} />
                  </div>
                </Slide>
              )
            ))
          }
        </div>
      </div>
    </>
  );
}

export default PropertiesImagePart;
