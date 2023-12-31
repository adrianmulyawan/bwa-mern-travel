import React from 'react';
import { Fade } from 'react-reveal';

const Meta = (props) => {
  const { data, current } = props;

  return (
    <Fade delay={300}>
      <div className="text-center" style={{ marginBottom: 30 }}>
        <h1 className="h2">{data[current] && data[current].title}</h1>
        <p className="lead text-gray-500" style={{ fontSize: 1.125 }}>
          {data[current] && data[current].description}
        </p>
      </div>
    </Fade>
  );
}

export default Meta;
