import { useContext } from 'react';
import Head from "next/head";
import { AiOutlineArrowDown } from 'react-icons/ai';
import ThemeContext from '../../context/ThemeContext';
import Section from '../../components/Section';
import Footer from "../../components/Footer";
import ProjectCard from "../../components/ProjectCard";
import ProjectCardContainer from '../../components/ProjectCardContainer';

const About = () => {
  const { darkmode } = useContext(ThemeContext);
  
  return (
    <div className="w-full h-full max-w-6xl mx-auto text-2xl text-center text-pink-100 md:px-8">
      <Head>
          <title>Projects | Franco Borgiani Fullstack Developer</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          {<link rel="icon" type="favicon" href='/favicon-32x32.png' sizes="16x16"></link>}
      </Head>
          <Section>
            <div className='flex flex-col align-items-center'>
              <a href="#projects" className={`${darkmode ? 'text-blue-500' : 'text-purple-700'}`}>
                <h1 className={`max-w-6xl md:text-4xl  ${darkmode ? 'text-white' : 'text-black'}`}>
                  Watch my personal projects
                </h1>
                <AiOutlineArrowDown className="w-10 h-10 m-auto mt-2 text-center"/>
              </a>
            </div>
          </Section>
      
      <section className="grid w-full max-w-6xl min-h-screen px-6 mx-auto md:px-0 place-items-center" id='projects'>
        <div data-aos="fade-up" className='w-full' >
          <ProjectCardContainer>
            <ProjectCard 
                title={"PROJECT"} 
                technologies={"JavaScript, React, SASS, Node"}
                darkmode={darkmode}
                imageRoute={"/download.png"}  
              />
              <ProjectCard 
                title={"PROJECT"} 
                technologies={"JavaScript, React, SASS, Node"}
                darkmode={darkmode}
                imageRoute={"/download.png"}  
              />
              <ProjectCard 
                title={"PROJECT"} 
                technologies={"JavaScript, React, SASS, Node"}
                darkmode={darkmode}
                imageRoute={"/download.png"}  
              />
              <ProjectCard 
                title={"PROJECT"} 
                technologies={"JavaScript, React, SASS, Node"}
                darkmode={darkmode}
                imageRoute={"/download.png"}  
              />
              <ProjectCard 
                title={"PROJECT"} 
                technologies={"JavaScript, React, SASS, Node"}
                darkmode={darkmode}
                imageRoute={"/download.png"}  
              />
              <ProjectCard 
                title={"PROJECT"} 
                technologies={"JavaScript, React, SASS, Node"}
                darkmode={darkmode}
                imageRoute={"/download.png"}  
              />
          </ProjectCardContainer>
        </div>
    </section>
      <Footer darkmode={darkmode} />
    </div>
  );
};
export default About;