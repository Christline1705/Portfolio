import React from 'react'
import html from '../assets/html.jpeg'
import css from '../assets/css.jpeg' 
import javascript  from '../assets/javascript.jpeg'
import boot from '../assets/boot.jpeg'
import react from '../assets/react.jpeg'
const Skills = () => {
  return (
    <div className= 'border border-gray-600 bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-6 place-items-center md:flex md:justify-between md:items-center'>
  
  <h2 className="text-gray-700 text-xl md:text-4xl font-bold m-4">My <br/> Tech <br/> Stack</h2>
 
 <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
  <img src={html} alt='' />
  <p className="mt-2" >HTML</p>
 </div>
 <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
  <img src={css} alt='' />
  <p className="mt-2" >CSS</p>
 </div>
 <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
  <img src={javascript} alt='' />
  <p className="mt-2" >Javascript</p>
 </div>
 <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
  <img src={boot} alt='' />
  <p className="mt-2" >Bootstrap</p>
 </div>
 <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
  <img src={react} alt='' />
  <p className="mt-2" >React</p>
 </div>

    </div>
  )
}

export default Skills

