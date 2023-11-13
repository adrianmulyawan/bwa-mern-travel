// ExamplePage.jsx
import React, { useState } from 'react';
import InputDateComponent from '../components/Form/InputDate/InputDate.component';

const ExamplePage = () => {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleChange = (e) => {
    console.log(e.target.value, '=> value dari handleChange');
    setValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value || null,
    }));
  };

  return (
    <>
      <div className="row align-items-center justify-content-center" style={{ height: '100vh' }}>
        <div className="col-auto">
          <InputDateComponent
            max={30}
            onChange={handleChange}
            name="value"
            value={value}
          />
        </div>
      </div>
    </>
  );
}

export default ExamplePage;
