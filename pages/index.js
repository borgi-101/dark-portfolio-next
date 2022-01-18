import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Home = () => {
    const { darkmode, setDarkmode } = useContext(ThemeContext)
    return (
        <div className="w-full h-screen max-w-6xl px-8 mx-auto text-2xl text-center text-pink-100">
            <section className="grid h-screen max-w-6xl px-6 mx-auto place-content-center">
                <h1 className={`max-w-6xl text-4xl  ${darkmode ? "text-white" : "text-black"}`}>
                    Hi i'm Franco Borgiani, Fullstack Developer, and I love Frontend technologies, like NextJS & React.
                </h1>
            </section>
        </div>
    )
}
export default Home;