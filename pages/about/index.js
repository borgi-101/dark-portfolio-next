import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

const About = () => {
    const { darkmode, setDarkmode } = useContext(ThemeContext);
    return (
        <div className="w-full h-screen max-w-6xl mx-auto text-2xl text-center text-pink-100 md:px-8">
            <section className="grid max-w-6xl px-6 mx-auto md:h-screen place-content-center">
                <h1 className={`max-w-6xl md:text-4xl  ${darkmode ? "text-white" : "text-black"}`}>
                    I'm 18, I'm a tech student, and lover at linux, In my free time I drink cofee, and read about tech. I love run, and I try do it every day.
                </h1>
            </section>
        </div>
    )
}
export default About;