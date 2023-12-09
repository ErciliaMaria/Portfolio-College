import "./style.css"
import Imageicon1 from "../../assets/image/web icon.png"
import Imageicon2 from "../../assets/image/icon.png"
import Imageicon3 from "../../assets/image/Group 3.png"
import { Link } from "react-router-dom"
function AppServ({title}) {
    return (
        
            <div className="desktopService">
                <div className='title-service'>
                    <h2>My <span>{title}</span></h2>
                </div>
                <div className="group-servic">
                    <div className="list-serv">
                        <img src={Imageicon1} alt="icon1" />
                        <h3>Web Development</h3>
                        <p>There are many variations of passagens of Lorem Ipsum available, but the majotity have suffered alteration in some form, by injected humour.</p>
                    </div>

                    <div className="list-serv">
                        <img src={Imageicon2} alt="icon2" />
                        <h3>Apps Development</h3>
                        <p>There are many variations of passagens of Lorem Ipsum available, but the majotity have suffered alteration in some form, by injected humour.</p>
                    </div>

                    <div className="list-serv">
                        <img src={Imageicon3} alt="icon3" />
                        <h3>Digital Marketing</h3>
                        <p>There are many variations of passagens of Lorem Ipsum available, but the majotity have suffered alteration in some form, by injected humour.</p>
                    </div>
                </div>
                <Link to='/services'>
                    <button>Read More..</button>
                </Link>
            </div>
        
    )

}
export default AppServ