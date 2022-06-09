import React from 'react';
import doctor from '../../assets/images/doctor.png';
import code from '../../assets/images/code.png';

const Banner = () => {
    return (
        <div
            style={{
                background: `url(${code})`
            }}
            className='flex justify-center  mt-20'>

            <div className='flex-1 pl-10'>
                <h1 className='text-6xl text-secondary font-bold text-left mt-5'>Hi, I am Ishtiaq Hasan</h1>
                <h2 className='text-4xl text-secondary font-bold mt-5'>i am a front end <span className='text-green-500'>web developer</span>. i build <span className='text-green-500'> websites</span></h2>
                <button className='btn btn-outline btn-lg btn-primary rounded-full mt-5' >see my work</button>
            </div>
            <div className='flex-1'>
                <img className='mt-[-120px]' src={doctor} alt="" />
            </div>

        </div>
    );
};

export default Banner;