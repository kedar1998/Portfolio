import skills from '../assets/skills.svg'
import SkillsCard from './Skillscard'
import html from '../assets/skillsicon/html.svg'
import css from '../assets/skillsicon/css.svg'
import expressjs from '../assets/skillsicon/expressjs.svg'
import git from '../assets/skillsicon/git.svg'
import github from '../assets/skillsicon/github.svg'
import javascript from '../assets/skillsicon/javascript.svg'
import mongodb from '../assets/skillsicon/mongodb.svg'
import mysql from '../assets/skillsicon/mysql.svg'
import nodejs from '../assets/skillsicon/nodejs.svg'
import react from '../assets/skillsicon/react.svg'
import restapi from '../assets/skillsicon/restapi.svg'
import typescript from '../assets/skillsicon/typescript.svg'

const iconObj = [
    {
        image: html,
        text: "HTML"
    },
    {
        image: css,
        text: "CSS"
    },
    {
        image: javascript,
        text: "JavaScript"
    },
    {
        image: typescript,
        text: "TypeScript"
    },
    {
        image: react,
        text: "React"
    },
    {
        image: nodejs,
        text: "Node"
    },
    {
        image: expressjs,
        text: "Express"
    },
    {
        image: mongodb,
        text: "MongoDB"
    },
    {
        image: mysql,
        text: "MySQL"
    },
    {
        image: git,
        text: "Git"
    },
    {
        image: github,
        text: "Github"
    },
    {
        image: restapi,
        text: "REST API"
    },
]


const Skills = () => {
  return (
    <div id="skills" className="bg-bcg h-screen text-white py-24 md:py-28 px-5  max-w-5xl mx-auto">

        <div className='flex justify-center'>
            <div className="relative">
                <img src={skills} alt="my image" />
                <div className="absolute top-0 left-0 w-full h-full flex  items-end justify-center">
                    <h1 className="text-white text-3xl md:text-5xl font-bold max-w-lg text-center leading-10 md:leading-normal">Skills & Experience</h1>
                </div>
            </div>
        </div>

        <div className='max-w-2xl text-left md:text-center mx-auto text-[#8B949E]'>
            <p className='my-5'>
            As a full stack developer, I can seamlessly navigate front-end and back-end technologies, creating intuitive, responsive applications. My skills as a full stack developer allow me to design and implement complex systems with ease, ensuring seamless integration across all layers of the application.
            </p>
        </div>

        <div className='mt-10  mx-auto'>
            <div className='w-full md:max-w-lg mx-auto flex flex-wrap justify-center items-center'>
                {
                    iconObj.map((item, index) =>{
                        return (
                            <SkillsCard key={index} data={item} />
                        )
                    })
                }
            </div>
        </div>

    </div>
  )
}

export default Skills