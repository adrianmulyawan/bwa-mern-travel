import React from 'react';
import StarComponent from '../components/Star/star.component';
import ButtonComponent from '../components/Button/button.component';
import { Fade } from 'react-reveal';

const TestimonialPart = (props) => {
  const { data } = props;
  console.info(data.imageUrl);

  return (
    <>
      <section className='container section-testimonial'>
        <div className="row align-items-center">
          <Fade left>
            <div className="col-lg-4 col-md-4 d-none d-sm-block img-testimonial mb-md-0 mb-md-3 mb-sm-5">
              <img className='img-fluid' src={ data.imageUrl } alt="img-testimonial" />
            </div>
          </Fade>
          <Fade right>
            <div className="col-lg-7 col-md-7 col-sm-12 mx-lg-4 mx-md-4 mx-0 data-testimonial">
              <h4 className='text-testimonial'>{ data.name }</h4>
              <StarComponent value={ data.rate } width={ 36 } height={ 36 } spacing={4} style={{ marginBottom: '8px' }}></StarComponent>
              <h4 className='describe-testimonial'>
                { data.content }
              </h4>
              <h4 className="name-testimonial">
                { data.familyName }, { data.familyOccupation }
              </h4>
              <ButtonComponent className="btn btn-show btn-primary px-4 py-3" isPrimary hasShadow type="link" href={`/testimonial/${data._id}`} style={{ backgroundColor: '#3252DF' }}>
                Read Their Story
              </ButtonComponent>
            </div>
          </Fade>
        </div>
      </section>
    </>
  );
}

export default TestimonialPart;
