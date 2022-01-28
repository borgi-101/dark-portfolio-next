import { useContext, useEffect } from 'react';
import ThemeContext from '../../context/ThemeContext';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import Link from "next/link";
import Aos from 'aos';
import Footer from "../../components/Footer";
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  const { darkmode } = useContext(ThemeContext);
  return (
    <div className="w-full h-full max-w-6xl mx-auto text-2xl text-center text-pink-100 md:px-8">
      <section className="grid h-screen max-w-6xl px-6 mx-auto place-content-center">
        <div data-aos="fade-up" >
          <h1 className={`max-w-6xl md:text-4xl  ${darkmode ? 'text-white' : 'text-black'}`}>
            I'm 18, I'm a tech student, and lover at linux, In my free time I drink cofee, and read about tech. I love run, and I try do it every day.
          </h1>
        </div>
      </section>
      <section className="grid h-screen max-w-6xl px-6 mx-auto place-content-center">
        <div data-aos="fade-up" >
          <h1 className={`max-w-6xl md:text-4xl  ${darkmode ? 'text-white' : 'text-black'}`}>
            If you want to know more about my work, you can follow me on...
          </h1>
          <nav className='flex justify-center mt-3'>
            <Link href="https://github.com/borgi-101">
              <a>
                <AiFillGithub className={`duration-500 w-10 h-10 mx-3 ${darkmode ? 'text-white hover:text-blue-500' : 'text-gray-900 hover:text-purple-700'}` }/>
              </a>
            </Link>
            <Link href="https://linkedin.com/in/francoborgiani">
              <a>
                <AiFillLinkedin className={`duration-500 w-10 h-10 mx-3 ${darkmode ? 'text-white hover:text-blue-500' : 'text-gray-900 hover:text-purple-700'}` }/>
              </a>
            </Link>
          </nav>
        </div>
      </section>
      <Footer darkmode={darkmode} />
    </div>
  );
};
export default About;