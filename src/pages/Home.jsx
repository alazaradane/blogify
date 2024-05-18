import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import backendUrl from '../../api'


const Home = () => {

  const [posts, setPosts]= useState([])
  const cat = useLocation().search;

  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const res = await axios.get(`${backendUrl}/posts${cat}`);
        setPosts(res.data)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  },[cat])


  return (
    <div className=' container'>
      <div>
        {posts.map((post)=>(
          <div key={post.id} className=' flex items-start justify-evenly flex-row odd:flex-row-reverse m-5 p-5'>
            <div>
              <img src={post.img} alt="" className=' w-[20rem]' />
            </div>
            <div className=' w-[32rem] mt-[2rem] '>
              <Link to={`/post/${post.id}`}>
                <p className=' text-4xl font-bold hover:text-indigo-600 mb-3'>{post.title}</p>
              </Link>
              <p className=' my-[2rem] text-slate-700 text-lg'>{post.desc}</p>
              <button className=' middle none center rounded-md bg-indigo-700 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none '>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home