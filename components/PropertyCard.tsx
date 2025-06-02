import React from 'react';
import Image from 'next/image';

interface PropertyCardProps {
  name: string;
  price: number;
  rating: number;
  imageUrl: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ name, price, rating, imageUrl }) => {
  return (
    <div className="border rounded-md overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer max-w-xs">
      <div className="relative w-full h-48">
        <Image src={imageUrl} alt={name} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{name}</h3>
        <p className="text-gray-700 mb-1">${price} / night</p>
        <p className="text-yellow-500 font-semibold">⭐ {rating}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
