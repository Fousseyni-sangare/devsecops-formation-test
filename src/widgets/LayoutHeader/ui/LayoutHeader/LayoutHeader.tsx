import { FC, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Menu from "../Menu/Menu";

type NavigationLink = {
    name: string;
    href: string;
    selected: boolean;
};

const LayoutHeader: FC = () => {
    const [showMobileMenu, setShowMobileMenu] =
        useState(false);

    const location = useLocation();

    const navigationLinks: NavigationLink[] = [
        {
            name: "Accueil",
            href: "/",
            selected: location.pathname === "/",
        },
        {
            name: "Digitaliser",
            href: "/digitaliser",
            selected:
                location.pathname === "/digitaliser",
        },
        {
            name: "Référence",
            href: "/reference",
            selected: location.pathname === "/reference",
        },
        {
            name: "Vérifier",
            href: "/verifier",
            selected:
                location.pathname === "/verifier" ||
                location.pathname.startsWith("/verif"),
        },
    ];

    function closeMobileMenu() {
        setShowMobileMenu(false);
    }

    function toggleMobileMenu() {
        setShowMobileMenu((currentValue) => !currentValue);
    }

    return (
        <header>
            <nav
                className="bg-[#0b3855] border-b-2 border-white"
                aria-label="Navigation principale"
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between h-24 px-4 border-b border-solid border-slate-600">
                    <div className="flex-shrink-0 font-bold tracking-wider text-3xl text-white">
                        <Link
                            to="/"
                            onClick={closeMobileMenu}
                            aria-label="KibaroCert — Accueil"
                        >
                            KibaroCert
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <Menu links={navigationLinks} />
                    </div>

                    <button
                        type="button"
                        className="md:hidden bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white transition duration-150 ease-in-out"
                        onClick={toggleMobileMenu}
                        aria-expanded={showMobileMenu}
                        aria-controls="mobile-navigation"
                        aria-label={
                            showMobileMenu
                                ? "Fermer le menu"
                                : "Ouvrir le menu"
                        }
                    >
                        {showMobileMenu ? (
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18 18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>

                {showMobileMenu && (
                    <div
                        id="mobile-navigation"
                        className="md:hidden"
                        onClick={closeMobileMenu}
                    >
                        <Menu links={navigationLinks} />
                    </div>
                )}
            </nav>
        </header>
    );
};

export default LayoutHeader;