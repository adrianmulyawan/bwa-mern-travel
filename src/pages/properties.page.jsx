import React, { Component } from 'react';
import HeaderPart from '../parts/header.part';
import itemDetails from '../json/itemDetails.json';
import TitlePart from '../parts/PageDetail/title.part';
import PropertiesImagePart from '../parts/PageDetail/propertiesImage.part';
import PropertiesDescriptionPart from '../parts/PageDetail/propertiesDescription.part';
import BookingFormPart from '../parts/PageDetail/bookingForm.part';
import CategoryPart from '../parts/category.part'
import TestimonialPart from '../parts/testimonial.part';
import FooterPart from '../parts/footer.part';

import '../assets/scss/style.scss';
import { Slide } from 'react-reveal';

class PropertiesPage extends Component {
  componentDidMount() {
    window.title = 'Properties Detail';
    window.scrollTo(0, 0);
  }

  render() {
    const breadcrumb = [
      { pageTitle: 'Home', pageHref: '/' },
      { pageTitle: 'House Details', pageHref: '' },
    ];

    return (
      <>
        <HeaderPart {...this.props} />
        <section className="container section-properties">
          <TitlePart
            name={itemDetails.name}
            city={itemDetails.city}
            country={itemDetails.country}
            breadcrumb={breadcrumb}
          />
          <PropertiesImagePart images = { itemDetails.imageUrls } />
          <section className="section-desc">
            <div className="row justify-content-center">
              <Slide top>
                <div className="col-lg-7 col-md-7 col-sm-12 pr-5 col-text-desc">
                  <PropertiesDescriptionPart description = { itemDetails.description } features = { itemDetails.features } />
                </div>
              </Slide>
              <Slide top>
                <div className="col-lg-5 col-md-6 col-sm-12 col-booking-form" style={{ marginTop: '50px' }}>
                  <BookingFormPart itemDetails = { itemDetails } />
                </div>
              </Slide>
            </div>
          </section>
          <CategoryPart data = { itemDetails.categories } />
          <TestimonialPart data = { itemDetails.testimonial } />
        </section>
        <FooterPart />
      </>
    );
  }
}

export default PropertiesPage;