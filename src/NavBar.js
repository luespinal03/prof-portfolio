import React from 'react'


const NavBar = () => {
    return (
        <div className='w-screen h-[77px] z-10 bg-black/60 fixed drop-shadow-lg top-0 px-5'>
            <div className='flex justify-end w-full '>
                <div className='flex '>
                    <div className='hidden md:flex'>
                        <a href='' className='bg-[#2BC073] text-3xl text-white p-5 ease-in duration-100 hover:bg-slate-300'>Web</a>
                        <a href='' className='bg-[#621DF7] text-3xl text-white p-5 ease-in duration-100 hover:bg-slate-300'>Swift</a>
                        <a href='' className='bg-[#4169e1] text-3xl text-white p-5 ease-in duration-100 hover:bg-slate-300'>Resume</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar