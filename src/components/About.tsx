import React from "react";
import AboutCard from "./AboutCard";
const About: React.FC = () => {
  const text1 = `Nama saya Muhammad Farhan. Saya adalah alumni dari SMK Ma'arif NU 1 Sumpiuh jurusan Teknik Komputer dan Jaringan.`;
  const text2 = `Saya tertarik dengan dunia IT khususnya pemrograman dan kriptografi. Saat ini saya sedang mendalami ReactJS, TailwindCSS, dan NextJS. Saya ingin menjadi seorang Fullstack Web Developer dengan teknologi MERN Stack.`;
  return (
    <section
      id="about"
      className="w-[90%] mx-auto shadow-xl shadow-coral/70 text-slate-700 bg-coral px-8 pt-24 pb-24 mb-6 h-max"
    >
      <h2 className="font-semibold text-center text-xl mb-8 tracking-wide">
        About
      </h2>
      <div className="flex">
        <div className="w-1/2">
          <AboutCard innertext={text1} />
        </div>
        <div className="w-1/2">
          <AboutCard innertext={text2} />
        </div>
      </div>
    </section>
  );
};

export default About;
