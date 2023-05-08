import React from 'react'

const BlogCards = ({data}) => {
  return (
    <div className='w-full border border-slate-800 p-2 md:p-5 rounded-md bg-gradient-to-tl from-[#12171F] to-[#0D1117]'>
        <div className=''>
            <h4 className='text-[#3A3F4A] text-md md:text-lg font-semibold'>{data.type}</h4>
            <h2 className='text-lg md:text-lg my-1 md:my-4'>{data.title}</h2>
            <p className='text-[#8B949E] text-sm md:text-sm'>{data.content}</p>
        </div>
    </div>
  )
}

export default BlogCards