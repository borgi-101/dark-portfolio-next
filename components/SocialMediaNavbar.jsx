import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const SocialMediaNavbar = ({darkmode}) =>{
  return(
    <nav className='flex justify-center mt-3'>
      <Link href="https://github.com/borgi-101">
        <a>
          <AiFillGithub className={`duration-500 w-10 h-10 mx-3 ${darkmode ? 'text-white hover:text-blue-500' : 'text-gray-900 hover:text-purple-700'}` }/>
        </a>
      </Link>
      <Link href="https://linkedin.com/in/francoborgiani">
        <a id="bottom">
          <AiFillLinkedin className={`duration-500 w-10 h-10 mx-3 ${darkmode ? 'text-white hover:text-blue-500' : 'text-gray-900 hover:text-purple-700'}` }/>
        </a>
      </Link>
    </nav>
  )
};
export default SocialMediaNavbar;