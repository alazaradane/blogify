import React from 'react'
import { posts } from '../constants'

const Menu = () => {
  return (
    <section className=' flex flex-col mt-[1rem]'>      
            <p className=' flex text-xl font-bold my-3'>Other post you may like</p>
            <div className=' flex flex-col'>
                {posts.map((post)=>(
                    <div key={post.id}>
                        <img src={post.img} className=' w-[20rem] h-[15rem]'/>
                        <p className=' my-2 font-semibold text-lg'>{post.title}</p>
                        <button className=' middle none center my-3 rounded-md bg-indigo-700 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none '>Read More</button>
                    </div>
                ))}
            </div> 
    </section>
  )
}

export default Menu