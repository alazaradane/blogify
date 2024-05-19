import React, { useContext } from 'react'
import { Delete, Edit } from '../assets/images'
import { Link, useNavigate } from 'react-router-dom'
import Menu from '../components/Menu'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import backendUrl from '../../api'
import moment from 'moment'
import {AuthContext} from '../context/authContext.jsx'
import { useState } from 'react'
import { useEffect } from 'react'

const Single = () => {
  const imgPost = 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  const imgUser = 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww'
  
  axios.defaults.withCredentials = true;

  const [post, setPost]= useState([])
  const location = useLocation();
  const navigate = useNavigate();
  const postId = location.pathname.split('/')[2]
  console.log(postId)

  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const res = await axios.get(`${backendUrl}/posts/${postId}`, {
          withCredentials: true, 
        });
        setPost(res.data)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  },[postId])

  const {currentUser} = useContext(AuthContext)
  const handleDelete = async()=>{
    try {
      await axios.delete(`${backendUrl}/posts/${postId}`, {
        withCredentials: true, 
      })
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  
  const getText = (html)=>{
    const doc = new DOMParser().parseFromString(html, 'text/html')
    return doc.body.textContent
  }

  return (
    <section className=' ml-[6rem] flex items-start '>
      <div className=' flex flex-col w-2/3 ml-[3rem]  my-4'>
        <div className=' my-4'>
          <img src={`../upload/${post?.img}`} className=' w-[40rem] h-[25rem]'/>
        </div>
        <div className=' flex my-[2rem] gap-3'>
          {post.userImg && <div className=' flex'>
            <img src={post.userImg} className=' w-[4rem] h-[4rem] rounded-full'/>
          </div>}
          <div>
            <p className=' font-bold'>{post.username}</p>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          { currentUser.username === post.username && <div className=' flex gap-2'>
           <Link to={`/write?edit=2`} state={post}><img src={Edit} className=' cursor-pointer w-[1.5rem] h-[1.5rem] rounded-full'/></Link>
            <Link><img src={Delete} className=' cursor-pointer w-[1.5rem] h-[1.5rem] rounded-full' onClick={handleDelete}/></Link>
          </div>}
        </div>
        <div className=' flex flex-col w-2/3 '>
          <p className=' text-4xl font-bold my-4'>{post.title}</p>
          <div className=' text-start'>  
              {getText(post.desc)}
          </div>
        </div>
      </div>
      <div className=' w-1/3 -ml-[2rem] mr-[3rem] flex my-4'>
        <Menu cat={post.cat}/>
      </div>
    </section>
  )
}

export default Single