import React from 'react';

//import

const AccountBtns = () => {
  return <div className='flex items-center font-medium'>
    {/* Link btns */}
    <a classname='hover:text-blue transition' href='#'>Login</a>
    {/*Separator*/}
    <span className='mx-6 text-white/20 font-thin'>|</span>
    {/*Register*/}
    <button className='btn h-[52px] text-base px-8'>Register</button>
  </div>;
};

export default AccountBtns;
