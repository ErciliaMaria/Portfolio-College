import ImageAbout from "../../assets/image/about img.png"
import "./style.css"
import { Link } from "react-router-dom";


function AppAbout ({title}){
    return(
        
        <div className="desktopAbout">
            <div className="title-about">
                <h2>About<span>{title}</span></h2>
            </div>
            <div className="about-section">
                <div className="image-about">
                    <img src={ImageAbout} alt="image-about" className="image-about" />
                </div>
                <div className="text-about">
                    <h2>Frontend Developer &Graphic Designer</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, 
                    quasi consequatur! Cumque veniam fuga quam odio labore sequi adipisci 
                    obcaecati qui? Vero itaque ut accusamus cumque commodi tempore expedita praesentium?Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, 
                    quasi consequatur! Cumque veniam fuga quam odio labore sequi adipisci 
                    obcaecati qui? Vero itaque ut accusamus cumque commodi tempore expedita praesentium?</p>
                    
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic culpa quidem 
                    corrupti aperiam porro, assumenda ipsum dicta doloremque deserunt et neque 
                    ullam eius autem debitis laboriosam sit quisquam, aspernatur quod.</p>

                    <Link to="/about">
                        <button>Read More...</button>
                    </Link>
                </div>
               
            </div>

        </div>
        
    )
}

export default AppAbout;