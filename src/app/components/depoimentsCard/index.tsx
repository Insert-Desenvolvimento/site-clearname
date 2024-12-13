import React from 'react';

const DepoimentCard = ({ depoiment }: { depoiment: { image: string } }) => {
  const { image } = depoiment;
  return (
    <div className="depoiment-card">
      <img src={image} alt="Depoimento" className="depoiment-image" />
    </div>
  );
};

export default DepoimentCard;
