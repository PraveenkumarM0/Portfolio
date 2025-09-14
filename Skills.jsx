import React from "react";
import logo from './assets/html.png';
import logo2 from './assets/css.png';
import logo3 from './assets/bootstrap.png';
import logo4 from './assets/tailwind css.png';
import logo5 from './assets/js.png';
import logo6 from './assets/React js.png';
import logo7 from './assets/java.png';
import logo8 from './assets/spring.png';
import logo9 from './assets/sql.png';
import logo10 from './assets/github.png';

function Skills() {
  return (
    <section
      className="flex flex-col bg-secondary px-5 py-20 items-center w-full overflow-hidden"
      id="skills"
    >
      <div className="text-center">
        <h1
          className="text-4xl text-white font-rubikvinyl hover:scale-105 transition-transform duration-300"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
        >
          Skills
        </h1>
  
      </div>


      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-12 md:gap-16 w-full max-w-screen-lg mx-auto mt-16"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {[
          { src: logo, alt: "HTML", title: "HTML" },
          { src: logo2, alt: "CSS", title: "CSS" },
          { src: logo3, alt: "Bootstrap", title: "Bootstrap" },
          { src: logo4, alt: "Tailwind CSS", title: "Tailwind CSS" },
          { src: logo5, alt: "JavaScript", title: "JavaScript" },
          { src: logo6, alt: "React JS", title: "React JS" },
          { src: logo7, alt: "Java", title: "Java" },
          { src: logo8, alt: "Spring Boot", title: "Spring Boot" },
          { src: logo9, alt: "SQL", title: "SQL" },
          { src: logo10, alt: "GitHub", title: "GitHub" },
        ].map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 bg-[#1E1E1E] rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group relative"
          >
          
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#D9A566] to-[#F4EBD0] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <img
              src={skill.src}
              alt={skill.alt}
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-4 group-hover:scale-110 transition-transform duration-300"
              title={skill.title}
            />
            <p className="text-white text-sm sm:text-base font-medium mt-2">
              {skill.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;