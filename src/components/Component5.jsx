import React from 'react'

const Component5 = ({ leDernier, setHello }) => {

  const handleclick = () => {
    leDernier === 'coucou' ? setHello('salut') : setHello('coucou')
  }

  console.log(leDernier);

  return (
    <>
      <div>Component5</div>
      <button onClick={handleclick}>
        change au click
      </button>
      <h3>{leDernier}</h3>
    </>
  );
};

export default Component5