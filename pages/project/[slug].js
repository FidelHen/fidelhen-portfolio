import React from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Image from 'next/image'
import data from '@/data/projects/data'
import Metatags from '@/components/meta'
export default function Project({ project }) {
    if (!project) return null;
    return (
        <div className='relative'>
            <Metatags />
            <Navigation />

            <div className='px-0 md:px-4'>
                <div className='w-full mx-auto relative min-h-[12em] | md:p-0  md:min-h-[16em] md:w-[80%] lg:w-[70%]'>
                    <Image src={project.hero_img} alt='Heben artwork' layout='fill' objectFit='cover' className='md:rounded-md ' />
                </div>
                <div className={`w-full mx-auto | flex flex-col my-4 gap-2 p-4 | md:gap-12 md:my-16 md:p-0 md:flex-row  md:w-[80%] lg:w-[70%]`}>
                    <div className='my-2 flex flex-col gap-2 basis-[50%] justify-start md:mb-[5em]'>
                        <h2 className='text-xl font-bold | md:text-4xl'>{project.title}</h2>
                        <p className='text-muted leading-relaxed md:w-[90%] md:mt-4'>
                            {project.detail_summary}
                        </p>
                        <a href={project.github} rel='noreferrer' target={'_blank'} className='btn bg-black max-w-[200px] my-4 text-white'>
                            Github
                        </a>
                    </div>
                    <div className='relative w-full aspect-video max-h-[20em] basis-[50%] '>
                        <Image className='rounded-md' layout='fill' objectFit='cover' src={project.detail_image} alt={project.title} />
                    </div>
                </div>

                {/* Frontend */}

                <div className={`w-full mx-auto | flex flex-col my-0 gap-2 p-4 | md:gap-12  md:p-0  md:w-[80%] lg:w-[70%]`}>
                    <div className=' flex flex-col gap-2 basis-[50%]  md:mb-[5em]'>
                        <div className='relative w-full aspect-video h-[300px] my-4'>
                            <Image className='rounded-md' layout='fill' objectFit='cover' src={project.frontend_image} alt='Haben artwork' />
                        </div>
                        <h3 className='text-xl font-bold mt-2 | md:text-2xl '>Frontend Stack</h3>

                        <p className='text-muted leading-relaxed md:w-[80%]'>
                            {
                                project.frontend_detail
                            }
                        </p>
                        <ul className='list-disc pl-12 text-muted'>
                            {
                                project?.frontend_stack?.map(stk => <li key={stk}>{stk}</li>)
                            }

                        </ul>

                    </div>
                </div>

                {/* Backend */}


                <div className={`w-full mx-auto | flex flex-col my-0 gap-2 p-4 | md:gap-12  md:p-0  md:w-[80%] lg:w-[70%]`}>

                    <div className=' flex flex-col gap-2 basis-[50%]  md:mb-[5em]'>
                        <div className='relative w-full aspect-video h-[300px] my-4'>
                            <Image className='rounded-md' layout='fill' objectFit='cover' src={project.backend_image} alt='Haben artwork' />
                        </div>
                        <h3 className='text-xl font-bold mt-2 | md:text-2xl '>Backend Stack</h3>

                        <p className='text-muted leading-relaxed md:w-[80%]'>
                            {
                                project.backend_detail
                            }
                        </p>
                        <ul className='list-disc pl-12 text-muted'>
                            {
                                project?.backend_stack?.map(stk => <li key={stk}>{stk}</li>)
                            }

                        </ul>

                    </div>
                </div>

                {/* conclusion */}

                <div className={`w-full mx-auto | flex flex-col my-0 gap-2 p-4 | md:gap-12 md:my-16 md:p-0 md:flex-row  md:w-[80%] lg:w-[70%]`}>

                    <div className=' flex flex-col gap-2 basis-[50%]  md:mb-[5em]'>
                        <h3 className='text-xl font-bold mt-2 |  md:text-2xl md:mt-8'>Conclusion</h3>
                        <p className='text-muted leading-relaxed md:w-[80%]'>
                            {
                                project.conclusion
                            }
                        </p>

                    </div>
                    <div className='relative w-full aspect-video max-h-[20em] basis-[50%] '>
                        <Image className='rounded-md' layout='fill' objectFit='cover' src={project.conclusion_image} alt='Haben artwork' />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export async function getStaticPaths() {
    let paths = []
    data.map((idx) => {
        paths.push({ params: { slug: idx.slug } })
    })
    return {
        paths: paths,
        fallback: true
    };
}

export async function getStaticProps({ params }) {
    const project = data.find((project) => (project.slug === params.slug));
    return {
        props: {
            project
        }
    };
}
