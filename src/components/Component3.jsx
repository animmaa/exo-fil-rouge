import React from 'react';
import Component4 from './Component4';

const Component3 = ({ newPassage, setHello }) => {
  return (
    <>
      <div>Component3</div>
      <Component4 unDePlus={newPassage} setHello={setHello} />
    </>
  );
};

export default Component3;
