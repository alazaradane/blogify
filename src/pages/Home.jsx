import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  const posts  = [
    {
      id:1,
      title: 'Lorem ipsum dolor sit amet',
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe aspernatur praesentium, ex in molestias minus eos quas sapiente similique.",
      img: 'https://images.unsplash.com/photo-1533488069324-f9265c15d37f?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id:2,
      title: 'Lorem ipsum dolor sit amet',
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe aspernatur praesentium, ex in molestias minus eos quas sapiente similique.",
      img: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id:3,
      title: 'Lorem ipsum dolor sit amet',
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe aspernatur praesentium, ex in molestias minus eos quas sapiente similique.",
      img: 'https://images.unsplash.com/photo-1519238359922-989348752efb?q=80&w=1669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id:4,
      title: 'Lorem ipsum dolor sit amet',
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe aspernatur praesentium, ex in molestias minus eos quas sapiente similique.",
      img: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFtaWx5fGVufDB8fDB8fHww'
    },
  ]

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