import Link from "next/link";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const MenuResponsive = ({ toggle }) => {
    const { darkmode, setDarkmode } = useContext(ThemeContext);
    const responsiveStyles = `font-semibold text-2xl fixed top-0 left-0 right-0 flex 
    flex-col items-center justify-around h-screen text-white bg-gray-900 bg-opacity-50 md:relative md:flex-row md:h-auto md:bg-transparent ${darkmode ? "md:text-white " : "md:text-gray-800"} duration-500`;
    return (
        <ul className={toggle ? responsiveStyles : responsiveStyles + " left-full md:left-0"} style={{ right: toggle ? "0px" : "-92px" }} >
            <li className="px-8">
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li className="px-8">
                <Link href="/about">
                    <a>About</a>
                </Link>
            </li>
        </ul>
    )
}
export default MenuResponsive;