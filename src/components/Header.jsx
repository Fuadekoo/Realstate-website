import React from 'react'
import {FaSearch} from "react-icons/fa";
import {Link} from "react-router-dom";
function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto'>
            <Link to="/">
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                <span className='text-slate-500'>sahand</span>
                <span className='text-slate-700'>RealState</span>
            </h1>
            </Link>
            <form action="" method="post" className='bg-slate-100 p-3 rounded-lg flex items-center'>
                <input type="text" className='bg-transparent focus:outline-none w-24 sm:w-64' name="search" id="search" placeholder='search...' />
                <FaSearch className='text-slate-600'/>
            </form>

            <ul className='flex gap-4'>
                <Link to='/'>
                <li className='hidden sm:inline text-slate-700 hover:underline'>home</li>
                </Link>
                <Link to='/About'>
                <li
                className='hidden sm:inline text-slate-700 hover:underline'>About</li>
                </Link>
                <Link to='/Signin'>
                <li className='text-slate-700 hover:underline'>SignIn</li>
                </Link>

            </ul>
        </div>
    </header>
  )
}

export default Header