import React from 'react';
import { Link } from 'react-router-dom';
import doctor from '../../assets/images/doctor.jpeg';

const Banner = () => {
    return (
        <div class="hero min-h-screen ">
            <div class="hero-content flex-col  lg:flex-row-reverse">
                <img src={doctor} class="max-w-sm  lg:mx-20 h-80" />
                <div className='flex-1'>
                    <h1 className='text-6xl text-orange-500 font-bold text-left mt-5'>Hi, I am Ishtiaq</h1>
                    <h2 className='text-4xl text-orange-500 font-bold mt-5'> a front end <span className='text-orange-600'>web developer</span>. <br /> i build <span className='text-orange-600'> websites.</span></h2>
                    <Link to='projects' className='btn btn-outline btn-lg btn-secondary rounded-full mt-5' >see my work</Link>
                    <a href='https://drive.google.com/file/d/1-3wEnPGQnWjez-xXik_ifs67mVxeJssO/view?usp=sharing' target="_blank" className='btn btn-outline btn-lg btn-secondary rounded-full mt-5 mx-2' >My Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;




