import React from 'react'
import Logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav class="bg-white    px-2 sm:px-4 py-2.5 ">
        <div class="container flex flex-wrap justify-around items-center mx-auto">
            <a href="/" class="flex items-center">
                <img
                className="mx-auto  w-[4rem]"
                src={Logo}
                alt="logo"
            />
            <p className=' ml-3 font-bold text-indigo-600 text-2xl'>Blogify</p>
            </a>

            <div class="flex items-center">
            <button
                id="menu-toggle"
                type="button"
                class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            >
                <span class="sr-only">Open main menu</span>
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                />
                </svg>
            </button>
            </div>

            <div
            class="w-full md:block md:w-auto hidden"
            id="mobile-menu"
            >
            <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                <li>
                <a
                    href="#"
                    class="block py-2 pr-4 pl-3  bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "
                    aria-current="page"
                >
                    <Link to={'/?cat=art'}>Art</Link>
                </a>
                </li>
                <li>
                <a
                    href="#"
                    class="block py-2 pr-4 pl-3  bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "
                >
                    <Link to={'/?cat=science'}>Science</Link>
                </a>
                </li>
                <li>
                    <a
                        href="#"
                        class="block py-2 pr-4 pl-3  bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "
                    >
                        <Link to={'/?cat=technology'}>Technology</Link>
                    </a>
                </li>
                <li>
                <a
                    href="#"
                    class="block py-2 pr-4 pl-3  bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "
                >
                    <Link to={'/?cat=cinema'}>Cinema</Link>
                </a>
                </li>
                <li>
                <a
                    href="#"
                    class="block py-2 pr-4 pl-3  bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "
                >
                    <Link to={'/?cat=design'}>Design</Link>
                </a>
                </li>
                <li>
                <a
                    href="#"
                    class="block py-2 pr-4 pl-3  bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "
                >
                    <Link to={'/?cat=food'}>Food</Link>
                </a>
                </li>
                <li><span className='block py-2 pr-4 pl-3  bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 '>John</span></li>
                <li><span className='block py-2 pr-4 pl-3  bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 hover:text-red-400 cursor-pointer '>Logout</span></li>
                <li>
                <a
                    href="#"
                    class="middle none center rounded-lg bg-blue-700 py-2 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none "
                >
                    <Link to={'/write'}>Write</Link>
                </a>
                </li>
            </ul>
            </div>

        </div>
        </nav>
    </>
  )
}

export default Navbar