import React from 'react'
import Logo from '../assets/images/logo.png'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <>
        <div class=" mx-auto w-full">
            <footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 ">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a href="#" target="_blank" class="flex items-center mb-4 sm:mb-0">
                        <img src={Logo} class="mr-4 w-[3rem]" alt="Blogify Logo" />
                        <span class="self-center text-xl font-semibold whitespace-nowra text-indigo-600">Blogify</span>
                    </a>
                    <ul class="flex flex-wrap items-center mb-6 sm:mb-0">
                        <li>
                            <a href="#" class="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">About</a>
                        </li>
                        <li>
                            <a href="#" class="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Privacy
                                Policy</a>
                        </li>
                        <li>
                            <a href="#"
                                class="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Licensing</a>
                        </li>
                        <li>
                            <a href="#" class="text-sm text-gray-500 hover:underline dark:text-gray-400">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© {currentYear} <a href="https://flowbite.com" target="_blank" class="hover:underline">Blogify™</a>. All Rights Reserved.
            </span>
            </footer>
        </div>
    </>
  )
}

export default Footer