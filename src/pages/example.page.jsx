import React, { Component } from 'react'
import InputDateComponent from '../components/Form/InputDate/InputDate.component';

export default class ExamplePage extends Component {
  state = {
    value: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection"
    }
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="row align-items-center justify-content-center" style={{ height: '100vh' }}>
        <div className="col-4">
          {/* Menggunakan InputDateComponent */}
          <InputDateComponent onChange={ this.handleChange } name="value" value={ this.state.value } />
        </div>
      </div>
    )
  }
}
