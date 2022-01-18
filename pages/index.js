import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Home = () => {
    const { darkmode, setDarkmode } = useContext(ThemeContext)
    return (
        <div className="w-full h-screen max-w-6xl mx-auto text-2xl text-center text-pink-100 md:px-8">
            <section className="grid max-w-6xl px-6 mx-auto md:h-screen place-content-center">
                <h1 className={`max-w-6xl md:text-4xl  ${darkmode ? "text-white" : "text-black"}`}>
                    Hi i'm Franco Borgiani, Fullstack Developer, and I love Frontend technologies, like NextJS & React.
                </h1>
            </section>
        </div>
    )
}
export default Home;