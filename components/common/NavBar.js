import Link from "next/link";
import React from "react";
import {
  faBars,
  faClose,
  faHamburger,
  faShield,
  faShieldAlt,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../public/logo.jpeg";

function NavBar() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <nav className=" bg-gray-800 md:bg-white">
      <div className="max-w-6xl mx-auto flex justify-between px-2 sm:px-6 lg:px-8 items-center h-16 md:h-24">
        {/* logo here */}
        {/* icon  */}
        <Link href="/">
          <a className="flex items-center justify-center relative">
            {/* icon  */}
            <FontAwesomeIcon
              icon={faShieldAlt}
              size="3x"
              // color="red"
              className="text-red-600 mx-2"
            />
            {/* text  */}
            <div className="text-gray-800 font-bold text-xs uppercase absolute bg-white">
              Desertseals
            </div>
          </a>
        </Link>

        {/* menu  */}
        <div className="flex hidden space-x-16 md:flex">
          <Link href={"/"}>
            <a className="text-md  hover:text-sky-900 text-gray-700 font-semibold">
              Home
            </a>
          </Link>
          <Link href={"/portfolio"}>
            <a className="text-md  hover:text-gray-700 text-gray-700 font-semibold">
              About us
            </a>
          </Link>
          <Link href={"/services"}>
            <a className="text-md  hover:text-gray-700 text-gray-700 font-semibold">
              Services
            </a>
          </Link>
          <Link href={"/contact"}>
            <a className="text-md  hover:text-gray-700 text-gray-700 font-semibold">
              Contact
            </a>
          </Link>
        </div>

        {/* mobile menu */}

        {/* hamburger menu */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {/* <FontAwesomeIcon
            icon={isOpen ? faClose : faBars}
            size="2x"
            color="white"
          /> */}
        </button>
      </div>
      {isOpen && (
        <div className="bg-white w-full h-full">
          <ul className="flex justify-center flex-col items-center space-y-10 p-6">
            <Link href={"/"}>
              <a className="text-md font-bold hover:text-fuchsia-800 text-xl text-fuchsia-800">
                Home
              </a>
            </Link>
            <Link href={"/portfolio"}>
              <a className="text-md font-bold hover:text-fuchsia-800 text-xl text-fuchsia-800">
                Portfolio
              </a>
            </Link>
            <Link href={"/services"}>
              <a className="text-md font-bold hover:text-fuchsia-800 text-xl text-fuchsia-800">
                Services
              </a>
            </Link>
            <Link href={"/contact"}>
              <a className="text-md font-bold hover:text-fuchsia-800 text-xl text-fuchsia-800">
                Contact
              </a>
            </Link>
          </ul>
          <ul className=""></ul>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
