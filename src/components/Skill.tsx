import SkillCard from "./SkillCard";
import React from "react";

export default function Skill() {
  const skills = [
    { name: "HTML", color: "bg-orange-500" },
    { name: "CSS", color: "bg-sky-700" },
    { name: "JavaScript", color: "bg-yellow-300" },
    { name: "Bootstrap", color: "bg-violet-500" },
    { name: "TypeScript", color: "bg-blue-700" },
    { name: "TailwindCSS", color: "bg-sky-300" },
    { name: "NextJS", color: "bg-black" },
    { name: "ReactJS", color: "bg-sky-500" },
    { name: "PHP", color: "bg-cyan-700" },
    {name:"MySQL", color:"bg-orange-500"}
  ];
  return (
    <section id="skills" className="w-full bg-white h-max px-6 pt-20 pb-26">
      <h2 className="text-center font-viga text-xl font-semibold tracking-wide mb-10">
        Skills
      </h2>
      <div className="w-full h-max flex justify-evenly flex-wrap gap-8">
        {skills.map((skill, index): React.ReactNode => {
          return (
            <SkillCard
              name={skill?.name || "skill"}
              color={skill?.color || "bg-black"}
              key={index}
            />
          );
        })}
      </div>
    </section>
  );
}
