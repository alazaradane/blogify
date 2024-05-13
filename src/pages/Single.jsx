import React from 'react'
import { Delete, Edit } from '../assets/images'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

const Single = () => {
  const imgPost = 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  const imgUser = 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww'
  return (
    <section className=' ml-[6rem] flex items-start '>
      <div className=' flex flex-col w-2/3 ml-[3rem]  my-4'>
        <div className=' my-4'>
          <img src={imgPost} className=' w-[40rem] h-[25rem]'/>
        </div>
        <div className=' flex my-[2rem] gap-3'>
          <div className=' flex'>
            <img src={imgUser} className=' w-[4rem] h-[4rem] rounded-full'/>
          </div>
          <div>
            <p className=' font-bold'>John</p>
            <p>Posted 2 day ago</p>
          </div>
          <div className=' flex gap-2'>
           <Link to={`/write?edit=2`}><img src={Edit} className=' cursor-pointer w-[1.5rem] h-[1.5rem] rounded-full'/></Link>
            <Link><img src={Delete} className=' cursor-pointer w-[1.5rem] h-[1.5rem] rounded-full'/></Link>
          </div>
        </div>
        <div className=' flex flex-col w-2/3 '>
          <p className=' text-4xl font-bold my-4'>Lorem ipsum dolor sit amet.</p>
          <div className=' text-start'>
            <p className=' text-slate-800 leading-[1.6rem]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Numquam itaque et eaque ipsa aspernatur animi dolorum aliquid sint debitis 
              assumenda natus tenetur, voluptate facere! Exercitationem, 
              sint error unde tempore architecto culpa. Harum dolor minus cupiditate!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Assumenda excepturi natus quos incidunt deserunt aspernatur 
              nulla nobis odit possimus quidem sit recusandae porro distinctio 
              tempora pariatur culpa dolore dignissimos laudantium, quasi officia unde. 
              Soluta magnam ipsa, consequuntur officiis sunt illo?
              <br/>
              <br/>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Numquam itaque et eaque ipsa aspernatur animi dolorum aliquid sint debitis 
              assumenda natus tenetur, voluptate facere! Exercitationem, 
              sint error unde tempore architecto culpa. Harum dolor minus cupiditate!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Assumenda excepturi natus quos incidunt deserunt aspernatur 
              nulla nobis odit possimus quidem sit recusandae porro distinctio 
              tempora pariatur culpa dolore dignissimos laudantium, quasi officia unde. 
              Soluta magnam ipsa, consequuntur officiis sunt illo?
              <br/>
              <br/>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Numquam itaque et eaque ipsa aspernatur animi dolorum aliquid sint debitis 
              assumenda natus tenetur, voluptate facere! Exercitationem, 
              sint error unde tempore architecto culpa. Harum dolor minus cupiditate!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Assumenda excepturi natus quos incidunt deserunt aspernatur 
              nulla nobis odit possimus quidem sit recusandae porro distinctio 
              tempora pariatur culpa dolore dignissimos laudantium, quasi officia unde. 
              Soluta magnam ipsa, consequuntur officiis sunt illo?
              <br/>
              <br/>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Numquam itaque et eaque ipsa aspernatur animi dolorum aliquid sint debitis 
              assumenda natus tenetur, voluptate facere! Exercitationem, 
              sint error unde tempore architecto culpa. Harum dolor minus cupiditate!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Assumenda excepturi natus quos incidunt deserunt aspernatur 
              nulla nobis odit possimus quidem sit recusandae porro distinctio 
              tempora pariatur culpa dolore dignissimos laudantium, quasi officia unde. 
              Soluta magnam ipsa, consequuntur officiis sunt illo?
            </p>
          </div>
        </div>
      </div>
      <div className=' w-1/3 -ml-[2rem] mr-[3rem] flex my-4'>
        <Menu/>
      </div>
    </section>
  )
}

export default Single