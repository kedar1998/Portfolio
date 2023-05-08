import hero from '../assets/hero.svg'
import heromobile from '../assets/heromobile.svg'

const Hero = () => {
  return (
    <div id="hero" className="bg-bcg h-screen text-white py-32 px-5  max-w-5xl mx-auto">
        <div className=" flex flex-col md:flex-row justify-between items-center">

            {/* Content */}
            <div className='w-full md:w-1/2 '>
                <div className='font-bold space-y-2 md:space-y-4'>
                    <h1 className='text-3xl md:text-5xl'>Hey, I'm <span className='text-[#009279]'>Kedar!</span></h1>
                    <h1 className='text-3xl md:text-5xl'>Full-Stack Developer</h1>
                </div>
                <p className='py-8 w-full md:max-w-md text-gray text-md'>As a full stack developer, I am like a conductor who can play every instrument in the orchestra. From front-end design to back-end development, I bring together all the pieces to create a harmonious digital experience. </p>
                <a href="#contact" className='bg-blackbutton px-5 py-2 shadow-2xl btn hover:btnHover transition-all ease-in-out duration-500 text-xs font-semibold'>Let's Connect!</a>
            </div>

            {/* IMG */}
            <div className='w-full md:w-1/2 flex justify-center md:justify-end '>
                <img src={hero} alt="hero_img" className='hidden md:block' />
                <img src={heromobile} alt="hero_img" className='block md:hidden mt-5 md:mt-0' />
            </div>

        </div>
    </div>
  )
}

export default Hero