import Link from "next/link";

const Button = ({route, content, darkmode}) =>{
  const primaryButtonStyles = `rounded-2xl px-8 py-3 mt-4 text-xl font-bold duration-500 border-4 
  ${darkmode ?
    "bg-blue-300 text-gray-800 border-1 border-blue-300 hover:bg-gray-800 hover:text-blue-300"
    : "text-white  bg-purple-600  border-purple-600  hover:bg-white hover:text-purple-600"
  } `;

  return (
    <Link href={route}>
        <a>
          <button
            className={primaryButtonStyles} >
            {content}
          </button>
        </a>
    </Link>
  )
}
export default Button