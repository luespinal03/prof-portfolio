import { useState } from 'react'
import { images } from './constants';

// const [isHovered, setIsHovered] = useState(false);



const Skills = () => {
    return (
        <div className='text-center mt-10 p-14 bg-slate-800/50'>
            <h2 className='text-7xl text-white'>Skills</h2>
            <h3 className='text-4xl text-white mt-40'>Front-End</h3>
            <div className=' flex flex-wrap mt-10'>
                <div className='ml-[187px] px-5 hover:scale-125'>
                    <img src={images.reactSvg} className='h-24 w-24' alt='React'></img>
                    <span className='bg-inherit text-white text-lg'>React</span>
                </div>

                <div className='px-5 hover:scale-125'>
                    <img src={images.tailwindSvg} className='h-24 w-24' alt='Tailwind'></img>
                    <span className='bg-inherit text-white text-lg'>Tailwind</span>
                </div>

                <div className='px-5 hover:scale-125'>
                    <img src={images.javaScriptSvg} className='h-24 w-24' alt='JavaScript'></img>
                    <span className='bg-inherit text-white text-lg'>Javascript</span>
                </div>

                <div className='px-5 hover:scale-125'>
                    <img src={images.htmlSvg} className='h-24 w-24' alt='HTML'></img>
                    <span className='bg-inherit text-white text-lg'>HTML</span>
                </div>

                <div className='px-5 hover:scale-125'>
                    <img src={images.cssSvg} className='h-24 w-24' alt='CSS3'></img>
                    <span className='bg-inherit text-white text-lg'>CSS3</span>
                </div>

                <div className='px-5 hover:scale-125'>
                    <img src={images.reduxSvg} className='h-24 w-24' alt='Redux'></img>
                    <span className='bg-inherit text-white text-lg'>Redux</span>
                </div>

                <div className='px-5 hover:scale-125'>
                    <img src={images.typeScriptSvg} className='h-24 w-24' alt='Typescript'></img>
                    <span className='bg-inherit text-white text-lg'>Typescript</span>
                </div>

            </div>

            <h3 className='text-4xl text-white mt-40'>Back-End</h3>
            <div className='flex flex-wrap mt-10'>

                <div className='ml-[330px] px-5 hover:scale-125'>
                    <img src={images.nodeSvg} className='h-24 w-24' alt='Node'></img>
                    <span className='bg-inherit text-white text-lg'>Node</span>
                </div>

                <div className='px-5 hover:scale-125'>
                    <img src={images.expressSvg} className='h-24 w-24' alt='Express.js'></img>
                    <span className='bg-inherit text-white text-lg'>Express.js</span>
                </div>

                <div className='px-5 hover:scale-125'>
                    <img src={images.mongoDbSvg} className='h-24 w-24' alt='MongoDb'></img>
                    <span className='bg-inherit text-white text-lg'>MongoDb</span>
                </div>

                <div className='px-5 hover:scale-125'>
                    <img src={images.awsSvg} className='h-24 w-24' alt='AWS'></img>
                    <span className='bg-inherit text-white text-lg'>AWS</span>
                </div>

                <div className='px-5 hover:scale-125'>
                    <img src={images.pythonSvg} className='h-24 w-24' alt='Python'></img>
                    <span className='bg-inherit text-white text-lg'>Python</span>
                </div>
            </div>

            <h3 className='text-4xl text-white mt-40'>Other</h3>
            <div className='flex flex-wrap mt-10'>

                <div className='ml-[593px] px-5 hover:scale-125'>
                    <img src={images.gitSvg} className='h-24 w-24' alt='Node'></img>
                    <span className='bg-inherit text-white text-lg'>Git</span>
                </div>

                {/* <div className='px-5 hover:scale-125'>
                    <img src={images.swiftSvg} className='h-24 w-24' alt='Express.js'></img>
                    <span className='bg-inherit text-white text-lg'>Swift</span>
                </div> */}


            </div>

        </div>
    )
}

export default Skills