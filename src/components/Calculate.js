import React from 'react';

//import componsnts
import CalcForm from './CalcForm'

const Calculate = () => {
  return <section className='section'>
     <div className='container mx-auto'>
      {/* Text */}
      <div className='text-center'>
        <h2 className='section-title' data-aos='fade-up' data-aos-offset='400'>Check how much you can earn</h2>
        <p className='section-subtitle text-lg mb-16 max-w-[622px] mx-auto' 
        data-aos='fade-up' data-aos-offset='450'>
          Let's chech your hash rate to see how much you will earn today.</p>
      </div>

      {/* Form */}
      <div>
        <CalcForm/>
      </div>
     </div>
  </section>;
};

export default Calculate;
