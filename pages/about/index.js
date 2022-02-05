import { useContext } from 'react';
import Head from "next/head";
import ThemeContext from '../../context/ThemeContext';
import { AiOutlineArrowDown } from 'react-icons/ai';
import SocialMediaNavbar from '../../components/SocialMediaNavbar';
import Section from "../../components/Section"
import Footer from "../../components/Footer";

const About = () => {

  const { darkmode } = useContext(ThemeContext);
  return (
    <div className="w-full h-full max-w-6xl mx-auto text-2xl text-center text-pink-100 md:px-8">
      <Head>
          <title>About | Franco Borgiani Fullstack Developer</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          {<link rel="icon" type="favicon" href='/favicon-32x32.png' sizes="16x16"></link>}
      </Head>
      <Section>
          <div className='flex flex-col align-items-center'>
            <a href="#bottom">
              <h1 className={`max-w-6xl md:text-4xl  ${darkmode ? 'text-white' : 'text-black'}`}>
                I'm 18, I'm a tech student, and lover at linux and macOS, In my free time I drink coffee, and read about tech. I love run, and I try do it every day.
              </h1>
            </a>
            <a href="#bottom" className={`w-10 mx-auto ${darkmode ? 'text-blue-500' : 'text-purple-700'}`}>
              <AiOutlineArrowDown className="w-10 h-10 mt-2 text-center"/>
            </a>
          </div>
      </Section>
      <Section>
          <h1 className={`max-w-6xl md:text-4xl  ${darkmode ? 'text-white' : 'text-black'}`}>
            If you want to know more about my work, you can follow me on...
          </h1>
          <SocialMediaNavbar darkmode={darkmode} />
      </Section>
      <Footer darkmode={darkmode} />
    </div>
  );
};
export default About;