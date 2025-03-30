import img1 from '../Portfolio/assets/ecommerce-websites.jpg'
import img2 from '../Portfolio/assets/website-2.avif'



export default function(){
    return<section id='project' className="flex flex-col py-10 px-5 justify-center bg-primary  text-white">
        <div className="w-1/2 ">
        <div className="flex px-10"data-aos="fade-right" data-aos-duration="2000">
        <h1 className='text-4xl text-gray-800 border-b-4 pt-10 border-[#8f8ff9] mb-5 w-[150px] font-bold shrikhand-regular' >Projects </h1>
       </div>
   
        </div>
        <div className="w-full" data-aos="fade-left" data-aos-duration="3000">
        <div className='flex flex-col md:flex-row px-10 gap-5 '>
            <div className='relative'>
            <img className='h-[300px] w-[500px]' src={img1}/>
            <div className='project-dec'>
                <p className='text-center px-5 py-5'>E-Commerce website. Built with React.js </p>
            </div>

            </div>
            <div className='relative'>
            <img className='h-[300px] w-[500px]' src={img2}/>
            <div className='project-dec'>
                <p className='text-center px-5 py-5'>E-Commerce website.built with HTML,CSS</p>
            </div>

            </div>
        </div>    
        </div>
    </section>
}