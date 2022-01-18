import Link from "next/link";
import { useContext, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import MenuResponsive from "./MenuResponsive";
import Menu from "./Menu";

const Header = () => {
    const commonStyles = "flex justify-between py-7 items-center transition-all duration-700  sticky top-0";
    const { darkmode, setDarkmode } = useContext(ThemeContext);

    const [toggle, setToggle] = useState(false);
    const spanStyles = `h-1 duration-500 origin-left w-full ${darkmode ? "bg-white" : "bg-gray-800"}`
    return (
        <header className={`${darkmode ?
            `bg-gray-800 text-pink-50 sticky top-0 bg-opacity-50 backdrop-blur-md ` :
            `bg-pink-50 text-gray-800 sticky top-0 bg-opacity-50`
            }`
        }>
            <div className={commonStyles + " max-w-6xl mx-auto"}>
                <Link href="/">
                    <a>
                        <h1 className="px-6 text-3xl font-bold md:text-4xl"><span className="text-blue-400">Borgi</span>Fran</h1>
                    </a>
                </Link>
                <div className="flex">
                    <button
                        onClick={() => setDarkmode(!darkmode)}
                        className="px-3 md:px-8"
                    >
                        Button
                    </button>
                    <MenuResponsive toggle={toggle} />
                    <button
                        onClick={() => setToggle(!toggle)}
                        className="flex flex-col justify-between w-10 h-8 m-3 md:hidden"
                    >
                        <span className={`${spanStyles} ${toggle ? "rotate-45" : ""}`}></span>
                        <span className={`${spanStyles} ${+ toggle ? "opacity-0" : "opacity-100"}`}></span>
                        <span className={`${spanStyles} ${+ toggle ? "-rotate-45" : ""}`}></span>
                    </button>
                </div>
            </div>
        </header>
    )
}
export default Header;