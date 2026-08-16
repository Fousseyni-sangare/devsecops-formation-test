import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MenuItems, MenuLink } from "../../model/types";
import { useSharedData } from "../../../../context/StateContext";

const Menu: FC<MenuItems> = ({ links }) => {
    const {
        isLoggedIn,
        setIsLoggedIn,
        getProfil,
        setProfil,
    } = useSharedData();

    const navigate = useNavigate();

    function canDisplayLink(link: MenuLink): boolean {
        if (link.href === "/verifier") {
            return true;
        }

        if (!isLoggedIn) {
            return false;
        }

        if (link.href === "/") {
            return true;
        }

        if (link.href === "/digitaliser") {
            return getProfil === "EU";
        }

        if (link.href === "/add-reference") {
            return getProfil === "ES";
        }

        return true;
    }

    function handleLogoutClick() {
        localStorage.removeItem("user");
        setIsLoggedIn(false);
        setProfil("");
        navigate("/");
    }

    const visibleLinks = links.filter(canDisplayLink);

    return (
        <ul className="px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 font-medium text-slate-700">
            {visibleLinks.map((link) => (
                <li
                    key={link.href}
                    className="md:inline-block px-6 py-4 rounded-md text-white focus-within:outline-none focus-within:text-white focus-within:bg-gray-700"
                >
                    <Link
                        to={link.href}
                        aria-current={
                            link.selected ? "page" : undefined
                        }
                        className={
                            link.selected
                                ? "relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-100 after:transition after:duration-300 after:origin-right"
                                : "relative w-fit block"
                        }
                    >
                        {link.name}
                    </Link>
                </li>
            ))}

            {!isLoggedIn && (
                <li className="md:inline-block">
                    <Link
                        to="/login"
                        className="inline-flex bg-[#6cc4ff] text-[#0b3855] active:bg-pink-600 font-bold text-base px-8 py-4 rounded-lg shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 mt-1 ease-linear transition-all duration-150"
                    >
                        Connexion
                    </Link>
                </li>
            )}

            {!isLoggedIn && (
                <li className="md:inline-block">
                    <Link
                        to="/register-choice"
                        className="inline-flex bg-[#6cc4ff] text-[#0b3855] active:bg-pink-600 font-bold text-base px-8 py-4 rounded-lg shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 mt-1 ease-linear transition-all duration-150"
                    >
                        S’enregistrer
                    </Link>
                </li>
            )}

            {isLoggedIn && (
                <li className="md:inline-block">
                    <button
                        type="button"
                        onClick={handleLogoutClick}
                        className="bg-[#6cc4ff] text-[#0b3855] active:bg-pink-600 font-bold text-base px-8 py-4 rounded-lg shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 mt-1 ease-linear transition-all duration-150"
                    >
                        Se déconnecter
                    </button>
                </li>
            )}
        </ul>
    );
};

export default Menu;