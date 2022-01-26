import { useContext, useEffect } from "react";
import ThemeContext from "../../context/ThemeContext";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, [])

  const { darkmode, setDarkmode } = useContext(ThemeContext);
  return (
    <div className="w-full h-full max-w-6xl mx-auto text-2xl text-center text-pink-100 md:px-8">
      <section className="grid h-screen max-w-6xl px-6 mx-auto place-content-center">
        <div data-aos="fade-up" >
          <h1 className={`max-w-6xl md:text-4xl  ${darkmode ? "text-white" : "text-black"}`}>
            I'm 18, I'm a tech student, and lover at linux, In my free time I drink cofee, and read about tech. I love run, and I try do it every day.
          </h1>
        </div>
      </section>

    </div>
  )
}
export default About;