import "./style.css"
import phone from "../../assets/image/telephone.png"
import email from "../../assets/image/email.png"
import arrow from "../../assets/image/right-arrow.png"
   export default function AppContact(){
    return(
            <div className="desktop-contact">
                <div className="title-contact">
                    <h2>Contact</h2>
                </div>
                <div className="container-contact">
                    <div className="contact-left-icons">
                        <div className="icon">
                            <img src={phone} alt="phone" />
                            <p>+886567867</p>
                        </div>
                            
                        <div className="icon">
                            <img src={email} alt="email" />
                            <p>mdriead.bd@gmail.com</p>
                        </div>

                        <div className="icon">
                            <img src={arrow} alt="arrow" />
                            <p>Zirabo, Ashulia, Savar, Dhaka</p>
                        </div>
                    </div>
                    
                    <div className="contact-text">
                        <form action="#">
                            <input type="text" placeholder="Full Name" />
                            <input type="email" placeholder="Email Adress" />
                            <input type="number" placeholder="Phone Number" />
                            <input type="text" placeholder="Subject" />
                            <textarea cols="68" rows="15" placeholder="Your Message"></textarea>
                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        
    ) 
}