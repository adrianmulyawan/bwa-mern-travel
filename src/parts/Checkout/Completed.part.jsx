import React from 'react';
import { Fade } from 'react-reveal';
import CompletedImage from '../../assets/images/completed_image.png';

const CompletedPart = () => {
  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center text-center">
          <div className="col-4">
            <img
              src={CompletedImage}
              className="img-fluid"
              alt="completed checkout apartment"
              style={{ marginBottom: '20px' }}
            />
            <p className="text-gray-500">
              We will inform you via email later once the transaction has been
              accepted
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default CompletedPart;
