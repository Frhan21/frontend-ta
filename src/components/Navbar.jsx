import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white px-2 border-[#11468F] border-b-[2px] rounded-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <div className="flex items-center">
          <span className="self-center whitespace-nowrap mx-[2rem]">
            <div className="text-2xl font-semibold">Formalin Detection</div>
            <div className="text-sm font-light">Web Research</div>
          </span>
        </div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 pl-3 pr-4 text-gray-900 rounded md:bg-transparent md:p-0 ${
                    isActive ? "bg-blue-500 text-white" : ""
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 pl-3 pr-4 text-gray-900 rounded md:bg-transparent md:p-0  ${
                    isActive ? "bg-blue-500 text-white" : ""
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block py-2 pl-3 pr-4 text-gray-900 rounded md:bg-transparent md:p-0 ${
                    isActive ? "bg-blue-500 text-white" : ""
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
