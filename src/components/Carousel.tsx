import React, { useState, useEffect } from "react";
type Props = {
  children: React.ReactElement | React.ReactElement[];
};
type ItemProps = {
  children: React.ReactNode;
  width?: string;
};

export function CarouselItem({ children, width }: ItemProps) {
  return (
    <div
      className="carousel-item px-3 md:px-0 inline-flex h-[300px]  text-white"
      style={{ width }}
    >
      {children}
    </div>
  );
}

export default function Carousel({ children }: Props) {
  const [index, setIndex] = useState<number>(0);
  const updateIndex = (newIndex: number) => {
    let indexNow = newIndex;
    if (indexNow < 0) {
      indexNow = React.Children.count(children) - 1;
    } else if (indexNow >= React.Children.count(children)) {
      indexNow = 0;
    }
    setIndex(indexNow);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (index < React.Children.count(children) - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }, 3000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });
  return (
    <div className="carousel overflow-hidden  relative">
      <div
        className="prev z-[999] absolute h-8 w-8 grid place-items-center rounded-full text-center left-1 bg-stone-600/50 text-white md:left-[1vw] text-2xl top-[150px] -translate-y-1/2 cursor-pointer"
        onClick={() => updateIndex(index - 1)}
      >
        {"<"}
      </div>
      <div
        className="next z-[99] absolute h-8 w-8 grid place-items-center rounded-full text-center right-1 md:right-[1vw] bg-stone-600/50 text-white text-2xl top-[150px] -translate-y-1/2 cursor-pointer"
        onClick={() => updateIndex(index + 1)}
      >
        {">"}
      </div>
      <div
        className="inner whitespace-nowrap transition-transform duration-300"
        style={{ transform: `translateX(${index * -100}%)` }}
      >
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
    </div>
  );
}
