import { useContext } from "react";
import Head from "next/head";
import Button from "../components/Button";
import ThemeContext from "../context/ThemeContext";
import Section from "../components/Section";
import Footer from "../components/Footer";

const Home = () => {
  const { darkmode, setDarkmode } = useContext(ThemeContext);

  return (
    <div className="w-full h-screen max-w-6xl mx-auto text-2xl text-center text-skyblue-100 md:px-8">
      <Head>
        <meta name="description" content="I am Franco Borgiani Fullstack Developer and I love web technologies, as Javascript, React, Next and Express. Franco Borgiani..." />
        <title>Home | Franco Borgiani Fullstack Developer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" type="favicon" href='https://franborgiani.com/favicon-32x32.png' sizes="16x16"></link>

      </Head>
      <Section>
        <h1 className={`max-w-6xl md:text-4xl  ${darkmode ? "text-white" : "text-black"}`}>
          Hi i'm Franco Borgiani, Fullstack Developer, and I love Frontend technologies, like NextJS & React.
        </h1>
        <Button darkmode={darkmode} route="/about" content="About me" />
      </Section>
      <Footer darkmode={darkmode} />
    </div>
  )
}
export default Home; 