import React from 'react'

const Destination = ({ detailsAddress }) => {
  console.log(detailsAddress);
  return (
    <div>
      <h3>le pays est {detailsAddress.country}</h3>
      <h3>la ville est {detailsAddress.city} </h3>
      <h3>la rue est {detailsAddress.street} </h3>
    </div>
  );
};

export default Destination