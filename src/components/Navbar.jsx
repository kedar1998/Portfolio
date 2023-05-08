import logo from '../assets/logo.svg'
import resume from '../assets/KMakodeResume.pdf'
import {Link} from 'react-scroll'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';


const menuItems = [
    {
        id: "hero",
        text: "HOME"
    },
    {
        id: "project",
        text: "PROJECT"
    },
    {
        id: "about",
        text: "ABOUT"
    },
    {
        id: "skills",
        text: "SKILLS"
    },
    {
        id: "blog",
        text: "BLOG"
    },
    {
        id: "contact",
        text: "CONTACT"
    },
]

const Navbar = () => {


    const [navOpen, setNavOpen] = useState(false)


  return (
    <div className="text-white py-4  w-full fixed top-0 left-0 bg-black/40 backdrop-blur-lg z-50">
        {/* NAVBAR CONTAINER FOR BIG SCREEN*/}
        <nav className='hidden md:flex justify-between items-center max-w-6xl mx-auto px-10'>

            {/* LOGO */}
            <div>
            <Link to="hero" spy={true} smooth={true} offset={0} duration={800} delay={500} className='cursor-pointer'>
                <img src={logo} alt="logo" />
            </Link>
            </div>

            {/* CENTER MENU */}
            <div className='flex items-center space-x-10'>
                {
                    menuItems.map((item, index) =>{
                        return (
                            <Link key={index} activeClass="active" to={item.id} spy={true} smooth={true} offset={0} duration={800} delay={500} className='text-gray text-sm cursor-pointer hover:text-white transition-all duration-500 tracking-wider'>{item.text}</Link>
                        )
                    })
                }
            </div>

            {/* RESUME DOWNLOAD BUTTON */}
            <div>
                <a rel='noreferrer' href={resume} target='_blank' className='btn-resume px-4 py-1 text-sm transition-all duration-500 tracking-wider'>RESUME</a>
            </div>

        </nav>

        {/* NAVBAR CONTAINER FOR SMALL SCREEN*/}
        <nav className='flex md:hidden px-5'>

            {/* NAVIGATION LOGO AND HAMBURGER MENU */}
            <div className='w-full flex items-start justify-between'>
                <img src={logo} alt="logo" />
                <GiHamburgerMenu size={30} className='transition-all duration-1000' onClick={() => setNavOpen(true)} />
            </div>

            {/* MOBILE MENU */}
            <div className={`absolute top-0 bottom-0 h-screen bg-bcg inset-0 ${navOpen ? 'flex' : 'hidden'} flex-col px-5 py-4`}>
                <div className='flex justify-between '>
                    <img src={logo} alt="logo" />
                    <AiOutlineClose size={30} className='transition-all duration-1000' onClick={() => setNavOpen(false)} />
                </div>
                <div className='flex flex-col space-y-5 justify-center items-center h-full'>
                {
                    menuItems.map((item, index) =>{
                        return (
                            <Link key={index} activeClass="active" to={item.id} spy={true} smooth={true} offset={0} duration={800} delay={500} className='text-gray text-xl cursor-pointer hover:text-white transition-all duration-500' onClick={() => setNavOpen(false)}>{item.text}</Link>
                        )
                    })
                }
                <a rel='noreferrer' href={resume} target='_blank' className='text-gray-500 text-xl cursor-pointer hover:text-white transition-all duration-500'>RESUME</a>
                </div>
            </div>

        </nav>

    </div>
  )
}

export default Navbar