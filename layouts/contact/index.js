import React from 'react'
import { useForm } from '@formspree/react';
import Image from 'next/image';
export default function Contact() {
    const [state, handleSubmit] = useForm("xvolwkgo");
    let email = React.useRef(null);
    let name = React.useRef(null);
    let subject = React.useRef(null);
    let message = React.useRef(null);
    React.useEffect(() => {
        email.current.value = '';
        message.current.value = '';
        name.current.value = '';
        subject.current.value = '';
    }, [state.succeeded])
    return (
        <div className='w-full | grid place-items-center | p-8 | relative overflow-hidden'>
            <div className='absolute bottom-[-10em] right-[-10em] rotate-20 -z-20'>
                <Image src={'/static/planet.png'} alt='Planet illustration'
                    width={500} height={500}></Image>
            </div>

            <div className='bg-[#F7F9FA] p-4 rounded-md | w-full max-w-[500px]'>
                <h4 className='text-2xl text-black text-center '>
                    Get In Touch
                </h4>
                <form onSubmit={handleSubmit} className='p-4 rounded-md mx-auto | grid gap-4 |  md:max-w-[600px]'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="name" className='text-muted text-sm'>Name</label>
                        <input name='name' ref={name} type="text" placeholder='Enter your email' className='px-4 py-2 rounded-md' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="email" className='text-muted text-sm'>Email</label>
                        <input type="email" ref={email} name='email' placeholder='Enter your name' className='px-4 py-2 rounded-md' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="subject" className='text-muted text-sm'>Subject</label>
                        <input type="text" name='subject' ref={subject} placeholder='Enter your subject' className='px-4 py-2 rounded-md' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="message" className='text-muted text-sm'>Message</label>
                        <textarea type="text" name='message' ref={message} placeholder='Enter your message' className='px-4 py-2 rounded-md' />
                    </div>
                    <button type='submit' className='btn w-full bg-primary text-white'>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}
