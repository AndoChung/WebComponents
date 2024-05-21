import React from 'react'
import defaultImg from '../../assets/images/default.jpg'


const Hero1 = () => {
    return (
        // Section
        <section className='px-[5%] py-8 md:py-12 lg:py-16'>
            <div className='flex flex-col lg:flex-row'>
                <div className='grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:items-center lg:w-1/2'>
                    <div>
                        <h2 className='mb-5 text-4xl font-bold md:mb-6 lg:text-5xl'>Medium Length Hero Heading Goes Here</h2>
                        <p className='md:text-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                        <div className='mt-6 flex gap-x-4 md:mt-8'>
                            <button className='bg-black text-white mr-5 px-7 py-4'>Button</button>
                            <button className='border border-black px-7 '>Button</button>
                        </div>
                    </div>
                </div>
                <div className='my-16 lg:w-1/2 lg:mx-16 lg:my-0'>
                    <img className='object-cover' src={defaultImg} />
                </div>
            </div>
        </section>
    )
}


export default Hero1