import IconFacebook from '../../assets/image/facebook.png'
import IconLinkedin from "../../assets/image/linkedin.png"
import IconGithub from "../../assets/image/github.png"
import IconInstagram from "../../assets/image/instagram (1).png"
import './style.css'
export default function AppMainText() {
    return (
        
        <div className="MainText">
            <h2>Hi, It's me</h2>
            <h1>MD RIEAD MIA</h1>
            <h3>And I'm a <span>Frontend Developer</span></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                 Magnam dolorum similique voluptas voluptatem consequuntur 
                 necessitatibus nihil veniam.</p>
            <div className='icons-image'>
                <img src={IconFacebook} alt="icon-facebook" className="iconimage"/>
                <img src={IconLinkedin} alt="icon-linkedin" className="iconimage" />
                <img src={IconGithub} alt="icons-github" className="iconimage"/>
                <img src={IconInstagram} alt="icon-instagram" className="iconimage" />
            </div>
            <button className="dowload-cv">DOWLOAD CV</button>
        </div>   
        
    )

}
 