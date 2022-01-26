import { useContext } from "react";
import Link from "next/link";
import ThemeContext from "../context/ThemeContext";

const Home = () => {
  const { darkmode, setDarkmode } = useContext(ThemeContext)
  const primaryButtonStyles = `rounded-2xl px-8 py-3 mt-4 text-xl font-bold duration-500 border-4 
    ${darkmode ?
      "bg-blue-300 text-gray-800 border-1 border-blue-300 hover:bg-gray-800 hover:text-blue-300"
      : "text-white  bg-purple-600  border-purple-600  hover:bg-white hover:text-purple-600"
    } `;



  return (
    <div className="w-full h-screen max-w-6xl mx-auto text-2xl text-center text-skyblue-100 md:px-8">
      <section className="grid h-screen max-w-6xl px-6 mx-auto place-content-center">
        <div data-aos="fade-up" >
          <h1 className={`max-w-6xl md:text-4xl  ${darkmode ? "text-white" : "text-black"}`}>
            Hi i'm Franco Borgiani, Fullstack Developer, and I love Frontend technologies, like NextJS & React.
          </h1>
          <Link href="/about">
            <a>
              <button
                className={primaryButtonStyles} >
                About Me
              </button>
            </a>
          </Link>

        </div>
      </section>
    </div>
  )
}
export default Home;