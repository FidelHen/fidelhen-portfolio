import React from 'react';
import Image from 'next/image';
export default function Contact({ alt = '' }) {
    return (
        <div className={`grow | grid place-items-center | rounded-md | p-4 | bg-black | ${alt} order-4`}>
            <div className='relative min-w-[150px] aspect-square'>
                <Image src='/static/projects/github-artwork.png' objectFit={'cover'} alt='github' layout='fill' />
            </div>
            <a href='https://github.com/FidelHen' rel='noreferrer' target={'_blank'} className='btn bg-transparent border border-white text-white border-2'>
                Explore Github
            </a>
        </div>
    )
}
