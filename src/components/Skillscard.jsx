import React from 'react'

const SkillsCard = (props) => {
  return (
    <div className='pr-2 pb-2 md:pr-5 md:pb-4 flex flex-col flex-wrap items-center '>
        <img src={props.data.image} alt={props.data.text} className='w-14 md:w-18' />
        <p className='text-sm'>{props.data.text}</p>
    </div>
  )
}

export default SkillsCard