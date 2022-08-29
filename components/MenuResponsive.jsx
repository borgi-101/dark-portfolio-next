import Link from "next/link";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const MenuResponsive = ({ toggle, setToggle }) => {
  const { darkmode } = useContext(ThemeContext);
  const responsiveStyles = `font-semibold text-2xl fixed top-0 left-0 right-0 flex 
    flex-col items-center justify-around h-screen text-white md:relative md:flex-row md:h-auto md:bg-transparent ${
      darkmode ? "md:text-white bg-gray-800" : "bg-gray-800 md:text-gray-800"
    } duration-500`;

  return (
    <ul
      className={
        toggle ? responsiveStyles : responsiveStyles + " left-full md:left-0"
      }
      style={{ right: toggle ? "0px" : "-102px" }}
    >
      <li className="px-8">
        <Link href="/">
          <a onClick={() => (toggle ? setToggle(!toggle) : "")}>Home</a>
        </Link>
      </li>
      <li className="px-8">
        <Link href="/about">
          <a onClick={() => (toggle ? setToggle(!toggle) : "")}>About</a>
        </Link>
      </li>
      <li className="px-8">
        <Link href="/projects">
          <a onClick={() => (toggle ? setToggle(!toggle) : "")}>Projects</a>
        </Link>
      </li>
      <li className="px-8">
        <Link href="/contact">
          <a onClick={() => (toggle ? setToggle(!toggle) : "")}>Contact</a>
        </Link>
      </li>
    </ul>
  );
};
export default MenuResponsive;
