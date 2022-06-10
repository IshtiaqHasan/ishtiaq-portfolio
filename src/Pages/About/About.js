import React from 'react';
import doctor from '../../assets/images/doctor.jpeg';
import git from '../../assets/contact/git.png';
import linkedin from '../../assets/contact/linkedin.png';
import mail from '../../assets/contact/mail.png';
const About = () => {
    return (
        <div >
            <h1 className='text-4xl text-orange-500 font-bold mt-20 mb-20 text-left mx-40'>About me</h1>

            <div class="card w-100 mx-40 bg-base-100 shadow-xl">
                <div class="avatar">
                    <div class="w-24 mx-5 mt-2 rounded-full  ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={doctor} />
                    </div>
                </div>
                <div class="card-body">
                    <h2 class="card-title text-secondary text-3xl">Hello, I am Ishtiaq Hasan</h2>
                    <p>My object is to work with the great responsibility of designing &
                        developing web applications that continue to solve user problems as a
                        passionate developer who has worked with numerous front-end
                        technologies.
                    </p>
                    <h1 className='text-secondary text-xl font-bold'>MY SKILLS:</h1>
                    <ul>
                        <li> <span className='text-secondary font-bold'>Comfortable:</span> JavaScript, ES6, React.Js, HTML, CSS, Bootstrap, MongoDB, Git, Node.js,
                            Express.js ,Tailwind Css, MS office.</li>
                        <li> <span className='text-secondary font-bold'>Familiar:</span> Daisy UI, React Hook, React-query, JWT, Stripe.</li>
                        <li><span className='text-secondary font-bold'>Tools:</span> VS Code, Firebase, Github, Netlify, Heroku, Figma.</li>
                    </ul>
                    <h1 className='text-secondary text-xl font-bold'>EDUCATION:</h1>
                    <p className='font-bold'>Independent University, Bangladesh</p>
                    <p>B.Sc. in Electrical & Electronic Engineering.</p>
                    <p>(2013-2018)</p>
                    <h1 className='text-secondary text-xl font-bold'>PROFESSIONAL COURSE:</h1>
                    <p className='font-bold'>Complete Web Development Course with Jhankar Mahbub.</p>
                    <p>Programming Hero.</p>
                    <p>Level-4, 34, Awal Center, Banani, Dhaka.</p>
                    <h1 className='text-secondary text-xl font-bold'>FIND ME IN:</h1>
                    <div className='flex'>
                        <div class="grid-flow-col flex  mb-3 gap-4 md:place-self-center md:justify-self-end">
                            <a href='https://twitter.com/HasanAyon5' target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                            </a>

                            <a href='https://www.facebook.com/hasan.ayon/' target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    );
};

export default About;