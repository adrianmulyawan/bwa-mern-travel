import React from 'react';
import { Fade } from 'react-reveal';

const MainContent = (props) => {
  const { data,current } = props
  return (
    <Fade>{
      data[current] && data[current].content}
    </Fade>
  );
}

export default MainContent;
