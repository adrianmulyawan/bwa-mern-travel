import React, { Component } from 'react'
// import { withRouter } from 'react-router-dom';

import propTypes from 'prop-types';

import ButtonComponent from '../../components/Button/button.component';
import InputDateComponent from '../../components/Form/InputDate/InputDate.component';
import InputNumberComponent from '../../components/Form/InputNumber/InputNumber.component';

import '../../assets/scss/style.scss';

export default class BookingFormPart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        duration: 1,
        date: {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection",
        },
      },
    };
  }

  updateData = (e) => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { data } = this.state;

    if (prevState.data.date !== data.date) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(data.date.endDate);
      const countDuration = new Date(endDate - startDate).getDate();
      this.setState({
        data: {
          ...this.state.data,
          duration: countDuration,
        },
      });
    }

    if (prevState.data.duration !== data.duration) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(
        startDate.setDate(startDate.getDate() + +data.duration - 1)
      );
      this.setState({
        ...this.state,
        data: {
          ...this.state.data,
          date: {
            ...this.state.data.date,
            endDate: endDate,
          },
        },
      });
    }
  }

  startBooking = () => {
    const { data } = this.state;
    this.props.startBooking({
      _id: this.props.itemDetails._id,
      duration: data.duration,
      date: {
        startDate: data.date.startDate,
        endDate: data.date.endDate,
      },
    });
    this.props.history.push("/checkout");
  };

  render() {
    const { data } = this.state;
    const { itemDetails } = this.props;

    return (
      <div className="card bordered" style={{ padding: "60px 80px" }}>
        <h4 className="mb-3 text-booking">Start Booking</h4>
        <h5 className="h2 text-teal mb-4">
          ${itemDetails.price}{" "}
          <span className="text-gray-500 font-weight-light">
            per {itemDetails.unit}
          </span>
        </h5>

        <label htmlFor="duration">How long you will stay?</label>
        <InputNumberComponent
          max={30}
          suffix=" night"
          onChange={this.updateData}
          name="duration"
          value={data.duration}
        />
        <label htmlFor="date">Pick a date</label>
        <InputDateComponent onChange={this.updateData} name="date" value={data.date} />

        <h6
          className="text-gray-500 font-weight-light total-pay"
          style={{ marginBottom: 40 }}
        >
          You will pay{" "}
          <span className="text-gray-900 total-price">
            ${itemDetails.price * data.duration} USD
          </span>{" "}
          per{" "}
          <span className="text-gray-900 total-night">
            {data.duration} {data.duration === 1 ? itemDetails.unit : `nights`}
          </span>
        </h6>

        <ButtonComponent
          className="btn"
          hasShadow
          isPrimary
          isBlock
          onClick={this.startBooking}
        >
          Continue to Book
        </ButtonComponent>
      </div>
    );
  }
}

BookingFormPart.propTypes = {
  itemDetails: propTypes.object,
  startBooking: propTypes.func
}

// export default withRouter(BookingFormPart);