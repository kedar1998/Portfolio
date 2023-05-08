import { FiGithub } from "react-icons/fi";
import { RxExternalLink } from "react-icons/rx";

const Card = ({data}) => {

  return (
    <div className={`flex flex-col-reverse md:flex-row justify-between items-center w-full `}>
        {/* section-1 */}
        <div className='w-full md:w-1/2 mt-5 '>
            <h3 className='text-md md:text-lg text-gray '>{data.type}</h3>
            <h1 className='text-3xl md:text-4xl font-bold'>{data.title}</h1>
            <p className='max-w-md my-3 md:my-4 text-[#8B949E] text-sm'>{data.content}</p>
            <div className='flex space-x-3'>
                <a href={data.github} target="_blank" rel="noreferrer"><FiGithub size={25} /></a>
                <a href={data.link} target="_blank" rel="noreferrer"><RxExternalLink size={25} /></a>
            </div>
        </div>

        {/* section-2 */}
        <div className={`w-full md:w-1/2`}>
            <img src={data.image} alt="img" className='' />
        </div>


    </div>
  )
}

export default Card