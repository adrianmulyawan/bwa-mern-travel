import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";

// import { screen } from "@testing-library/dom";
import InputDateComponent from "./InputDate.component";

class TestInput extends React.Component {
  state = {
    value: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <InputDateComponent
        max={30}
        onChange={this.handleChange}
        name="value"
        value={this.state.value}
      />
    );
  }
}

const setup = () => {
  const { container } = render(<TestInput />);
  const wrapper = container.querySelector(`.input-date`);
  const input = container.querySelector(`input.form-control`);

  return {
    container,
    wrapper,
    input,
  };
};

test("Should have wrapper with className .form-control", () => {
  const { wrapper } = setup();
  expect(wrapper).toBeInTheDocument();
});

test("Should have tag <input> and has classname .form-control", () => {
  const { input } = setup();
  expect(input).toBeInTheDocument();
});

// test("Should show date picker when click input field", async () => {
//   const { container, input } = setup();

//   fireEvent.click(input, { button: 1 });

//   // Menunggu elemen muncul di DOM
//   await waitFor(() => {
//     const datePickerWrapper = container.querySelector(".date-range-wrapper");
//     expect(datePickerWrapper).toBeInTheDocument();
//   });
// });

// test("Should show date picker when click input field", () => {
//   const { container, input } = setup();

//   // screen.debug();
//   fireEvent.click(input, { button: 1 });
//   // screen.debug();
//   const datePickerWrapper = container.querySelector(`.date-range-wrapper`);

//   expect(datePickerWrapper).toBeInTheDocument();
// });