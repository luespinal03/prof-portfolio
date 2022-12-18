import React from 'react'
import { images } from './constants';



const Skills = () => {
    return (
        <div className='text-center mt-10 p-14 bg-slate-800/50'>
            <h2 className='text-7xl text-white'>Skills</h2>
            <h3 className='text-4xl text-white mt-40'>Front End</h3>
            <div className=' flex flex-wrap mt-10'>
                <div className='ml-[262px] px-5 hover:scale-125'>
                    <img src={images.reactSvg} className='h-28 w-28' alt='React'></img>
                    <span className='bg-inherit text-white text-lg'>React</span>
                </div>

                <div className='px-5 hover:scale-125'>
                    <img src={images.tailwindSvg} className='h-28 w-28' alt='Tailwind'></img>
                    <span className='bg-inherit text-white text-lg'>Tailwind</span>
                </div>

                <div className='px-5 hover:scale-125'>
                    <img src={images.javaScriptSvg} className='h-28 w-28' alt='JavaScript'></img>
                    <span className='bg-inherit text-white text-lg'>Javascript</span>
                </div>

                <div className='px-5 hover:scale-125'>
                    <img src={images.htmlSvg} className='h-28 w-28' alt='HTML'></img>
                    <span className='bg-inherit text-white text-lg'>HTML</span>
                </div>

                <div className='px-5 hover:scale-125'>
                    <img src={images.cssSvg} className='h-28 w-28' alt='CSS3'></img>
                    <span className='bg-inherit text-white text-lg'>CSS3</span>
                </div>

                <div className='px-5 hover:scale-125'>
                    <img src={images.reduxSvg} className='h-28 w-28' alt='Redux'></img>
                    <span className='bg-inherit text-white text-lg'>Redux</span>
                </div>

                <div className='px-5 hover:scale-125'>
                    <img src={images.typeScriptSvg} className='h-28 w-28' alt='Typescript'></img>
                    <span className='bg-inherit text-white text-lg'>Typescript</span>
                </div>

            </div>

            <h3 className='text-4xl text-white mt-40'>Back End</h3>
            <div className='flex flex-wrap mt-10'>

                <div className='ml-[480px] px-5 hover:scale-125'>
                    <img src={images.nodeSvg} className='h-28 w-28' alt='Node'></img>
                    <span className='bg-inherit text-white text-lg'>Node</span>
                </div>

                <div className='px-5 hover:scale-125'>
                    <img src={images.expressSvg} className='h-28 w-28' alt='Express.js'></img>
                    <span className='bg-inherit text-white text-lg'>Express.js</span>
                </div>

                <div className='px-5 hover:scale-125'>
                    <img src={images.mongoDbSvg} className='h-28 w-28' alt='MongoDb'></img>
                    <span className='bg-inherit text-white text-lg'>MongoDb</span>
                </div>

                <div className='px-5 hover:scale-125'>
                    <img src={images.awsSvg} className='h-28 w-28' alt='AWS'></img>
                    <span className='bg-inherit text-white text-lg'>AWS</span>
                </div>
            </div>
        </div>
    )
}

export default Skills