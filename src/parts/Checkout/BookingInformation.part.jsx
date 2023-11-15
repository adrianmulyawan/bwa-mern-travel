import React from 'react';
import { Fade } from 'react-reveal';

import InputTextComponent from '../../components/Form/InputText/inputText.component';

const BookingInformationPart = (props) => {
  const { data, ItemDetails, checkout } = props;

  return (
    <Fade>
      <div className="container" style={{ marginBottom: '30px' }}>
        <div className="row justify-content-center align-items-center">
          {/* Image */}
          <div className="col-lg-6 col-md-6 col-sm-12 border-right py-5" style={{ paddingRight: 80 }}>
            <Fade delay={300}>
              <div className="card" style={{ border: 0 }}>
                <figure className='img-wrapper'>
                  <img className='img-fluid img-wrapper' src={ ItemDetails.imageUrls[0].url } alt={ ItemDetails.name } />
                </figure>
                <div className="row align-items-center">
                  <div className="col">
                    <div className="meta-wrapper">
                      <h5>
                        { ItemDetails.name }
                      </h5>
                      <span className='text-grey-500'>
                        { ItemDetails.city }, { ItemDetails.country }
                      </span>
                    </div>
                  </div>
                  <div className="col-auto">
                    <span>
                      ${ checkout.duration * ItemDetails.price } USD
                      <span className='text-grey-500'> per </span>
                      { checkout.duration } { ItemDetails.unit }
                      { +checkout.duration > 1 ? "s" : "" }
                    </span>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
          {/* Form */}
          <div className="col-lg-6 col-sm-6 col-sm-12 py-5" style={{ paddingLeft: 80 }}>
            <Fade delay={600}>
              <label htmlFor="firstName">First Name</label>
              <InputTextComponent
                id="firstName"
                name="firstName"
                value={data.firstName}
                onChange={props.onChange}
              />

              <label htmlFor="lastName">Last Name</label>
              <InputTextComponent
                id="lastName"
                name="lastName"
                value={data.lastName}
                onChange={props.onChange}
              />

              <label htmlFor="email">Email Address</label>
              <InputTextComponent
                id="email"
                name="email"
                type="email"
                value={data.email}
                onChange={props.onChange}
              />

              <label htmlFor="phone">Phone Number</label>
              <InputTextComponent
                id="phone"
                name="phone"
                type="tel"
                value={data.phone}
                onChange={props.onChange}
              />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default BookingInformationPart;
