import contact from '../assets/contact.svg'
import contact1 from '../assets/contact1.svg'

import { FaLinkedinIn } from "react-icons/fa";
import { FaFreeCodeCamp } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="bg-bcg h-screen text-white py-32 px-5  max-w-5xl mx-auto flex flex-col justify-center md:justify-between">
        
        <div className='flex justify-center'>
            <div className="relative">
                <img src={contact} alt="my image" />
                <div className="absolute top-0 left-0 w-full h-full flex  items-end justify-start">
                    <h1 className="text-white text-3xl md:text-5xl font-bold max-w-lg text-center leading-10 md:leading-normal">Get In Touch</h1>
                </div>
            </div>
        </div>

        <div className='w-full md:max-w-5xl mx-auto flex flex-col md:flex-row justify-between mt-5 md:ml-8'>

            <div className='w-full md:w-1/2 text-[#8B949E]'>
                <p>Want to connect, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
                <h3 className='text-secondary text-xl md:text-2xl text-[#009279] mt-10 font-semibold'>kedarmakode1598@gmail.com</h3>
                <div className='flex items-center space-x-5 mt-5'>
                    <a href="https://www.linkedin.com/in/kedarmakode/" target='_blank' rel='noreferrer'>
                        <FaLinkedinIn size={25} />
                    </a>
                    <a href="https://www.freecodecamp.org/news/author/kedar/" target='_blank' rel='noreferrer'>
                        <FaFreeCodeCamp size={25} />
                    </a>
                </div>
            </div>

            <div className='w-full md:w-1/2 hidden md:block'>
                <img src={contact1} alt="contact assets" className='' />
            </div>

        </div>
        
    </div>
  )
}

export default Contact