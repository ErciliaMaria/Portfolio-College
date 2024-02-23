import Portfolio1 from "../../assets/image/Rectangle 20.png"
import Portfolio2 from "../../assets/image/Rectangle 22.png"
import Portfolio3 from "../../assets/image/documentacao-de-codigo-960x673.png"
import Portfolio4 from "../../assets/image/Rectangle 23.png"
import Portfolio5 from "../../assets/image/Rectangle 24.png"
import Portfolio6 from "../../assets/image/Rectangle 25.png"
import Portfolio7 from "../../assets/image/Rectangle 26.png"
import Portfolio8 from "../../assets/image/Rectangle 27.png"
import "./style.css"
export default function AppPortfolio({title}){
    return(
        
        <div className="desktop-portfolio">
            <div className="title-portfolio">
                <h2>{title}</h2>
            </div>
            <div className="section-portfolios">
                <div className="opacity">
                    <img src={Portfolio1} alt="img-1" />
                </div>
                <img src={Portfolio2} alt="img-2" />
                <img src={Portfolio3} alt="img-3" />
                <img src={Portfolio4} alt="img-4" />
        
            
                <img src={Portfolio5} alt="img-5" />
                <img src={Portfolio6} alt="img-6" />
                <img src={Portfolio7} alt="img-7" />
                <img src={Portfolio8} alt="img-8" />
            </div>
        </div>
        
    )
}