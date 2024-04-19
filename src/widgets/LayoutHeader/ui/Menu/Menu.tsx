import { FC } from "react";
import { MenuItems } from "../../model/types";
import { Link } from "react-router-dom";

const Menu: FC<MenuItems> = ({ links }: MenuItems) => {
  return (
    <>
      <ul
        tabIndex={0}
        className="px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 font-medium text-slate-700"
      >
        {links.map((link) => (
          <li key={link.name} className="md:inline-block px-6 py-4 rounded-md text-white focus:outline-none focus:text-white focus:bg-gray-700 ">
            <Link to={link.href} className={`${link.selected ? "relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-100 after:transition after:duration-300 after:origin-right" : ""}`}>{link.name}</Link>
          </li>
        ))}
        <Link to="/register">
          <button className="bg-[#6cc4ff] text-[#0b3855] active:bg-pink-600 font-bold text-base px-8 py-4 rounded-lg shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 mt-1 ease-linear transition-all duration-150" type="button">
            Déconnexion
          </button>
        </Link>
      </ul>
    </>
  );
};

export default Menu;
