import {useEffect} from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Section = ({children}) =>{
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  
  return(
    <section className="grid h-screen px-6 mx-auto place-content-center">
        <div data-aos="fade-up" style={{width:"100%"}}>
          {children} 
        </div>
    </section>
  )
}
export default Section;