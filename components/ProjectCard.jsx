import { useEffect } from "react";
import {AiFillGithub , AiOutlineSelect} from "react-icons/ai";
import Aos from 'aos';
import 'aos/dist/aos.css';

const ProjectCard = ({title, imageRoute, technologies, darkmode, github, live, projectDescription}) =>{
  useEffect(()=>{
    Aos.init({duration: 500})
  }, [])
  
  const linkButtonStyles = `w-7 h-7 mx-2 ${darkmode ? 
    'text-white hover:text-blue-400' : 
    'text-gray-800 hover:text-purple-700'}
    `

  return(
    <div data-aos="fade-up" className={`flex flex-col items-center w-full px-3 py-6 mb-3 
    text-center rounded-lg ${darkmode ? 'bg-gray-900' : 'bg-gray-200'}`}>
      <figure>
        <img className="w-full mx-auto" src={imageRoute} alt="PROJECT IMAGE" />
      </figure>
      <h3 className={`mt-4 ${darkmode ? 'text-white' : 'text-gray-800'}`}>{title}</h3>
      
      <div
        className="flex"
      >{
      technologies.map(technology=>(
        <div className={`mx-1 rounded-lg px-2 w-auto h-4 text-xs text-center text-white  font-medium
        ${darkmode ? 
          'bg-blue-400 mt-2' : 
          'bg-purple-700 mt-2'
        
      }`}>
        {technology}
      </div>))
      }
      </div>

      <div className={`
        duration-500
        flex
        justify-around
        mt-4
        
      `}>
        {
          github ? 
          <a href={github} className="m-0">
            <AiFillGithub className={linkButtonStyles}/>
          </a>
            :
            ""
        } 
        <a href={live} className="m-0">
          <AiOutlineSelect className={linkButtonStyles}/>
        </a>
      </div>
    </div>
  )
}
export default ProjectCard;