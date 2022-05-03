import React from 'react'
import Image from 'next/image'

export default function DetailCard({ alt = false }) {
    return (
        <div className={`w-full mx-auto | flex flex-col my-8 gap-4 p-4 | md:p-0 ${alt ? 'md:flex-row-reverse' : 'md:flex-row'}   md:w-[80%] lg:w-[70%]`}>
            <div className='my-2 flex flex-col gap-4 basis-[50%] '>
                <h2 className='text-xl font-bold | md:text-4xl'>Haben Artwork Project</h2>
                <p className='text-muted'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A nulla ullam ab maxime tempore natus quam eius reiciendis facilis praesentium illo id rerum, repellendus iste minus incidunt maiores nemo voluptas.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A nulla ullam ab maxime tempore natus quam eius reiciendis facilis praesentium illo id rerum, repellendus iste minus incidunt maiores nemo voluptas.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A nulla ullam ab maxime tempore natus quam eius reiciendis facilis praesentium illo id rerum, repellendus iste minus incidunt maiores nemo voluptas.
                </p>
            </div>
            <div className='relative w-full aspect-video max-h-[20em] basis-[50%] '>
                <Image className='rounded-md' layout='fill' objectFit='cover' src={'/static/projects/meta-artwork.png'} alt='Haben artwork' />
            </div>

        </div>
    )
}
