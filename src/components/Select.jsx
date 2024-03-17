import React from 'react'


import BoraBora from '../assets/img.png';
import BoraBora2 from '../assets/b1.jpg';
import Maldives from '../assets/b2.jpg';
import Maldives2 from '../assets/b3.jpg';
import Keywest from '../assets/b4.jpg';

import SelectsCard from './SelectCard'
const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>

    <SelectsCard bg={BoraBora} text='Bora Bora' />
    <SelectsCard bg={BoraBora2} text='Maldives' />
    <SelectsCard bg={Maldives} text='Antigua' />
    <SelectsCard bg={Maldives2} text='Cozumel' />
 
    <SelectsCard bg={Keywest} text='Key West' />
    
        
    </div>
  )
}

export default Selects