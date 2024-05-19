import React from 'react'

const Button = ({onChange, label, onClick}) => {
  return (
    <button onClick={onClick} onChange={onchange} className='middle none center rounded-lg bg-blue-700 py-2 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none '>{label}</button>
  )
}

export default Button