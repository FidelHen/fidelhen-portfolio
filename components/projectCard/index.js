import React from 'react'
import Link from 'next/link'
export default function Card({ data }) {
    return (
        <div className={`grow | grid | p-4 rounded-md | bg-no-repeat bg-cover bg-center md:min-h-[15em] ${data.alt} order-${10 - data.id}}`}>
            <div className='flex flex-col gap-4 my-auto  md:w-[55%]'>
                <h2 className='text-2xl font-semibold'>
                    {data.title}
                </h2>
                <p className='mb-8'>
                    {data.short_summary}
                </p>
                <Link href={`/project/${data.slug}`} passHref>
                    <a className={`max-w-[200px] | btn bg-transparent border-black | border-2 text-center  | ${data.btn} `}>
                        View Details
                    </a>
                </Link>

            </div>

        </div>
    )
}
