import React from 'react';
import craftsman from '../../assets/projects/craftsman.JPG';
import independent from '../../assets/projects/independent.JPG';
import stock from '../../assets/projects/stock.jpg'
const Projects = () => {
    return (
        <div >
            <h1 className='text-4xl text-orange-500 font-bold mt-20 mb-20 text-left'>EXPLORE MY PROJECTS</h1>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-20'>
                <div class="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={craftsman} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Full Stack tools manufacturer website.</h2>
                        <p>A Full Stack tools manufacturer website where user can purchase different types of tools. Authenticated user can order any product available in the website. User can see his order details in dashboard. Admin can add or remove products. Admin have the access to make others admin.
                        </p>
                        <div>
                            <a href='https://craftsman-solution.web.app/' target="_blank" class="btn btn-sm btn-secondary rounded-full mx-2">Live Site</a>
                            <a href='https://github.com/IshtiaqHasan/craftsman-solution-client' target="_blank" class="btn btn-sm btn-secondary rounded-full mx-2">Client Side</a>
                            <a href='https://github.com/IshtiaqHasan/craftsman-solution-server' target="_blank" class="btn btn-sm btn-secondary rounded-full">Server Side</a>
                        </div>
                        <h1 className='text-secondary font-bold'>Tools Used For This Website: </h1>
                        <div class="card-actions">
                            <button class="btn btn-xs">ReactJs</button>
                            <button class="btn btn-xs">NodeJs</button>
                            <button class="btn btn-xs">JavaScript</button>
                            <button class="btn btn-xs">MongoDB</button>
                            <button class="btn btn-xs">Express</button>
                            <button class="btn btn-xs">Tailwind CSS</button>
                            <button class="btn btn-xs">Daisy UI</button>
                            <button class="btn btn-xs">Firebase</button>

                        </div>
                    </div>
                </div>
                <div class="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={independent} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title"> Full Stack project where user can maintain the stock.</h2>
                        <p>An website of book inventory. Home and inventory section's button goes to a secured section to in which user can easily manage
                            inventory. While login manage books section opens and user can delete items.
                        </p>
                        <div>
                            <a href='https://book-stock-98acf.web.app/' target="_blank" class="btn btn-sm btn-secondary rounded-full mx-2">Live Site</a>
                            <a href='https://github.com/IshtiaqHasan/book-stock-client' target="_blank" class="btn btn-sm btn-secondary rounded-full mx-2">Client Side</a>
                            <a href='https://github.com/IshtiaqHasan/book-stock-server' target="_blank" class="btn btn-sm btn-secondary rounded-full">Server Side</a>
                        </div>
                        <h1 className='text-secondary font-bold'>Tools Used For This Website: </h1>
                        <div class="card-actions">
                            <button class="btn btn-xs">ReactJs</button>
                            <button class="btn btn-xs">NodeJs</button>
                            <button class="btn btn-xs">JavaScript</button>
                            <button class="btn btn-xs">MongoDB</button>
                            <button class="btn btn-xs">Express</button>
                            <button class="btn btn-xs">Bootstrap</button>
                            <button class="btn btn-xs">Firebase</button>

                        </div>
                    </div>
                </div>
                <div class="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={stock} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">An independent service as Quran-teacher.</h2>
                        <p>This website is a about Quran Learning Course under a teacher.Several Courses offer to make suitable for students.User can easily do registration and login to continue in course.
                        </p>
                        <div>
                            <a href='https://learn-quran-3f0fa.web.app/' target="_blank" class="btn btn-sm btn-secondary rounded-full mx-2">Live Site</a>
                            <a href='https://github.com/IshtiaqHasan/independent-service' target="_blank" class="btn btn-sm btn-secondary rounded-full mx-2">Code Link</a>

                        </div>
                        <h1 className='text-secondary font-bold'>Tools Used For This Website: </h1>
                        <div class="card-actions">
                            <button class="btn btn-xs">ReactJs</button>
                            <button class="btn btn-xs">React-Router</button>
                            <button class="btn btn-xs">JavaScript</button>
                            <button class="btn btn-xs">Bootstrap</button>
                            <button class="btn btn-xs">Firebase</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Projects;