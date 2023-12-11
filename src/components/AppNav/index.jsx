import "./nav.css";
import {Link} from "react-router-dom"
function AppNav(){
    return(
        
           <div className="desktopMenu">
            <Link to="/">
                Home
            </Link>
            <Link to="/about">About Me</Link>
            <Link to="/services">Services</Link >
            <Link to="/skills">Skills</Link>
            <Link to="/portfolio">Portfolio</Link>
            <a href="#">Portfolio</a>
            <a href="#">Contact</a>
           </div>
        
    )
}
export default AppNav