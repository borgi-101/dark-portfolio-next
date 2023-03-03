import Link from "next/link"
const Footer =({darkmode})=>{
  return(
    <footer className={`duration-500 fixed bg-opacity-50 backdrop-blur-sm
     left-0 right-0 bottom-0 py-4 font-semibold text-sm
     ${darkmode ? 'text-white bg-gray-800' : 'text-gray-900 bg-white'}`}>
      Copyright {new Date().getFullYear()} @ All rights reserved <Link href="https://www.linkedin.com/in/francoborgiani/"><a><span className={`${darkmode? 'text-blue-300' : 'text-purple-600'}`}>Franco Borgiani</span></a></Link>
    </footer>
  )
}
export default Footer;