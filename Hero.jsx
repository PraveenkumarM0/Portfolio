import HeroImg from '../Portfolio/assets/pk.jpg';
import { AiOutlineLinkedin, AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai";

export default function Hero() {
    return (
        <section
            id="hero"
            className="flex flex-col md:flex-row w-full max-w-screen min-h-screen py-32 bg-secondary justify-center items-center overflow-hidden"
        >
            <div className="md:w-1/2 flex flex-col pt-12 text-center md:text-left px-4"> 
                <h1
                    className="text-[#F4EBD0] text-6xl font-storyscript" 
                    data-aos="fade-up"
                    data-aos-duration="2000" 
                    data-aos-easing="ease-in-out"
                >
                    Hi, I'm
                    <br />
                    <span className="text-[#D9A566]">P</span>raveen
                    <span className="text-[#D9A566]">K</span>umar
                    <p className="text-2xl text-[#F4EBD0]">Full-stack developer</p>
                </h1>

                <div className="flex justify-center md:justify-start py-10" data-aos="fade-up" data-aos-duration="3000">
                    <a
                        href="https://www.linkedin.com/in/praveenkumarm03/"
                        target="_blank"
                        className="pr-5 hover:text-[#D9A566] text-[#F4EBD0]"
                    >
                        <AiOutlineLinkedin size={40} />
                    </a>
                    <a
                        href="https://instagram.com/"
                        target="_blank"
                        className="pr-5 hover:text-[#D9A566] text-[#F4EBD0]"
                    >
                        <AiOutlineInstagram size={40} />
                    </a>
                    <a
                        href="https://github.com/PraveenkumarM0"
                        target="_blank"
                        className="hover:text-[#D9A566] text-[#F4EBD0]"
                    >
                        <AiOutlineGithub size={40} />
                    </a>
                </div>
            </div>

            <img
                className="md:w-1/4 rounded-lg mx-4" 
                data-aos="fade-up"
                data-aos-duration="3000"
                src={HeroImg}
                alt="Hero"
            />
        </section>
    );
}