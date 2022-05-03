import React from 'react';
import experiences from '@/data/experiences'
const Experiences = () => {
    const [current, setCurrent] = React.useState(experiences[0]);
    let handleSelect = (idx) => {
        setCurrent(idx)
    }
    return (
        <div className='w-full mx-auto min-h-[10em] md:px-[10%] | flex flex-col justify-center | bg-black text-white | gap-4  p-4 | md:justify-between md:flex-row md:mt-8 '>
            <div className='my-auto'>
                <p className='mb-4'>
                    <span className='text-5xl font-bold text-secondary'>
                        4+
                    </span>
                    <br />
                    <span className='text-2xl'>
                        years of experiences
                    </span>
                </p>
            </div>
            <div className='p-4 '>
                <ul className='flex flex-col  w-full'>
                    {
                        experiences?.map(exp => <li key={exp.id}
                            className={`cursor-pointer  border-l-2 pl-2 py-2 ${current.id === exp.id ? 'border-white' : 'border-gray-700'} transition-all`}
                            onClick={() => handleSelect(exp)}> <span className={`${current.id === exp.id ? 'text-white font-bold' : 'text-muted'}`}>{exp.company}</span> </li>)
                    }
                </ul>
            </div>
            <div className='p-4 grid gap-2 md:basis-[50%]'>
                <h3 className='text-3xl'>{current.title} <span className='text-primary'>@{current.company}</span></h3>
                <p className='text-muted'>{current.start} - {current.end}</p>
                <ul className='list-disc pl-8 mt-4 flex flex-col gap-2 '>
                    {
                        current?.roles.map((role, idx) => <li key={idx} className='text-green-500'><span className='text-white'>{role}</span></li>)
                    }

                </ul>
            </div>
        </div>
    );
}

export default Experiences;
