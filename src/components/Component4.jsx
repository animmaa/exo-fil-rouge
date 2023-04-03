import React from 'react';
import Component5 from './Component5';

const Component4 = ({ unDePlus, setHello }) => {
  return (
    <>
      <div>Component4</div>
      <Component5 leDernier={unDePlus} setHello={setHello} />
    </>
  );
};

export default Component4;
