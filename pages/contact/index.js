import Head from "next/head";
import { useContext, useState } from "react";
import ThemeContext from "../../context/ThemeContext";
import Section from "../../components/Section";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import axios from "axios";

export default function () {
  const { darkmode } = useContext(ThemeContext);

  const primaryButtonStyles = `rounded-2xl px-8 py-3 mt-4 text-xl font-bold duration-500 border-4 
  ${
    darkmode
      ? " bg-blue-100  text-gray-800 border-1 border-blue-300 hover:bg-gray-800 hover:text-blue-300"
      : "text-white  bg-purple-600  border-purple-600  hover:bg-white hover:text-purple-600"
  } `;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [state, setState] = useState({
    error: false,
    success: false,
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post("/api/contact", formData);

      setState({
        error: false,
        success: true,
      });
    } catch (error) {
      setState({
        error: true,
        success: false,
      });
    }
  };

  const onChangeFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className={`mx-auto duration-500 w-full min-h-screen max-w-6xl text-2xl text-center text-skyblue-100 md:px-8 ${
        darkmode ? "bg-gray-800" : "bg-white"
      }`}
    >
      <Head>
        <meta
          name="description"
          content="I am Franco Borgiani a Data Engineer and I love web technologies and data platforms."
        />
        <title>Home | Franco Borgiani Data Engineer</title>
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
          className={`max-w-6xl md:text-4xl ${
            darkmode ? "text-white" : "text-black"
          }`}
        >
          I'll be happy to answer your doubts or just talk about Software Engineering.
        </h1>
        <Button darkmode={darkmode} route="#contactForm" content="Get in touch" />
      </Section>
      <section
        className={`
          ${darkmode ? "bg-gray-800" : "bg-white"}
         duration-500 m-0 px-6 h-screen flex place-content-center  items-center justify-center`}
      >
        <form id="contactForm" className="flex flex-col" onSubmit={onSubmit}>
          <div className="flex justify-between gap-6 md:flex-row flex-col">
            <div className="flex-col flex md:w-1/2">
              <label
                htmlFor="name"
                className={`text-left ${
                  darkmode ? "text-white" : "text-gray-800"
                }`}
              >
                Name
              </label>
              <input
                required
                value={formData.name}
                onChange={onChangeFormData}
                className="  bg-blue-100   text-left h-12 rounded-2xl"
                type="text"
                id="name"
                name="name"
              />
            </div>
            <div className="flex-col flex md:w-1/2">
              <label
                htmlFor="subject"
                className={`text-left ${
                  darkmode ? "text-white" : "text-gray-800"
                }`}
              >
                Subject
              </label>
              <input
                required
                value={formData.subject}
                onChange={onChangeFormData}
                className="  bg-blue-100   text-left h-12 rounded-2xl"
                type="text"
                name="subject"
                id="subject"
              />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label
              htmlFor="email"
              className={`text-left ${
                darkmode ? "text-white" : "text-gray-800"
              }`}
            >
              Email
            </label>
            <input
              required
              onChange={onChangeFormData}
              className="  bg-blue-100  text-left h-12 rounded-2xl"
              value={formData.email}
              type="email"
              name="email"
              id="email"
            />
          </div>
          <label
            htmlFor="message"
            className={`text-left ${darkmode ? "text-white" : "text-gray-800"}`}
          >
            Tell me about your problem
          </label>
          <textarea
            required
            value={formData.message}
            className="  bg-blue-100   text-left h-28 rounded-2xl px-2 py-1 mb-4"
            onChange={onChangeFormData}
            type="text"
            name="message"
            id="message"
          />
          {state.success && (
            <p className=" bg-green-300 text-green-600 py-3 px-4">
              Message was sent successfully
            </p>
          )}
          {state.error && (
            <p className=" bg-red-300 text-red-500 py-3 px-4">
              Oops, there was a problem sending the message...
            </p>
          )}
          <button
            className={
              primaryButtonStyles +
              ` ${!(state.error || state.success) && "mt-12"}`
            }
            type="submit"
          >
            Submit
          </button>
        </form>
      </section>
      <Footer darkmode={darkmode} />
    </div>
  );
}
