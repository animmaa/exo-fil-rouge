import React from 'react';
import Component3 from './Component3';

const Component2 = ({ coucou, setHello }) => {
  return (
    <>
      <div>Component2</div>
      <Component3 newPassage={coucou} setHello={setHello} />
    </>
  );
};

export default Component2;
