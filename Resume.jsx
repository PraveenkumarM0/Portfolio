import { Link } from 'react-router-dom';
import Resume from '../Portfolio/assets/resume.jpg';
import myresume from '../Portfolio/assets/Praveenkumar_Full-Stack Developer.pdf'
export default function() {
    
    return <section id="resume" className='flex flex-col md:flex-row bg-secondary px-10 py-10'>
        <div className=' py-5 md:w-1/2 flex  justify-center md:justify-end'data-aos="fade-right" data-aos-duration="2000">
            <img className='w-[300px]' src={Resume}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center text-white' data-aos="fade-left" data-aos-duration="2000">
        <h1 className='text-4xl text-white-800 border-b-4 pt-10 border-[#D9A566] mb-5 w-[170px] font-bold shrikhand-regular'>Resume</h1>
        <p className='pb-5'>You can  view my resume <a className='btn' href={myresume} download='Praveenkumar_Full-Stack Developer'>Download</a></p> <br/> </div>
        </div>
    </section>
}