import React from 'react';
import { ImExit } from 'react-icons/im';

export default () => {
  return (
    <nav className='flex items-center justify-center px-4 w-full h-16 bg-[#003049] text-white'>
      <div className='w-5/12 text-2xl'>Test yech va tez yech</div>
      <div className='w-5/12 flex gap-5 justify-end items-center'>
        <span className='text-2xl'>Azamat</span>
        <span className='cursor-pointer'>
          <ImExit size={30} />
        </span>
      </div>
    </nav>
  );
};
