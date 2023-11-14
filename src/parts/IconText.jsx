import React from 'react';
import ButtonComponent from '../components/Button/button.component';
import '../assets/scss/style.scss';

const IconText = () => {
  return (
    <ButtonComponent className="brand-text-icon text-decoration-none" href="/" type="link">
      Stay<span className='text-gray-900' style={{ color: '#152C5B' }}>cation.</span>
    </ButtonComponent>
  );
}

export default IconText;
