import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center bg-primary pt-20 pb-20 text-[#F4EBD0]"
    >
      <div className="flex flex-col items-center w-full max-w-2xl" data-aos="zoom-in-down" data-aos-duration="2000">
        <h1 className="text-4xl border-b-4 border-[#D9A566] mb-8  tracking-wide font-bold shrikhand-regular ">
          Contact
        </h1>
        <p className="pb-8 text-center text-lg">
          Let’s get in touch! Feel free to reach out to discuss more in detail.
        </p>

        <div className="w-full bg-[#2C567A] p-6 rounded-xl shadow-lg">
          <p className="py-4 flex items-center text-lg">
            <span className="font-bold flex items-center text-[#D9A566]">
              <IoMdMail className="mr-3 text-xl" />
              Email:
            </span>
            <span className="ml-4 text-[#F4EBD0]">pravenmurugan1503@gmail.com</span>
          </p>

          <p className="py-4 flex items-center text-lg">
            <span className="font-bold flex items-center text-[#D9A566]">
              <FaPhone className="mr-3 text-xl" />
              Phone:
            </span>
            <span className="ml-4 text-[#F4EBD0]">6380824956</span>
            <button></button>
          </p>
        </div>
      </div>
    </section>
  );
}
