import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';

export const Navbar = () => {
    const location = useLocation();
    const [menuis,setMenuIs] = useState(true);
    const openMenu=()=>{
setMenuIs(!menuis);
    }
  return (
    <>{menuis&&<div className='bg-greyNeo py-4 flex justify-end md:hidden'><AiOutlineMenu className='text-white my-auto text-xl mx-4' onClick={openMenu}/></div>}<div className={menuis?'bg-greyNeo flex overflow-x-hidden md:justify-center py-2 md:py-5 absolute top-[-100%]':'bg-greyNeo flex overflow-x-hidden md:justify-center py-2 md:py-5'}>
        <div className=' md:flex'>
        <div className={location.pathname==='/'?'my-auto mx-5 text-white font-semibold text-xl font-sans':'my-auto mx-5 text-white font-semibold text-xl font-sans opacity-50'}>
        <Link to="/"> HOME</Link>
        </div>
        
        <div className={location.pathname==='/about'?'my-auto mx-5 text-white font-semibold text-xl font-sans':'my-auto mx-5 text-white font-semibold text-xl font-sans opacity-50'}>
        <Link to="/about" > ABOUT </Link>
        </div>
        <div className={location.pathname==='/clients'?'my-auto mx-5 text-white font-semibold text-xl font-sans':'my-auto mx-5 text-white font-semibold text-xl font-sans opacity-50'}>
            CLIENTS
        </div>
        <div className={location.pathname==='/projects'?'my-auto mx-5 text-white font-semibold text-xl font-sans':'my-auto mx-5 text-white font-semibold text-xl font-sans opacity-50'}>
            PROJECTS
        </div>
        <div className={location.pathname==='/portfolio'?'my-auto mx-5 text-white font-semibold text-xl font-sans':'my-auto mx-5 text-white font-semibold text-xl font-sans opacity-50'}>
            PORTFOLIO
        </div>
        <div className={location.pathname==='/contact'?'my-auto mx-5 text-white font-semibold text-xl font-sans':'my-auto mx-5 text-white font-semibold text-xl font-sans opacity-50'}>
            CONTACT
        </div> 
        </div>
        <div className='absolute z-10 right-0 md:hidden'><AiOutlineClose className=' text-white text-xl mx-4' onClick={openMenu}/></div></div>
        </>
  )
}
