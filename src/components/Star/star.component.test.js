import React from "react";
import {render} from '@testing-library/react';
import StarComponent from "./star.component";

test("Should have props [value, height, width, and spacing]", () => {
  const height = 40;
  const width = 40;
  const spacing = 4

  const { container } = render(<StarComponent value={4.4} width={ width} height={ height } spacing={ spacing } />);

  const starYellow = "div.stars div.star:not(.placeholder)";

  expect(container.querySelector("div.stars")).toBeInTheDocument();
  expect(container.querySelector("div.stars")).toHaveAttribute("style", expect.stringContaining(`height: ${height}px`));
  expect(container.querySelector(starYellow)).toBeInTheDocument();
  expect(container.querySelector(starYellow)).toHaveAttribute("style", expect.stringContaining(`width: ${width}px`));
  expect(container.querySelector(starYellow)).toHaveAttribute("style", expect.stringContaining(`height: ${height}px`));
  expect(container.querySelector(starYellow)).toHaveAttribute("style", expect.stringContaining(`margin-right: ${spacing}px`));
});