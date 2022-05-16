import { useContext } from "react";
import Head from "next/head";
import { AiOutlineArrowDown } from "react-icons/ai";
import ThemeContext from "../../context/ThemeContext";
import Section from "../../components/Section";
import Footer from "../../components/Footer";
import ProjectCard from "../../components/ProjectCard";
import ProjectCardContainer from "../../components/ProjectCardContainer";

const Projects = () => {
  const projectsInfo = [
    {
      title: "Correa Gorondona asociados",
      technologies: ["JavaScript", "HTML", "CSS", "Git"],
      imageRoute: "/correagorondona.png",
      live: "https://correagorondona.com/",
      github: false,
      description: ""
    },
    {
      title: "Rick and Morty Darkmode",
      imageRoute: "/rickandmorty.png",
      github: "https://github.com/francoborgiani/react-rick-morty",
      live: "https://francoborgiani.github.io/react-rick-morty/",
      technologies: ["React", "SASS", "JavaScript", "Git"],
      description: ""
    },
    {
      title: "Tic Tac Toe App",
      github: "https://github.com/francoborgiani/tic-tac-toe-vite-react",
      imageRoute: "/tictactoe.png",
      live: "https://francoborgiani.github.io/tic-tac-toe-vite-react/",
      technologies: ["React", "JavaScript", "Git", "Vite"],
      description: ""
    },
    {
      title: "Personal Portfolio",
      github: "https://github.com/francoborgiani/dark-portfolio-next",
      technologies: ["NextJS", "React", "TailwindCSS", "Git"],
      imageRoute: "/personalportfolio.png",
      live: "https://franborgiani.com/",
      description: ""
    }
  ];

  const { darkmode } = useContext(ThemeContext);

  return (
    <div className="w-full h-full max-w-6xl mx-auto text-2xl text-center text-pink-100 md:px-8">
      <Head>
        <meta
          name="description"
          content="I am Franco Borgiani Fullstack Developer. If you want see more projects, you can follow me on Github as Franco Borgiani..."
        />
        <title>Projects | Franco Borgiani Fullstack Developer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="index, follow" />
        <link
          rel="icon"
          type="favicon"
          href="https://franborgiani.com/favicon-32x32.png"
          sizes="16x16"
        ></link>
      </Head>
      <Section>
        <div className="flex flex-col align-items-center">
          <a
            href="#projects"
            className={`${darkmode ? "text-blue-500" : "text-purple-700"}`}
          >
            <h1
              className={`max-w-6xl md:text-4xl  ${
                darkmode ? "text-white" : "text-black"
              }`}
            >
              Watch my personal projects
            </h1>
            <AiOutlineArrowDown className="w-10 h-10 m-auto mt-2 text-center" />
          </a>
        </div>
      </Section>

      <section
        className="grid w-full max-w-6xl min-h-screen px-6 mx-auto md:px-0 place-items-center"
        id="projects"
      >
        <div data-aos="fade-up" className="w-full">
          <ProjectCardContainer>
            {projectsInfo.map((project) => (
              <ProjectCard
                title={project.title}
                key={project.imageRoute}
                technologies={project.technologies}
                darkmode={darkmode}
                imageRoute={project.imageRoute}
                github={project.github}
                live={project.live}
              />
            ))}
          </ProjectCardContainer>
        </div>
      </section>
      <Footer darkmode={darkmode} />
    </div>
  );
};
export default Projects;
