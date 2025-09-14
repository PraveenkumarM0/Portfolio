import About from '../Portfolio/assets/about.png';

export default function () {
  return (
    <section
      className="flex flex-col md:flex-row bg-primary px-5 py-10 items-center text-center md:text-left"
      id="about"
    >
      <div
        className="py-5 md:w-1/2 flex justify-center"
        data-aos="fade-right" data-aos-duration="2000"
      >
        <img src={About} alt="About Me" className="w-3/4 sm:w-2/3 md:w-full" />
      </div>
      <div
        className="md:w-1/2 flex justify-center"
        data-taos-offset="200"
      >
        <div className="flex flex-col justify-center text-white max-w-2xl">
          <h1 
            className="text-3xl text-white border-b-4 pt-10 border-[#D9A566] mb-8 w-fit mx-auto md:mx-0 font-rubikvinyl" 
            data-aos="fade-up-delay-1000" 
            data-aos-duration="3000"
          >
            About Me
          </h1>
          <p 
            className="pb-5 text-base sm:text-lg leading-relaxed" 
            data-aos="fade-up-delay=2000"  
            data-aos-duration="4000"
          >
            I'm <span className="font-bold text-[#D9A566]">Praveenkumar</span>, a passionate 
            <span className="font-bold text-[#D9A566]"> full-stack web developer</span> with a background in 
            <span className="font-bold text-[#D9A566]"> Computer Science</span> from St. Joseph's College and hands-on training from Credo Systemz.
          </p>
          <p 
            className="pb-5 text-base sm:text-lg leading-relaxed"
            data-aos="fade-up-delay=2000"  
            data-aos-duration="4000"
          >
            My journey in web development began with a strong interest in creating <span className="font-bold text-[#D9A566]">efficient</span> and <span className="font-bold text-[#D9A566]">scalable applications</span>, focusing on both front-end and back-end technologies. I’m skilled in 
            <span className="font-bold text-[#D9A566]"> HTML</span>, <span className="font-bold text-[#D9A566]">CSS</span>, <span className="font-bold text-[#D9A566]">JavaScript</span>, and 
            <span className="font-bold text-[#D9A566]"> React</span> for the front end, and 
            <span className="font-bold text-[#D9A566]"> Java, Spring Boot, MySQL</span> for back-end development.
          </p>
          <p 
            className="pb-5 text-base sm:text-lg leading-relaxed"
            data-aos="fade-up-delay=3000"  
            data-aos-duration="5000"
          >
            As a fresher, I’m excited to apply my knowledge in real-world projects, bringing a balance of <span className="font-bold text-[#D9A566]">creativity</span> and 
             <span className="font-bold text-[#D9A566]"> technical skill</span>. I'm eager to join a dynamic team where I can continue to grow and contribute to building impactful, user-centric applications.
          </p>
        </div>
      </div>
    </section>
  );
}   
