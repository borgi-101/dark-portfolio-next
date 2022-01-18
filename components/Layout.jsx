import Header from "./Header";
import ThemeContext from "../context/ThemeContext";
import {useState} from "react";


const Layout = ({children}) =>{
    const [darkmode, setDarkmode] = useState(false);
    return(
        <ThemeContext.Provider value={{darkmode, setDarkmode}}>
            <div className={`duration-500 ${darkmode ? "bg-gray-800" : "bg-white"}`}>
                <Header />
                {children}
            </div>
        </ThemeContext.Provider>
    )
}
export default Layout;