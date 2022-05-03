import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
export default function Navigation() {
    let [visible, setVisible] = React.useState(false)
    const router = useRouter();

    let isActive = (path) => {
        return router.pathname === path ? 'text-green-500 font-bold' : ''
    }

    return (
        <header className='w-full h-[5em] md:w-[80%] lg:w-[70%] mx-auto | flex items-center justify-between | p-4'>
            <Link href='/' >
                <a className='font-medium'> <span className='font-bold'>Fidel</span>  Henriquez</a>
            </Link>
            <nav className='hidden items-center list-none gap-4  md:flex '>
                <li>
                    <Link href='/' >
                        <a className={isActive('/')}>Home</a>
                    </Link>
                </li>
                {/* <li>
                    <Link href='/experience' >
                        <a className={isActive('/experience')} >Experience</a>
                    </Link>
                </li> */}
                <li>
                    <Link href='/contact' >
                        <a className={isActive('/contact')}>Contact</a>
                    </Link>
                </li>
            </nav>
            {
                visible &&
                <div role='dialog' className='fixed w-full h-full z-50 bg-black bg-opacity-80 top-0 left-0 p-6'>
                    <div className='flex items-center justify-end py-4'>

                        <div onClick={() => setVisible(false)}>
                            <Image src='/close.svg' alt='Close' width={24} height={24} />
                        </div>
                    </div>
                    <ul className='w-full h-full flex flex-col justify-center gap-12 pb-32 gap-4 place-items-center'>
                        <li>
                            <Link href='/'>
                                <a className='text-white text-xl cursor-pointer'>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/experience' >
                                <a className='text-white text-xl cursor-pointer'>Experience</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/contact' >
                                <a className='text-white text-xl cursor-pointer'>Contact</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            }

            <div className='block md:hidden'>
                <div onClick={() => setVisible(true)}>
                    <Image src='/menu1.svg' alt='Close' width={32} height={32} />
                </div>
            </div>
        </header>
    )
}
