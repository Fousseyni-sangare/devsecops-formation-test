import { FC } from "react";
import React, { useState } from 'react';
import { Logo } from "@/widgets";
import Menu from "../Menu/Menu";
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useSharedData } from '../../../../context/StateContext'

const LayoutHeader: FC = () => {
  const { isLoggedIn, setIsLoggedIn } = useSharedData();
  const navigate = useNavigate();
  const handleLogInOut = () => {
    if (isLoggedIn) {
        localStorage.removeItem('user')
        setIsLoggedIn(false)
        navigate('/')
    } else {
        // handleLoginClick()
    }
}
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  
    const location = useLocation();
  return (
    <>
      <header>
        {/* <nav className="navbar bg-base-100">
          <Menu
            links={[
              { name: "Homepage", href: "/" },
              { name: "Portfolio", href: "/portfolio" },
              { name: "About", href: "/about" },
            ]}
          />
          <Logo logoName={"kibaroCert"} />
          <div className="navbar-end">
            <button className="btn-ghost btn-circle btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button className="btn-ghost btn-circle btn">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge badge-primary badge-xs indicator-item"></span>
              </div>
            </button>
          </div>
        </nav> */}
        <nav className="bg-[#0b3855] border-b-2 border-white">
          <div className="max-w-7xl mx-auto flex items-center justify-between h-24 px-4 border-b border-solid border-slate-600">
            <div className="flex-shrink-0 font-bold tracking-wider text-3xl text-white">
              <Link to="/">
                KibaroCert
              </Link>
            </div>
            <div className="hidden md:block">
              <Menu
                links={[
                  { name: "Accueil", href: "/", selected: true },
                  { name: "Digitaliser", href: "/digitaliser", selected: false },
                  { name: "Référence", href: "/reference", selected: false },
                  { name: "Vérifier", href: "/verifier", selected: false },
                  // { name: "Se déconnecter", href: "/about", selected: false },
                ]}
              />
            </div>
            <button
              type="button"
              className="md:hidden bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
              onClick={() => setShowMobileMenu(!showMobileMenu)}>
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          {showMobileMenu && <Menu
            links={[
              { name: "Se connecter", href: "/", selected: false },
              { name: "S'enregistrer", href: "/portfolio", selected: false },
              // { name: "About", href: "/about" },
            ]}
          />}
        </nav>
      </header>
    </>
  );
};

export default LayoutHeader;
