import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70; // Offset sesuai dengan tinggi navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsOpen(false); // Tutup menu setelah klik
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white/50 shadow-md backdrop-blur-lg fixed top-0 w-full z-50 px-2 font-['Montserrat']">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <div className="flex items-center">
          <span className="self-center whitespace-nowrap text-blue-800">
            <div className="text-xl font-black">Formalin Detection</div>
            <div className="text-sm font-light">Web Research</div>
          </span>
        </div>
        <div className="md:hidden">
          <button
            className="text-blue-800 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:translate-x-0 fixed top-8 -right-4 w-2/3 h-full shadow-lg md:shadow-none md:bg-transparent md:relative md:w-auto md:flex md:items-center transition-transform duration-300 ease-in-out`}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <NavLink
                to="#header"
                onClick={() => handleScrollTo('header')}
                className={({ isActive }) =>
                  `block py-2 pl-3 pr-4 md:text-blue-900 text-white hover:text-white hover:bg-blue-900 md:bg-transparent md:p-2 md:rounded delay-200 transition-all ${
                    isActive ? "bg-blue-500 text-white" : ""
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#about"
                onClick={() => handleScrollTo('about')}
                className={({ isActive }) =>
                  `block py-2 pl-3 pr-4 md:text-blue-900 text-white hover:text-white hover:bg-blue-900 md:bg-transparent md:p-2 md:rounded delay-200 transition-all ${
                    isActive ? "bg-blue-500 text-white" : ""
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#purpose"
                onClick={() => handleScrollTo('purpose')}
                className={({ isActive }) =>
                  `block py-2 pl-3 pr-4 md:text-blue-900 text-white hover:text-white hover:bg-blue-900 md:bg-transparent md:p-2 md:rounded delay-200 transition-all ${
                    isActive ? "bg-blue-500 text-white" : ""
                  }`
                }
              >
                Purpose
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#sample"
                onClick={() => handleScrollTo('sample')}
                className={({ isActive }) =>
                  `block py-2 pl-3 pr-4 md:text-blue-900 text-white hover:text-white hover:bg-blue-900 md:bg-transparent md:p-2 md:rounded delay-200 transition-all ${
                    isActive ? "bg-blue-500 text-white" : ""
                  }`
                }
              >
                Dashboard
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
