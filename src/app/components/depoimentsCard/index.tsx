import React from 'react';
import Image, { StaticImageData } from 'next/image';

type Depoiment = {
  image: StaticImageData;
};

type DepoimentCardProps = {
  depoiment: Depoiment;
};

const DepoimentCard: React.FC<DepoimentCardProps> = ({ depoiment }) => {
  return (
    <div className="depoiment-card">
      <Image src={depoiment.image} alt="Depoimento" className="depoiment-image" />
    </div>
  );
};

export default DepoimentCard;
