// MapView.js
'use client'
import Image from 'next/image';
import React from 'react';

const MapView = ({ location }:any) => {
  // Mock map component, you can replace this with a real map integration
  return (
    <div className="bg-gray-300 p-4 rounded-lg">
      <p className="font-semibold">Tourist Location</p>
      <Image src={location} alt='map' width={600} height={600} quality={100}/>
      {/* Add your real map integration here */}
    </div>
  );
};

export default MapView;
