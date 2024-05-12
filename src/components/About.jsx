import React from 'react'
import Aboutimg from '../assets/Aboutimg.jpeg'
const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id='about'>
        <div className='md:grid md:grid-cols-2 sm:py-16'>
            <div className='mt-4 md:mt-0 text-left flex'>
                <div className='my-auto mx-6'>
                    <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                    Motivated and Passionate Front end Developer.Proficient in HTML, CSS, JavaScript, React js and Bootstrap with hands-on experience in creating responsive web applications. Skilled in translating design mock-ups into clean, efficient, and maintainable code. 
        Eager to contribute to dynamic teams and passionate about staying updated with the latest web technologies. Ready to leverage my academic background and practical skills to excel as a Front End Developer.
                    </p>
               
        </div>
    </div>
    <img className='mx-auto rounded-3xl py-8 md:py-0' src={Aboutimg} width={300} height={300} />
        </div>
        </div>
  )
}

export default About