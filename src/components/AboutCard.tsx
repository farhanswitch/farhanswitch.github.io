type Props = {
  innertext?: string;
};
function AboutCard(props: Props) {
  const text =
    props.innertext ||
    `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero unde
      omnis corporis illo deserunt praesentium accusantium ad dolorum cum
      reprehenderit quia, qui blanditiis velit exercitationem!`;
  return <div className="w-full font-sansf px-4 py-2 text-md">{text}</div>;
}

export default AboutCard;
