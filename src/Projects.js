import React from 'react'
import { images } from './constants'
import { AiFillGithub, AiFillLinkedin, AiTwotoneMail } from 'react-icons/ai'


const Projects = () => {
    return (
        <div className='text-center mt-10 p-14 bg-slate-100/50'>
            <h2 className='text-7xl text-white'>Projects</h2>

            <div className="flex justify-center mt-40">
                <div className="rounded-lg shadow-lg bg-white w-[300px] h-[350px]">
                    <a href="https://github.com/luespinal03/Expense-Tracker-App" data-mdb-ripple="true" data-mdb-ripple-color="light">
                        <img className="rounded-t-lg" src={images.expenseTracker1} alt="" />
                    </a>
                    <div className="p-6">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">Expense-Tracker</h5>
                        <p className="text-gray-700 text-base mb-4">
                            React App
                        </p>
                        <a href='https://github.com/luespinal03/Expense-Tracker-App' className=''><AiFillGithub size={35} /></a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects