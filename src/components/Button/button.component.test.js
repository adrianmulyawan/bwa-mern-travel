import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';
import ButtonComponent from "./button.component";

test('Should not allowed click button if isDisabled is present!', () => {
  const { container } = render(<ButtonComponent isDisabled></ButtonComponent>)

  expect(container.querySelector('span.disabled')).toBeInTheDocument()
  // expect(container.getByRole('button')).toHaveClass('disabled');
});

test('Should render loading/spinner', () => {
  const { container, getByText } = render(<ButtonComponent isLoading></ButtonComponent>)

  expect(getByText(/loading/i)).toBeInTheDocument()

  expect(container.querySelector('span')).toBeInTheDocument()
});

test('Should render <a> tag', () => {
  const { container } = render(<ButtonComponent type="link" isExternal></ButtonComponent>)

  expect(container.querySelector('a')).toBeInTheDocument()
});

test('Should render <Link> component', () => {
  const { container } = render(
    <Router>
      <ButtonComponent href="" type="link"></ButtonComponent>
    </Router>
  )

  expect(container.querySelector('a')).toBeInTheDocument()
});
