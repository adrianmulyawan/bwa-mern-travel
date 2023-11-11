import React from 'react';
import ButtonComponent from '../components/Button/button.component';
import IconText from './IconText';
import { Slide } from 'react-reveal';

const FooterPart = () => {
  return (
    <>
      <Slide left>
        <footer style={{ borderTop: '1px solid #e5e5e5' }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-12 row-1">
                <IconText />
                <p className="text-icon">
                  We kaboom your beauty holiday <br />
                  instantly and memorable.
                </p>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12 mr-5">
                <h5 className='text-footer mt-3'>
                  For Beginners
                </h5>
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item'>
                    <ButtonComponent className='btn-link' type='link' href='/register'>
                      New Account
                    </ButtonComponent>
                  </li>
                  <li className='list-group-item'>
                    <ButtonComponent className='btn-link' type='link' href='/properties'>
                      Start Booking a Room
                    </ButtonComponent>
                  </li>
                  <li className='list-group-item'>
                    <ButtonComponent className='btn-link' type='link' href='/use-payments'>
                      Use Payments
                    </ButtonComponent>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12">
                <h5 className='text-footer mt-3'>
                  Explore Us
                </h5>
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item'>
                    <ButtonComponent className='btn-link' type='link' href='/careers'>
                      Our Careers
                    </ButtonComponent>
                  </li>
                  <li className='list-group-item'>
                    <ButtonComponent className='btn-link' type='link' href='/privacy'>
                      Privacy
                    </ButtonComponent>
                  </li>
                  <li className='list-group-item'>
                    <ButtonComponent className='btn-link' type='link' href='/terms'>
                      Terms & Condition
                    </ButtonComponent>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12 mr-5">
                <h5 className='text-footer mt-3'>
                  Connect Us
                </h5>
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item'>
                    <ButtonComponent isExternal className='btn-link' type='link' href='/mailto:support@staycation.id'>
                      support@staycation.id
                    </ButtonComponent>
                  </li>
                  <li className='list-group-item'>
                    <ButtonComponent className='btn-link' type='link' href='/telto:02122081996'>
                      021 - 2208 - 1996
                    </ButtonComponent>
                  </li>
                  <li className='list-group-item'>
                    <span>Staycation, Kemang, Jakarta</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row copyright">
              <span>Copyright 2023 • All rights reserved • Staycation</span>
            </div>
          </div>
        </footer>
      </Slide>
    </>
  );
}

export default FooterPart;
