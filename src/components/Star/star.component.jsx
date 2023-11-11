import React from 'react';
import './star.scss';
import propTypes from 'prop-types';

const StarComponent = (props) => {
  const { className, value, height, width, spacing } = props;

  const decimals = Number(value) % 1;

  const star = [];

  let leftPos = 0;
  for (let i = 0; i < 5 && i < Math.floor(value); i++) {
    leftPos = leftPos + width;
    star.push(
      <div
        className='star'
        key={`star-${i}`}
        style={{ left: i * width, width: width, height: height, marginRight: spacing }}
      ></div>
    );
  }

  if (decimals > 0 && value <= 5) {
    star.push(
      <div
        className='star'
        key={`starWithDeceimal`}
        style={{ left: leftPos, height: height, width: decimals * width - spacing }}
      ></div>
    );
  }

  const starPlaceholder = [];
  for (let i = 0; i < 5; i++) {
    starPlaceholder.push(
      <div
        className='star placeholder'
        key={`starPlaceholder-${i}`}
        style={{ left: i * width, width: width, height: height, marginRight: spacing }}
      ></div>
    );
  }

  return (
    <div className={['stars', className].join(' ')} style={{ height: height }}>
      {starPlaceholder}
      {star}
    </div>
  );
};

StarComponent.propTypes = {
  className: propTypes.string,
  value: propTypes.number,
  width: propTypes.number,
  height: propTypes.number,
  spacing: propTypes.number,
};

export default StarComponent;
