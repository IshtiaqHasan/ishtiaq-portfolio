import React from 'react';
import jsdv from '../../assets/images/jsdev.jpg';

const Contact = () => {
    return (
        <section
            style={{
                background: `url(${jsdv})`
            }}
            className="p-20"
        >
            <div className='text-center'>
                <h3 className='text-xl text-primary font-bold'>Contact With Me</h3>
            </div>
            <div >
                <div className='text-center'>
                    <input type="text" placeholder="Email Address" className="input input-bordered  w-full max-w-xs mt-5 mb-2" />
                    <br />
                    <input type="text" placeholder="Subject" className="input input-bordered  w-full max-w-xs mb-2" />
                    <br />
                    <input type="text" placeholder="Your Message" className="input input-bordered input-lg w-full max-w-xs mb-4" />
                </div>
                <div className='text-center'>
                    <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary align-middle">Submit</button>
                </div>
            </div>

        </section>
    );
};

export default Contact;