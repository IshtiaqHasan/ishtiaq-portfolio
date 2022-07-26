import React, { useRef } from 'react';
import git from '../../assets/contact/git.png';
import linkedin from '../../assets/contact/linkedin.png';
import mail from '../../assets/contact/mail.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_th5ej4a',
            'template_xqxqqcc',
            form.current,
            'WIY1qfFCl64BR4mnW',
            e.target
        )
            .then((result) => {
                console.log(result.text);
                alert('Thank you for reaching out to me. I will reply to you very soon')
            }, (error) => {
                console.log(error.text);
                alert("Sorry! can't send your message")
            });
        e.target.reset()
    };
    return (
        <div class="hero min-h-screen">
            <div class=" hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                    <h1 class="text-4xl text-orange-500 font-bold mb-2 text-left mx-5">Contact With Me</h1>
                    <p className='mx-5 '> <span className='text-secondary font-bold'>Email:</span> <span className='font-bold'>ishtiaqhasan1992@gmail.com</span> </p>
                    <p className='mx-5'><span className='text-secondary font-bold'>Phone:</span> <span className='font-bold'>+8801740270747</span></p>
                    <div className='flex mt-5'>
                        <a href="https://github.com/IshtiaqHasan?tab=repositories" target="_blank"><img className='mx-5' src={git} alt="" /></a>
                        <a href="https://www.linkedin.com/in/md-ishtiaq-hasan-435a07193/" target="_blank"><img className='mx-5' src={linkedin} alt="" /></a>
                        <a href="mailto:ishtiaqhasan1992@gmail.com" target="_blank"><img className='mx-5' src={mail} alt="" /></a>
                    </div>

                </div>
                <form ref={form} onSubmit={sendEmail} class="card mr-24 shadow-2xl bg-base-100">
                    <div class="card-body">
                        <div className='text-center mx-10'>
                            <input type="text" name='email' placeholder="Email Address" className="input input-bordered  w-full max-w-xs mt-5 mb-2" />
                            <br />
                            <input type="text" name='subject' placeholder="Subject" className="input input-bordered  w-full max-w-xs mb-2" />
                            <br />
                            <textarea type="text" name='message' placeholder="Your Message" className="input input-bordered input-lg w-full max-w-xs mb-4" />
                        </div>

                        <div class="form-control mt-6">
                            <button class="btn btn-secondary">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
            <div>

            </div>
        </div >

    );
};

export default Contact;