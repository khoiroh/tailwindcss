import React from 'react'

function Navbar() {
  return (
    <div className='flex bg-slate-900 gap-10 px-3 py-3'>
        <h3 className='gap-10'>
            <a href="/about" className='mr-20 text-white'>About</a>
            <a href="/civi" className='text-white'>CV</a>
        </h3>
    </div>
  )
}

export default Navbar