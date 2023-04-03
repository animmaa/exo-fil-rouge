import React, { useState } from 'react';
import Component2 from './Component2';

const Component1 = () => {
  const [hello, setHello] = useState('coucou');
  return (
    <>
      <div>Component1</div>
      <Component2 coucou={hello} setHello={setHello} />
    </>
  );
};

export default Component1;
