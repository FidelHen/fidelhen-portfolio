import React from 'react'
import Link from 'next/link'
export default function Footer() {
    return (
        <footer className='w-full  mx-auto | flex flex-col items-center justify-between | bg-black text-white | p-8 | md:flex-row md:px-[10%]'>
            <div className='flex flex-col text-center md:text-left'>
                <Link href='/' >
                    <a className='font-medium text-gray-300'> <span className='font-bold text-white'>Fidel</span>  Henriquez</a>
                </Link>
                <a className='text-muted' href="mailto:findelhen@gmail.com">Fidelhen@gmail.com</a>
                <a className='text-muted' href='tel:(704) 360-7825'>(704) 360-7825</a>
            </div>

            <nav className='flex items-center list-none gap-4 flex-col  md:flex-row mt-4 md:mt-0'>
                <li>
                    <Link href='/' >
                        <a>Home</a>
                    </Link>
                </li>
                {/* <li>
                    <Link href='/experience' >
                        <a>Experience</a>
                    </Link>
                </li> */}
                <li>
                    <Link href='/contact' >
                        <a>Contact</a>
                    </Link>
                </li>
            </nav>

        </footer>
    )
}
