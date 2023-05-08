import blog from '../assets/blog.svg'
import BlogCards from './BlogCards'

const blogObj = [
    {
        type: "Asynchronous JavaScript",
        title: "How Asynchronous JavaScript Works",
        content: "In this blog, we will explore the fundamentals of asynchronous programming in JavaScript and how it can be leveraged to improve performance and user experience."
    },
    {
        type: "Object Oriented Programming",
        title: "Object-Oriented Programming in JavaScript",
        content: "we will delve into how OOP can be implemented in JavaScript, including key concepts such as classes, objects, inheritance, polymorphism and encapsulation."
    },
    {
        type: "Document Object Model",
        title: "What is the DOM? A Behind-the-Scenes Guide",
        content: "The Document Object Model is a fundamental concept in web development, providing a structured representation of HTML documents that can be manipulated using JavaScript. "
    },
]

const Blog = () => {
  return (
    <div id="blog" className="bg-bcg h-screen text-white py-20 md:py-32 px-5  max-w-5xl mx-auto">

        <div className='flex justify-center'>
            <div className="relative">
                <img src={blog} alt="my image" />
                <div className="absolute top-0 left-0 w-full h-full flex  items-end justify-center">
                    <h1 className="text-white text-3xl md:text-5xl font-bold max-w-lg text-center leading-10 md:leading-normal">My Writings</h1>
                </div>
            </div>
        </div>

        <div className='max-w-2xl text-left md:text-center mx-auto text-[#8B949E]'>
            <p className='my-5'>I write, sometimes about frontend dev, learning and backend dev. To read more, you can follow me on <span className='text-[#009279] underline font-bold'><a href="https://www.freecodecamp.org/news/author/kedar/" target='_blank' rel='noreferrer'>Freecodecamp</a></span></p>
        </div>

        <div className='w-full flex flex-col md:flex-row md:space-x-5 space-x-0 space-y-2 md:space-y-0 justify-center items-center my-8'>
            {
                blogObj.map((item, index) =>{
                    return (
                        <BlogCards key={index} data={item} />
                    )
                })
            }
        </div>

        <a href="https://www.freecodecamp.org/news/author/kedar/" target='_blank' rel='noreferrer'>
        <button className='bg-blackbutton px-6 flex justify-between items-center space-x-4 py-2 shadow-2xl btn hover:btnHover transition-all ease-in-out duration-500 md:mx-auto text-xs'>
            Read More
        </button>
        </a>

    </div>
  )
}

export default Blog