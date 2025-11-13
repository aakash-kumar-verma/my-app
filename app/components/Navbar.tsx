import clsx from "clsx";
import { useState } from "react";

type NavbarProps = {
  options: { id: number; title: string }[];
  onClick?: (id: number) => void;
};
export const Navbar = ({ options, onClick }: NavbarProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <nav className="flex items-center px-5">
      {options.map((item, index) => {
        return (
          <button
            key={`nav-item-${item.id}`}
            className={clsx(
              "mx-4 cursor-pointer relative",
              activeIndex === index ? "text-white" : "text-[#404B69]"
            )}
            onClick={() => {
              setActiveIndex(index), onClick && onClick(item.id);
            }}
          >
            {item.title}
            <div
              className={clsx(
                "absolute w-full top-[30px] h-[2px]",
                activeIndex === index ? "bg-[#3EA513]" : "bg-[#404B69]"
              )}
            ></div>
          </button>
        );
      })}
    </nav>
  );
};
