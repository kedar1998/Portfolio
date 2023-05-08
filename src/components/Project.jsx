import { useState, useEffect } from 'react'
import project from '../assets/project.svg'
import Card from './Card'
import ecommerce from '../assets/ecommerce.svg'
import jobs from '../assets/jobs.svg'

const slidesData = [
    {
        type: "Jobs Tracking Application",
        title: "Jobs",
        content: " Jobs is a web application that allows users to keep track of their job applications in a single, organized platform. The application is built using the MERN tech stack. The Jobs Application Tracker project aims to provide a seamless and intuitive way for users to manage and organize their job applications.",
        github: "https://github.com/kedar1998/Jobs",
        link: "https://jobs-mv74.onrender.com",
        image: jobs
    },
    {
        type: "E-commerce Application",
        title: "E-commerce",
        content: "E-commerce website built with React.js that utilizes ContextAPI and useReducer for state management. It features a homepage that displays a variety of products, which can be filtered by category. The use of ContextAPI and useReducer for state management ensures that the website remains fast and responsive even as the user interacts with it.",
        github: "https://github.com/kedar1998/Ecommerce-react.js-",
        link: "https://ecommerce1001.netlify.app/",
        image: ecommerce
    },
]

const Project = () => {

    const [slide, setSlide] = useState(0)

    

  return (
    <div id="project" className="bg-bcg  text-white py-32 px-5  max-w-5xl mx-auto">
        
        <div className='flex justify-center'>
            <div className="relative">
                <img src={project} alt="my image" />
                <div className="absolute top-0 left-0 w-full h-full flex  items-end justify-center">
                    <h1 className="text-white text-3xl md:text-5xl font-bold max-w-lg text-center leading-10 md:leading-tight">Portfolio & Previous Projects</h1>
                </div>
            </div>
        </div>

        <div>
            <p className='mt-5 mb-10 md:mb-20 w-full md:max-w-2xl text-left md:text-center mx-auto text-gray'>
                As a full-stack developer, I have created a diverse range of projects. Visit <a href="https://github.com/kedar1998" target='_blank' rel="noreferrer" className='text-[#009279] font-bold underline'>github</a> if you would like to see more examples of my work than what is displayed on this website! 

                <p className='text-[14px] text-[#717d8a]'>"But beware, you may also find some of my failed experiments too!"</p>
            </p>
            
            <Card data={slidesData[slide]} />
            <div className='flex justify-center space-x-2 mt-5'>
                <button type='button' onClick={() => setSlide(0)} className={` h-1 ${slide === 0 ? 'w-8 bg-white' : 'w-4 bg-gray'} rounded-md transition-all ease-in-out duration-300`}></button>
                <button type='button' onClick={() => setSlide(1)} className={` h-1 ${slide === 1 ? 'w-8 bg-white' : 'w-4 bg-gray'} rounded-md transition-all ease-in-out duration-300`}></button>
            </div>
        </div>
        
    </div>
  )
}

export default Project