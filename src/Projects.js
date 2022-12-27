import React from 'react'
import { images } from './constants'
import { AiFillGithub, AiFillLinkedin, AiTwotoneMail } from 'react-icons/ai'


const Projects = () => {
    return (
        <div className='text-center mt-10 p-14 bg-slate-100/50'>
            <h2 className='text-7xl text-white'>Projects</h2>

            <div className='flex flex-wrap mt-10'>
                <div className="flex justify-center mt-20">
                    <div className="rounded-lg shadow-lg bg-white w-[300px] h-[350px]">
                        <a href="https://github.com/luespinal03/Expense-Tracker-App" data-mdb-ripple="true" data-mdb-ripple-color="light">
                            <img className="rounded-t-lg p-2" src={images.expenseTracker1} alt="" />
                        </a>
                        <div className="p-6">
                            <h5 className="text-gray-900 text-xl font-medium mb-2">Expense-Tracker</h5>
                            <p className="text-gray-700 text-base mb-4">
                                React App
                            </p>
                            <a href='https://github.com/luespinal03/Expense-Tracker-App' className=''><AiFillGithub size={25} /></a>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-20 ml-10">
                    <div className="rounded-lg shadow-lg bg-white w-[300px] h-[350px]">
                        <a href="https://github.com/luespinal03/Expense-Tracker-App" data-mdb-ripple="true" data-mdb-ripple-color="light">
                            <img className="rounded-t-lg p-2" src={images.gameshak1} alt="" />
                        </a>
                        <div className="p-6">
                            <h5 className="text-gray-900 text-xl font-medium mb-2">FullStack Ecomm-App</h5>
                            <p className="text-gray-700 text-base mb-4">
                                React App
                            </p>
                            <div className='flex flex-wrap'>
                                <a href='https://github.com/luespinal03/ecomm-app-client-side' className='px-2'><AiFillGithub size={25} /></a>
                                <a href='https://github.com/luespinal03/ecomm-app-server-side' className='px-2'><AiFillGithub size={25} /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-20 ml-10">
                    <div className="rounded-lg shadow-lg bg-white w-[300px] h-[350px]">
                        <a href="https://github.com/luespinal03/Expense-Tracker-App" data-mdb-ripple="true" data-mdb-ripple-color="light">
                            <img className="rounded-t-lg p-2" src={images.hangman1} alt="" />
                        </a>
                        <div className="p-6">
                            <h5 className="text-gray-900 text-xl font-medium mb-2">HangMan-Game</h5>
                            <p className="text-gray-700 text-base mb-4">
                                React App
                            </p>
                            <a href='https://github.com/luespinal03/hangman-game' className='px-2'><AiFillGithub size={25} /></a>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Projects