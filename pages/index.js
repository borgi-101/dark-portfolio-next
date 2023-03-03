import Head from "next/head";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import Section from "../components/Section";
import Button from "../components/Button";
import Footer from "../components/Footer";

export default function Home() {
  const { darkmode, setDarkmode } = useContext(ThemeContext);

  return (
    <div className="w-full h-screen max-w-6xl mx-auto text-2xl text-center text-skyblue-100 md:px-8">
      <Head>
        <meta
          name="description"
          content="I am Franco Borgiani Fullstack Developer and I love web technologies, as Javascript, React, Next and Express. You can search me on Instagram and Facebook as Franco Borgiani"
        />
        <title>Franco Borgiani - Data Engineer</title>
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
        <h1
          className={`max-w-6xl md:text-4xl  ${
            darkmode ? "text-white" : "text-black"
          }`}
        >
          Hello there, Franco Borgiani here, a Data Engineer located in Uruguay, passionate of Software Engineering and coding best practices. 
        </h1>
        <Button darkmode={darkmode} route="/about" content="About me" />
      </Section>
      <Footer darkmode={darkmode} />
    </div>
  );
}
