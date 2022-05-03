import React from 'react';
import Image from 'next/image';
const Companies = () => {
    return (
        <div className='w-full mx-auto min-h-[10em] md:px-[18%] | flex flex-col justify-center | bg-black | gap-4  p-4 | md:justify-between md:flex-row md:mt-8 '>
            <div className='relative grow min-w-[100px] min-h-[40px] mx-auto max-w-[100px]  md:max-w-[120px] '>
                <Image alt='amissa' src='/static/amissa_logo_svg.svg' layout='fill' objectFit={'contain'} />
            </div>
            <div className='relative grow min-w-[100px] min-h-[40px] mx-auto max-w-[100px]  md:max-w-[130px] '>
                <Image alt='amissa' src='/static/microsoft_logo_svg.svg' layout='fill' objectFit={'contain'} />
            </div>

            <div className='relative grow min-w-[100px] min-h-[40px] mx-auto max-w-[100px]  md:max-w-[120px] '>
                <Image alt='amissa' src='/static/passport_logo_svg.svg' layout='fill' objectFit={'contain'} />
            </div>
        </div>
    );
}

export default Companies;
