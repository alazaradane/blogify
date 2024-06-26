import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Button from '../components/Button';
import axios from 'axios';
import backendUrl from '../../api';
import { useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';

const Write = () => {

  const navigate = useNavigate();
  const state = useLocation().state

  const [value, setValue] = useState(state?.desc||'');
  const [title, setTitle] = useState(state?.title||'');
  const [file,setFile] = useState(null);
  const [cat,setCat] = useState(state?.cat||'')

  const upload = async()=>{
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res= await axios.post(`${backendUrl}/upload`, formData)
      return res.data
    } catch (error) {
      console.log(error);
    }
  }
  const handleClick = async(e)=>{
    e.preventDefault();
    const imgUrl = await upload();
    try {
      state ? await axios.put(`${backendUrl}/posts/${state.id}`,{
        title,desc:value,cat,img:file ? imgUrl : ""
      }): await axios.post(`${backendUrl}/posts`,{
        title,
        desc:value,
        cat,
        img:file ? imgUrl : "",
        date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
      })
      navigate('/');
      
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <section className=' w-full flex items-start my-[5rem]  px-[10rem]'>
      <div className=' flex flex-col gap-[1rem] w-2/3'>
        <input type="text" value={title} placeholder='Title...' onChange={(e)=>{setTitle(e.target.value)}} className=' border-[1.5px] border-slate-800 py-1 px-1 focus:outline-none placeholder:ml-[1rem] focus:border-indigo-700 '/>
        <div>
          <ReactQuill theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className=' w-1/3 mx-auto flex flex-col justify-center items-center gap-[1rem]'>
        <div className=' flex flex-col'>
          <h1 className=' text-2xl font-bold'>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input type="file" name='file' id='file' hidden onChange={(e)=>{setFile(e.target.files[0])}}/>
          <label htmlFor="file" className=' my-2 cursor-pointer underline'>Upload</label>
          <div className='flex gap-3'>
            <button className=' middle none center rounded-md  py-2 px-6 font-sans text-xs font-bold uppercase border-[1px] border-blue-700 '>Save Draft</button>
            <Button onClick={handleClick}  label={'publish'}/>
          </div>
        </div>
        <div className='flex mr-5 flex-col border-1 border-slate-700'>
            <p className=' text-xl font-bold mb-2'>Category</p>
            <div className=' flex gap-3'>
              <input type="checkbox" checked={cat ==="art"} name='cat' value='art' id='art' onChange={(e)=>setCat(e.target.value)} />
              <label  htmlFor="art" >Art</label>
            </div>
            <div className=' flex gap-3'>
              <input type="checkbox" checked={cat ==="science"} name='cat' value='science' id='science' onChange={(e)=>setCat(e.target.value)} />
              <label htmlFor="art">Science</label>
            </div>
            <div className=' flex gap-3'>
              <input type="checkbox" checked={cat ==="technology"} name='cat' value='technology' id='technology' onChange={(e)=>setCat(e.target.value)} />
              <label htmlFor="technology">technology</label>
            </div>
            <div className='flex gap-3'>
              <input type="checkbox" name='cat' checked={cat ==="cinema"} value='cinema' id='cinema' onChange={(e)=>setCat(e.target.value)} />
              <label htmlFor="cinema">Cinema</label>
            </div>
            <div className=' flex gap-3'>
              <input type="checkbox" name='cat' checked={cat ==="design"} value='design' id='design' onChange={(e)=>setCat(e.target.value)} />
              <label htmlFor="design">design</label>
            </div>
            <div className='flex gap-3'>
              <input type="checkbox" name='cat' checked={cat ==="food"}  value='food' id='food' onChange={(e)=>setCat(e.target.value)} />
              <label htmlFor="food">Food</label>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Write