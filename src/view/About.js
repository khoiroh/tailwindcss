import React from 'react'

function About() {
  return (
    <div >
      <div className='flex justify-center gap-5 bg-red-300 px-5 py-5'>
      <button class="w-15 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
      <img className='w-23 text-center ' src="https://i.pinimg.com/originals/39/ab/1f/39ab1ffb72b122dc19b8a96634663568.jpg" alt="" />
    </button>
      <div className=''>
      <h2 className='text-center text-3xl bg-red-400 '>About Me <i class="fas fa-address-card"></i></h2>

      <h2 className='text-2xl text-center'><i>_Khoir_</i> </h2>
      <br />
        <p className='flex justify-center'>hi
        Introducing my name is Siti Khikmatul Khoiroh, usually called Khoir. I come from Pati Regency, but...
        I was born in Jangga Aur, Muara Bulian , Sumatra in 2006. I have two younger brothers, chamdan and habib. Nice names, right?...
        My first sister is in the same class as me, but the age difference is that my second sister is still in grade 1 elementary school.
        My first sister is a shy and quiet type, but when she is with other families she becomes talkative.
       </p>
        
      </div>
  </div>
    </div>
  )
}    

export default About