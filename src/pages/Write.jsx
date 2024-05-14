import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Button from '../components/Button';
const Write = () => {

  const [value, setValue] = useState('');
  console.log(value)

  return (
    <section className=' w-full flex items-start my-[5rem]  px-[10rem]'>
      <div className=' flex flex-col gap-[1rem] w-2/3'>
        <input type="text" placeholder='Title...' className=' border-[1.5px] border-slate-800 py-1 px-1 focus:outline-none placeholder:ml-[1rem] focus:border-indigo-700 '/>
        <div>
          <ReactQuill theme="snow" value={value} onChange={setValue} />;
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
          <input type="file" name='file' id='file' hidden />
          <label htmlFor="file" className=' my-2 cursor-pointer underline'>Upload</label>
          <div className='flex gap-3'>
            <button className=' middle none center rounded-md  py-2 px-6 font-sans text-xs font-bold uppercase border-[1px] border-blue-700 '>Save Draft</button>
            <Button label={'Update'}/>
          </div>
        </div>
        <div className='flex mr-5 flex-col border-1 border-slate-700'>
            <p className=' text-xl font-bold mb-2'>Category</p>
            <div className=' flex gap-3'>
              <input type="checkbox" name='cat' value='art' id='art' />
              <label htmlFor="art">Art</label>
            </div>
            <div className=' flex gap-3'>
              <input type="checkbox" name='cat' value='science' id='science' />
              <label htmlFor="art">Science</label>
            </div>
            <div className=' flex gap-3'>
              <input type="checkbox" name='cat' value='technology' id='technology' />
              <label htmlFor="technology">technology</label>
            </div>
            <div className='flex gap-3'>
              <input type="checkbox" name='cat' value='cinema' id='cinema' />
              <label htmlFor="cinema">Cinema</label>
            </div>
            <div className=' flex gap-3'>
              <input type="checkbox" name='cat' value='design' id='design' />
              <label htmlFor="design">design</label>
            </div>
            <div className='flex gap-3'>
              <input type="checkbox" name='cat' value='food' id='food' />
              <label htmlFor="food">Food</label>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Write