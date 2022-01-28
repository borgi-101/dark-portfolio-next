import Link from "next/link";
import { useContext, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import MenuResponsive from "./MenuResponsive";
import { MdOutlineWbSunny, MdNightlightRound } from "react-icons/md";

const Header = () => {
	const commonStyles = "flex justify-between py-2 items-center duration-500  sticky top-0";
	const { darkmode, setDarkmode } = useContext(ThemeContext);

	const [toggle, setToggle] = useState(false);
	const spanStyles = `h-1 duration-500 origin-left w-full ${darkmode ? "bg-white" : "bg-gray-800"}`
	return (


		<header className={`z-50 ${darkmode ?
			`duration-500 bg-gray-800 text-pink-50
            fixed top-0 left-0 right-0 bg-opacity-50 backdrop-blur-sm ` :
			`duration-500 bg-pink-50 text-gray-800 
        fixed top-0 left-0 right-0 bg-opacity-50 backdrop-blur-sm `
			}`
		}>
			<div className={commonStyles + " max-w-6xl mx-auto"}>
				<Link href="/">
					<a>
						<h1 className="px-6 text-3xl font-bold md:text-4xl">
							<span className={darkmode ? "text-blue-300" : "text-purple-600"}>Borgi</span>Fran</h1>
					</a>
				</Link>
				<div className="flex">
					<button
						onClick={() => setDarkmode(!darkmode)}
						className={`duration-500 p-3 md:mx-5 rounded-2xl 
                    ${darkmode
								? "bg-yellow-300"
								: "bg-purple-600"}`}
					>
						{darkmode ?
							<MdOutlineWbSunny className="text-gray-800 w-7 h-7" />
							: <MdNightlightRound className="text-white w-7 h-7" />
						}
					</button>
					<MenuResponsive toggle={toggle} setToggle={setToggle} />
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
export default Header;4