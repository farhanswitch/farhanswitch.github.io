import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="text-sansf text-base py-3" id="contact">
      <h2 className="text-center text-2xl mb-14">Contact Me</h2>
      <div className="block md:flex justify-evenly items-center mb-14">
        <div className="w-max p-3 rounded-tl-3xl rounded-b-3xl mx-auto mb-6 md:m-0  grid place-items-center h-full bg-violet-700/60">
          <img
            src="/farhan.webp"
            alt="Farhan"
            width="200"
            height="200"
            className="rounded-t-xl rounded-b-xl"
          />
        </div>
        <div className="flex items-center">
          <ul className="block mx-auto font-sansf">
            <a href="mailto://farhansketch@icloud.com">
              <li className="mb-2 px-4 py-2 border text-center bg-brandy shadow-lg shadow-brandy/60 text-white rounded-md flex items-center gap-2">
                <div className="p-2 bg-white text-2xl text-slate-600 rounded">
                  <MdEmail />
                </div>
                <p className="md:tracking-widest">farhansketch@icloud.com</p>
              </li>
            </a>
            <a href="mailto://muhammad_farhan@outlook.co.id">
              <li className="mb-2 px-4 py-2 border text-center bg-delRio shadow-lg shadow-delRio/60 text-white rounded-md flex items-center gap-2">
                <div className="p-2 bg-white text-2xl text-slate-600 rounded">
                  <MdEmail />
                </div>
                <p className="md:tracking-widest">
                  muhammad_farhan@outlook.co.id
                </p>
              </li>
            </a>
            <a href="https://linkedin.com/in/farhanswitch">
              <li className="mb-2 px-4 py-2 border text-center bg-lynch shadow-lg shadow-lynch/60 text-white rounded-md flex items-center gap-2">
                <div className="p-2 bg-white text-2xl text-slate-600 rounded">
                  <BsLinkedin />
                </div>
                <p className="md:tracking-widest">FarhanSwitch</p>
              </li>
            </a>
            <a href="https://github.com/farhanswitch">
              <li className="mb-2 px-4 py-2 border text-center bg-lightSteelBlue shadow-lg shadow-lightSteelBlue/60 text-white rounded-md flex items-center gap-2">
                <div className="p-2 bg-white text-2xl text-slate-600 rounded">
                  <FaGithub />
                </div>
                <p className="md:tracking-widest">FarhanSwitch</p>
              </li>
            </a>
          </ul>
        </div>
      </div>
    </section>
  );
}
