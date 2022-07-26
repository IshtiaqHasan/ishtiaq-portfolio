import React from 'react';
import './Banner.css';
import Typed from "react-typed";
import { Link } from 'react-router-dom';
import doctor from '../../assets/images/doctor.jpeg';

const Banner = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="avatar ">
                    <div class="w-96 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={doctor} />
                    </div>
                </div>
                <div className='flex-1'>
                    <div className=''>
                        <div className='static-txt'>
                            <h1 className='text-6xl text-orange-500 font-bold text-left mt-5'>Hi, <br /> I am Ishtiaq,</h1>
                        </div>

                        <div className='text-4xl text-orange-500 font-bold mt-5 wrapper animated-typing'>
                            <Typed
                                strings={[
                                    "I'm a Front-End Developer",
                                    "I'm a React.js Developer",
                                    "I'm a JavaScript Developer",
                                ]}
                                typeSpeed={50}
                                backSpeed={50}
                                loop
                            />
                        </div>
                    </div>



                    <p class="py-6">I am able to develop responsive website using plain Html and CSS as well as with Bootstrap and Tailwind css. <br /> By using React Js framework I can develope a full functional and authenticated user friendly website. <br /> Able to develop full stack web application using MongoDB, Express, NodeJs.</p>
                    <Link to='projects' className='btn btn-outline btn-lg btn-secondary rounded-full mt-5' >see my work</Link>
                    <a href='https://drive.google.com/file/d/1-3wEnPGQnWjez-xXik_ifs67mVxeJssO/view?usp=sharing' target="_blank" className='btn btn-outline btn-lg btn-secondary rounded-full mt-5 mx-2' >My Resume</a>
                </div>
            </div>
        </div >
    );
};

export default Banner;




