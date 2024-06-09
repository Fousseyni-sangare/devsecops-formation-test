import { FC, useState } from "react";
import { MenuItems } from "../../model/types";
import { useSharedData } from '../../../../context/StateContext'
import { Link, useNavigate, useLocation } from 'react-router-dom'
// const Menu: FC<MenuItems> = ({ links }: MenuItems) => {
  const Menu: FC = () => {
  const { isLoggedIn, setIsLoggedIn, getProfil, setProfil } = useSharedData();
  const navigate = useNavigate();
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  // adding the states 
  const [isActive, setIsActive] = useState(false);
  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false)
  }
  const handleLogoutClick = () => {
    if (isLoggedIn) {
        localStorage.removeItem('user')
        setIsLoggedIn(false)
        setProfil("")
        navigate('/')
    }
  }
  return (
    <>
      <ul
        tabIndex={0}
        className="px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 font-medium text-slate-700"
      >
        {/* {links.map((link) => (
          <li key={link.name} className="md:inline-block px-6 py-4 rounded-md text-white focus:outline-none focus:text-white focus:bg-gray-700 ">
            <Link to={link.href} className={`${link.selected ? "relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-100 after:transition after:duration-300 after:origin-right" : ""}`}>{link.name}</Link>
          </li>
        ))} */}
        { isLoggedIn &&
        <li className="md:inline-block px-6 py-4 rounded-md text-white focus:outline-none focus:text-white focus:bg-gray-700 ">
          <Link to="/" className={`${splitLocation[1] === "" ? "relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-100 after:transition after:duration-300 after:origin-right" : ""}`}>Accueil</Link>
        </li>}
        { isLoggedIn && getProfil=="EU" &&
        <li className="md:inline-block px-6 py-4 rounded-md text-white focus:outline-none focus:text-white focus:bg-gray-700 ">
          <Link to="/digitaliser" className={`${splitLocation[1] === "digitaliser" ? "relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-100 after:transition after:duration-300 after:origin-right" : ""}`}>Digitaliser</Link>
        </li>}
        { isLoggedIn && getProfil=="ES" &&
        <li className="md:inline-block px-6 py-4 rounded-md text-white focus:outline-none focus:text-white focus:bg-gray-700 ">
          <Link to="/add-reference" className={`${splitLocation[1] === "add-reference" ? "relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-100 after:transition after:duration-300 after:origin-right" : ""}`}>Référence</Link>
        </li>}
        <li className="md:inline-block px-6 py-4 rounded-md text-white focus:outline-none focus:text-white focus:bg-gray-700 ">
          <Link to="/verifier" className={`${splitLocation[1] === "verifier" ? "relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-100 after:transition after:duration-300 after:origin-right" : ""}`}>Vérifier</Link>
        </li>
        { !isLoggedIn &&
        <Link to="/login">
          <button className="bg-[#6cc4ff] text-[#0b3855] active:bg-pink-600 font-bold text-base px-8 py-4 rounded-lg shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 mt-1 ease-linear transition-all duration-150" type="button">
            Connexion
          </button>
        </Link>}
        { !isLoggedIn &&
        <Link to="/register-choice">
          <button className="bg-[#6cc4ff] text-[#0b3855] active:bg-pink-600 font-bold text-base px-8 py-4 rounded-lg shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 mt-1 ease-linear transition-all duration-150" type="button">
            s'enregistrer
          </button>
        </Link>}
        { isLoggedIn &&
          <button className="bg-[#6cc4ff] text-[#0b3855] active:bg-pink-600 font-bold text-base px-8 py-4 rounded-lg shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 mt-1 ease-linear transition-all duration-150" type="button" onClick={handleLogoutClick}>
            se déconnecter
          </button>}
      </ul>
    </>
  );
};

export default Menu;
