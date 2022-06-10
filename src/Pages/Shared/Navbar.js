import React from 'react';
import { Link } from 'react-router-dom';
import doctor from '../../assets/images/doctor.png'

const Navbar = () => {
    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <Link to="/" class="btn btn-ghost normal-case text-orange-500 text-xl">Ishtiaq Hasan</Link>
                <label tabindex="0" class="btn btn-ghost btn-circle avatar hidden sm:block">
                    <div class="w-10 rounded-full">
                        <img src={doctor} />
                    </div>
                </label>
            </div>

            <div class="navbar-end">
                <div class="dropdown">
                    <label tabindex="0" class="btn  btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="skills">Skills</Link></li>
                        <li><Link to="projects">Projects</Link></li>
                        <li><Link to="about">About Me</Link></li>
                    </ul>
                </div>
                <div class="navbar-end hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        <li><Link to="/" className='text-orange-500'>Home</Link></li>
                        <li><Link to="skills" className='text-orange-500'>Skills</Link></li>
                        <li><Link to="projects" className='text-orange-500'>Projects</Link></li>
                        <li><Link to="about" className='text-orange-500'>About</Link></li>
                    </ul>
                </div>
                <Link to="contact" class="btn btn-outline btn-sm btn-secondary rounded-full">Hire Me</Link>
            </div>
        </div>
    );
};

export default Navbar;