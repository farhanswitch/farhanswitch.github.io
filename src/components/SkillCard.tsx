interface CardProps {
  name: string;
  color: string;
}
export default function SkillCard({ name, color }: CardProps) {
  return (
    <div className="bg-[#fdfdfd] border border-slate-100/85 w-[10rem] h-16 p-2 shadow-lg flex">
      <div className={`w-1 h-full ${color} rounded-lg`}></div>
      <div className="font-sansf flex-1 h-full grid place-items-center">
        {name}
      </div>
    </div>
  );
}
