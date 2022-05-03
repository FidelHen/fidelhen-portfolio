import React from 'react'
import Image from 'next/image'
export default function Hero() {
    return (
        <div className='w-full md:w-[80%] lg:w-[70%] mx-auto | p-4 md:mt-12'>
            <div className='grid grid-cols-1 gap-8 | md:grid-cols-2 '>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-3xl leading-relaxed font-bold | md:text-5xl md:leading-[3.7rem]'>
                        <span className='text-secondary'>Solution</span>
                        <br /> To Problems.
                    </h1>
                    <p className='text-black leading-relaxed'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem praesentium natus laudantium molestiae. Culpa cumque, officiis rerum porro laboriosam dolore.</p>
                    <div className='flex gap-4 mt-4'>
                        <a href='https://github.com/FidelHen' rel='noreferrer' target={'_blank'} className='btn bg-black text-white'>
                            Contact Me
                        </a>
                        {/* resume download link here */}
                        <a href='https://fidel-portfolio-pawrvxnz9-riley1101.vercel.app/static/space_explore_artwork.png' download className='flex gap-2 items-center justify-center btn bg-white border-black border-2 text-black'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.90156 10.3281C7.91326 10.3431 7.92819 10.3551 7.94525 10.3635C7.96231 10.3718 7.98103 10.3761 8 10.3761C8.01897 10.3761 8.03769 10.3718 8.05475 10.3635C8.0718 10.3551 8.08674 10.3431 8.09844 10.3281L9.84844 8.11406C9.9125 8.03281 9.85469 7.9125 9.75 7.9125H8.59219V2.625C8.59219 2.55625 8.53594 2.5 8.46719 2.5H7.52969C7.46094 2.5 7.40469 2.55625 7.40469 2.625V7.91094H6.25C6.14531 7.91094 6.0875 8.03125 6.15156 8.1125L7.90156 10.3281ZM13.7188 9.78125H12.7812C12.7125 9.78125 12.6562 9.8375 12.6562 9.90625V12.3125H3.34375V9.90625C3.34375 9.8375 3.2875 9.78125 3.21875 9.78125H2.28125C2.2125 9.78125 2.15625 9.8375 2.15625 9.90625V13C2.15625 13.2766 2.37969 13.5 2.65625 13.5H13.3438C13.6203 13.5 13.8438 13.2766 13.8438 13V9.90625C13.8438 9.8375 13.7875 9.78125 13.7188 9.78125Z" fill="black" />
                            </svg>
                            Resume
                        </a>
                    </div>
                </div>
                <div className='relative w-full max-w-md aspect-square | md:ml-auto '>
                    <Image layout='fill' objectFit={'center'} className='min-w-full' src={'/static/space_explore_artwork.png'} alt='Hero Illustration' />
                </div>
            </div>

        </div>
    )
}
