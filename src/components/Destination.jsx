import React from 'react';

import BoraBora from '../assets/img.png';
import BoraBora2 from '../assets/b1.jpg';
import Maldives from '../assets/b2.jpg';
import Maldives2 from '../assets/b3.jpg';
import Keywest from '../assets/b4.jpg';

const Destinations = () => {
 

  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 text-center">
      <h2>Dream Destinations</h2>
      <p className='py-4'>Explore some of the most beautiful places in the world.</p>
      <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
        <img src={BoraBora} alt="/" className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' />
        <img src={BoraBora2} alt="/" className='w-full h-full object-cover'/>
        <img src={Maldives} alt="/" className='w-full h-full object-cover'/>
        <img src={Maldives2} alt="/" className='w-full h-full object-cover'/>
        <img src={Keywest} alt="/" className='w-full h-full object-cover'/>
      </div>
    </div>
  );
};

export default Destinations;
