import about from '../assets/about.svg'
import about1 from '../assets/about1.svg'
import profile from '../assets/profile.svg'
import profilemobile from '../assets/profilemobile.svg'

const About = () => {
  return (
    <div id="about" className="bg-bcg h-screen text-white py-32 px-5  max-w-5xl mx-auto">

<div className='w-full h-full flex flex-col-reverse md:flex-row'>

{/* CONTENT */}
<div className=' w-full md:w-1/2'>

    <div className='flex justify-center'>
        <div className="relative">
            <img src={about} alt="my image" />
            <div className="absolute top-0 left-0 w-full h-full flex  items-end justify-start">
                <h1 className="text-white text-3xl md:text-5xl font-bold max-w-lg text-left leading-10 md:leading-normal">About</h1>
            </div>
        </div>
    </div>

    <div className='mt-10'>
        <div className='text-[#3A3F4A] font-semibold'>
            {/* <Typewriter options={{strings: ['Hello', 'World'],autoStart: true,loop: true,}}/> */}
        </div>
        <p className='my-5 text-[#8B949E] '>As a full stack developer, I love the challenge of building applications from the ground up and seeing them come to life. I especially enjoy the process of designing the user interface, creating the back-end architecture, and integrating the two to create a seamless and user-friendly experience. This is something I find incredibly rewarding and satisfying.Whether I'm writing code in JavaScript or working with databases in SQL, I thrive on constantly learning and adapting to new technologies.</p>
    </div>

    <img src={about1} alt="about_assets" className='mt-20 mx-auto hidden md:block' />

</div>

{/* IMAGE */}
<div className=' w-full md:w-1/2 flex justify-center mb-10 '>
    <img src={profile} alt="profile" className='hidden md:block pr-2 pb-2 rounded-lg border-r border-b border-gray shadow-gray shadow-sm ' />
    <img src={profilemobile} alt="profile" className='block md:hidden w-52' />
</div>



</div>

    </div>
  )
}

export default About