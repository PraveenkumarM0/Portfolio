import img1 from '../Portfolio/assets/ecommerce-websites.jpg'
import img2 from '../Portfolio/assets/website-2.avif'
import img3 from '../Portfolio/assets/Weather.jpg'
import img4 from '../Portfolio/assets/Todo.jpg'
import img5 from '../Portfolio/assets/St.jpg'



export default function () {
    return <section id='project' className="flex flex-col py-10 px-5 justify-center bg-primary  text-white">
        <div className="w-1/2 ">
            <div className="flex px-10" data-aos="fade-right" data-aos-duration="2000">
                <h1 className='text-4xl text-gray-800 border-b-4 pt-10 border-[#8f8ff9] mb-5 w-[150px] font-bold shrikhand-regular' >Projects </h1>
            </div>

        </div>
        <div className="w-full" data-aos="fade-left" data-aos-duration="3000">
            <div className='flex flex-col md:flex-row px-10 gap-5 '>
                <div className='relative'>
                    <img className='h-[300px] w-[500px]' src={img1} />
                    <div className='project-dec'>
                        <p className='text-center px-5 py-5'>E-Commerce website. Built with React.js </p>
                        <div className='flex justify-center'> 
                        <a className='text-center  px-5 py-2.5 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm  mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 ' href='https://github.com/PraveenkumarM0'>
                           View Project
                        </a>
                        </div>
                    </div>

                </div>
                <div className='relative'>
                    <img className='h-[300px] w-[500px]' src={img2} />
                    <div className='project-dec'>
                        <p className='text-center px-5 py-5'>E-Commerce website.</p>
                        <div className='flex justify-center'>
                        <a className='text-center  focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-3 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 ' 
                        href='https://github.com/PraveenkumarM0'>
                            View project
                        </a>
                        </div>
                    </div>


                </div>
                <div className='relative'>
                    <img className='h-[300px] w-[500px]' src={img4} />
                    <div className='project-dec'>
                        <p className='text-center px-5 py-5'>To-Do List</p>
                        <div className='flex justify-center'>
                        <a className='text-center  focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-3 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'
                         href='https://github.com/PraveenkumarM0'>
                            View project
                        </a>
                        </div>
                    </div>


                </div>
                <div className='relative'>
                    <img className='h-[300px] w-[500px]' src={img3} />
                    <div className='project-dec'>
                        <p className='text-center px-5 py-5'>Weather App </p>
                        <div className="flex justify-center"> 
                            <a
                                className='focus:outline-none text-white bg-purple-700 hover:bg-purple-800 
        focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm 
        px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 
        dark:focus:ring-purple-900'
                                href='https://github.com/PraveenkumarM0'
                            >
                                View project
                            </a>
                        </div>
                    </div>

            </div>
            <div className='relative'>
                <img className='h-[300px] w-[500px]' src={img5} />
                <div className='project-dec'>
                    <p className='text-center px-5 py-5'>Student Management</p>
                    <div className='flex justify-center'> 
                    <a className='text-center  focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-3 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 ' 
                    href='https://github.com/PraveenkumarM0'>
                    View project
                    </a>
                    </div>
                </div>


            </div>
        </div>
    </div>
    </section >
}