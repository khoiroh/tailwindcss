import React from 'react'

function CV() {
  return (
    <div className='bg-neutral-400 px-5 py-5 '>
      <h2 className='text-3xl text-center'><b> Curriculum Vitae</b></h2>
      <hr /> <br />

      <div className='flex justify-center'>
      <div>
        <div className='flex justify-center bg-neutral-400 px-5 py-5'>
          <div className=''>
            <h2 className='text-2xl '>Hobby : </h2>
            <hr />
            <li>Cooking</li>
            <li>Reading</li>
            <li>Dating</li>
            <li>To eat</li>
            <br />
            <h2 className='text-2xl '>Pendidikan : </h2>
            <hr />
            <li>TK NEGRI</li>
            <li>SD NEGRI KARABAN 02</li>
            <li>MTs NURUL KHOSYIIN</li>
            <li>SMK BINA NUSANTARA</li>
          </div>
          </div></div>
         
        <img className='w-72 text-center  focus:outline-none focus:ring' src="https://i.pinimg.com/originals/39/ab/1f/39ab1ffb72b122dc19b8a96634663568.jpg" alt="" />
        
        <div className='bg-neutral-400 mt-6 ml-5'>
        <h2 className='text-2xl'>Data Diri</h2>
        <hr />
        <li>Nama : Siti Khikmatul Khoiroh</li>
        <li>Alamat : Pati</li>
        <li>Agama : Islam</li>
        <li>Status : Siswi</li>
        <li>Jenis Kelamin : Perempuan</li>
        <br />
        <div className='gap-5'>
        <h2 className='text-2xl '>Contact Me </h2>
        <hr />
        <li><a href="https://www.instagram.com/"><i class="fab fa-instagram-square"></i> Instagram </a></li>
        <li><a href="https://www.facebook.com/"><i class="fab fa-facebook"></i> Facebook</a></li>
        <li><a href="https://twitter.com/?lang=en-id"><i class="fab fa-twitter"></i> Twitter</a></li>
        </div>
        </div>
    </div>
        </div>
    
  )
}

export default CV