import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const Write = () => {

  const [value, setValue] = useState('');
  console.log(value)

  return (
    <section className=' w-full flex items-start my-[5rem]  px-[10rem]'>
      <div className=' flex flex-col gap-[5rem] w-2/3'>
        <input type="text" placeholder='Title...' className=' border-[1.5px] border-slate-800 py-1 px-1 focus:outline-none placeholder:ml-[1rem] focus:border-indigo-700 '/>
        <div>
          <ReactQuill theme="snow" value={value} onChange={setValue} />;
        </div>
      </div>
      <div className=' w-1/3 mx-auto flex flex-col justify-center items-center gap-[1rem]'>
        <div>item1</div>
        <div>item2</div>
      </div>
    </section>
  )
}

export default Write