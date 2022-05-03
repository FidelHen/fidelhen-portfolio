import React from 'react'
import Card from '@/components/projectCard'
import Contact from '@/components/contact'
import data from '@/data/projects/data'
export default function Projects() {
    return (
        <div className='w-full mx-auto | flex flex-wrap gap-4 | p-4  | md:w-[80%] lg:w-[70%] md:mt-8 md:gap-8  '>
            {
                data.map(itm => <Card key={itm.id} data={itm} />)
            }
            <Contact alt='text-black md:basis-[40%]' />

            {/* <Card alt='text-black bg-[#A7D99A] md:bg-[url(/static/projects/cb-artwork.png)] md:basis-[50%]' />
            <Card alt='text-black bg-[#FC7A4E] md:bg-[url(/static/projects/meta-artwork.png)] md:basis-[40%]' />
            <Card alt='text-black bg-[#fff] shadow-md  md:bg-[url(/static/projects/heben-artwork.png)] ' />
           
            <Card alt='text-black bg-[#FC7A4E] md:bg-[url(/static/projects/meta-artwork.png)] md:basis-[50%]' /> */}

        </div>
    )
}
