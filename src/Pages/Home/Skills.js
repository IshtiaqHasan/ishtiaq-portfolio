import React from 'react';
import logo1 from '../../assets/icons/logo1.png';
import logo2 from '../../assets/icons/logo2.png';
import logo3 from '../../assets/icons/logo3.png';



const Skills = () => {
    return (
        <div className='container mx-auto px-20 '>
            <h1 className='text-4xl text-secondary font-bold mt-10 mb-10 text-left'>My Skills</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20'>
                <div class="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={logo1} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Responsive website with plain HTML ans CSS.</h2>
                        <p>I am able to develop responsive website using plain Html and CSS as well as with Bootstrap and Tailwind css. </p>
                        <div class="card-actions">
                            <button class="btn btn-xs">HTML5</button>
                            <button class="btn btn-xs">CSS3</button>
                            <button class="btn btn-xs">Bootstrap</button>
                            <button class="btn btn-xs">Tailwind CSS</button>
                        </div>
                    </div>
                </div>
                <div class="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={logo2} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">A Single Page Application Using React.</h2>
                        <p>As ReactJS is an open source JS library for building UI and used for SPA, I can develope a full functional and authenticated user friendly website using Firebase.</p>
                        <div class="card-actions">
                            <button class="btn btn-xs">JavaScript</button>
                            <button class="btn btn-xs">ReactJs</button>
                            <button class="btn btn-xs">ES6</button>
                            <button class="btn btn-xs">Firebase</button>
                        </div>
                    </div>
                </div>
                <div class="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={logo3} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">MERN stack web development</h2>
                        <p>Able to develop full stack web application using MongoDB, Express, React and Node with authorization features like JWT which is very important for payment method and user safety. </p>
                        <div class="card-actions">
                            <button class="btn btn-xs">MongoDB</button>
                            <button class="btn btn-xs">Express</button>
                            <button class="btn btn-xs">NodeJs</button>
                            <button class="btn btn-xs">JWT</button>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <button className='btn btn-primary btn-wide btn-lg mb-5 mt-5 text-center' >My Resume</button>
            </div>

        </div>
    );
};

export default Skills;