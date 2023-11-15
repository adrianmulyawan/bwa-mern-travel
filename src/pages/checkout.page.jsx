import React, { Component } from 'react'
import { Fade } from 'react-reveal';

import HeaderPart from '../parts/header.part'
import ButtonComponent from '../components/Button/button.component';

import StepperComponent from '../components/Stepper/stepper.component';
import Numbering from '../components/Stepper/Numbering/numbering';
import Meta from '../components/Stepper/Meta/meta'
import MainContent from '../components/Stepper/MainContent/mainContent';
import Controller from '../components/Stepper/Controller/controller';

import BookingInformationPart from '../parts/Checkout/BookingInformation.part';
import PaymentPart from '../parts/Checkout/Payment.part';
import CompletedPart from '../parts/Checkout/Completed.part';


export default class CheckoutPage extends Component {
  state = {
    data: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      proofPayment: "",
      bankName: "",
      bankHolder: "",
    },
  };

  onChange = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
      },
    });
  };

  componentDidMount() {
    window.scroll(0, 0);
    document.title = "Staycation | Checkout";
  }

  _Submit = (nextStep) => {
    const { data } = this.state;
    const { checkout } = this.props;

    const payload = new FormData();
    payload.append("firstName", data.firstName);
    payload.append("lastName", data.lastName);
    payload.append("email", data.email);
    payload.append("phoneNumber", data.phone);
    payload.append("idItem", checkout._id);
    payload.append("duration", checkout.duration);
    payload.append("bookingStartDate", checkout.date.startDate);
    payload.append("bookingEndDate", checkout.date.endDate);
    payload.append("accountHolder", data.bankHolder);
    payload.append("bankFrom", data.bankName);
    payload.append("image", data.proofPayment[0]);
    // payload.append("bankId", checkout.bankId);

    this.props.submitBooking(payload).then(() => {
      nextStep();
    });
  };

  render() {
    const { data } = this.state;
    const { checkout, page } = this.props;
    console.log(page, data);

    if (!checkout)
      return (
        <div className="container">
          <div
            className="row align-items-center justify-content-center text-center"
            style={{ height: "100vh" }}
          >
            <div className="col-8">
              <h3 
                className='text-center' 
                style={{ fontSize: '36px', fontWeight: '600', color: '#152C5B', marginBottom: '4px', fontFamily: 'Poppins' }}
              >
                Please Choose Your Properties!
              </h3>
              <div>
                <ButtonComponent
                  className="btn mt-5"
                  type="button"
                  onClick={() => this.props.history.goBack()}
                  isPrimary
                >
                  Back
                </ButtonComponent>
              </div>
            </div>
          </div>
        </div>
      );
    
    const steps = {
      bookingInformation: {
        title: "Booking Information",
        description: "Please fill up the blank fields below",
        content: (
          <BookingInformationPart
            data={data}
            checkout={checkout}
            ItemDetails={page[checkout._id]}
            onChange={this.onChange}
          />
        ),
      },
      payment: {
        title: "Payment",
        description: "Kindly follow the instructions below",
        content: (
          <PaymentPart
            data={data}
            ItemDetails={page[checkout._id]}
            checkout={checkout}
            onChange={this.onChange}
          />
        ),
      },
      completed: {
        title: "Yay! Completed",
        description: null,
        content: <CompletedPart />,
      },
    };

    return (
      <>
        <HeaderPart isCentered />

        <StepperComponent steps={steps} initialStep="bookingInformation">
          {(prevStep, nextStep, CurrentStep, steps) => (
            <>
              <Numbering
                data={steps}
                current={CurrentStep}
                style={{ marginBottom: 50 }}
              />

              <Meta data={steps} current={CurrentStep} />

              <MainContent data={steps} current={CurrentStep} />

              {CurrentStep === "bookingInformation" && (
                <Controller>
                  {data.firstName !== "" &&
                    data.lastName !== "" &&
                    data.email !== "" &&
                    data.phone !== "" && (
                      <Fade>
                        <ButtonComponent
                          className="btn mb-3"
                          type="button"
                          isBlock
                          isPrimary
                          hasShadow
                          onClick={nextStep}
                        >
                          Continue to Book
                        </ButtonComponent>
                      </Fade>
                    )}
                  <ButtonComponent
                    className="btn"
                    type="link"
                    isBlock
                    isLight
                    href={`/properties/${checkout._id}`}
                  >
                    Cancel
                  </ButtonComponent>
                </Controller>
              )}

              {CurrentStep === "payment" && (
                <Controller>
                  {data.proofPayment !== "" &&
                    data.bankName !== "" &&
                    data.bankHolder !== "" && (
                      <Fade>
                        <ButtonComponent
                          className="btn mb-3"
                          type="button"
                          isBlock
                          isPrimary
                          hasShadow
                          onClick={() => this._Submit(nextStep)}
                        >
                          Continue to Book
                        </ButtonComponent>
                      </Fade>
                    )}
                  <ButtonComponent
                    className="btn"
                    type="button"
                    isBlock
                    isLight
                    onClick={prevStep}
                  >
                    Cancel
                  </ButtonComponent>
                </Controller>
              )}

              {CurrentStep === "completed" && (
                <Controller>
                  <ButtonComponent
                    className="btn"
                    type="link"
                    isBlock
                    isPrimary
                    hasShadow
                    href="/"
                  >
                    Back to Home
                  </ButtonComponent>
                </Controller>
              )}
            </>
          )}
        </StepperComponent>
      </>
    )
  }
}
