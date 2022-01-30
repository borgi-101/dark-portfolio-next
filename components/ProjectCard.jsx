import { useEffect } from "react";
import {AiFillGithub , AiOutlineSelect} from "react-icons/ai";
import Aos from 'aos';
import 'aos/dist/aos.css';

const ProjectCard = ({title, imageRoute, technologies, darkmode}) =>{
  useEffect(()=>{
    Aos.init({duration: 500})
  }, [])
  
  const linkButtonStyles = `w-10 h-10 mx-10 ${darkmode ? 
    'text-white hover:text-blue-400' : 
    'text-gray-800 hover:text-purple-700'}
    `

  return(
    <div data-aos="fade-up" className={`flex flex-col items-center w-full px-3 py-6 mb-3 
    text-center rounded-lg ${darkmode ? 'bg-gray-900' : 'bg-gray-200'}`}>
      <figure>
        <img className="w-full mx-auto" src={imageRoute} alt="PROJECT IMAGE" />
      </figure>
      <h3 className={` ${darkmode ? 'text-white' : 'text-gray-800'}`}>{title}</h3>
      <div className={`rounded-lg px-2 w-auto font-bold h-6 text-sm text-center text-white 
        ${darkmode ? 
          'bg-blue-400' : 
          'bg-purple-700'
        
      }`}>
        {technologies}
      </div>

      <div className={`
        duration-500
        flex
        justify-between
        w-auto>
        mt-4
        
      `}>
        <a href="#">
          <AiFillGithub className={linkButtonStyles}/>
        </a>
        <a href="#">
          <AiOutlineSelect className={linkButtonStyles}/>
        </a>
      </div>
    </div>
  )
}
export default ProjectCard;