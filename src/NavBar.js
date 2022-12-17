import React from 'react'


const NavBar = () => {
    return (
        <div className='w-screen h-[80px] z-10 bg-black/30 fixed drop-shadow-lg top-0'>
            <div className='px-2 flex justify-end items-center w-full h-full'>
                <div className='flex items-center'>
                    <ul className='hidden md:flex mt-2'>
                        <li className='text-3xl bg-transperant'>Swift</li>
                        <li className='text-3xl'>Web</li>
                        <li className='text-3xl'>Resume</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar