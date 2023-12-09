import "./style.css"
 export default function AppSkills (prop){
    return(
        
        <div className="desktopSkills">
            <div className="title-skills">
                <h2>My <span>{prop.title}</span></h2>
            </div>
            <div className="components-skills">
                <div className="list-skills">
                    <h3>HTML-5</h3>
                    <h3>CSS -3</h3>
                    <h3>Bootstrap</h3>
                    <h3>JavaScript</h3>
                    <h3>Adobe Photoshop</h3>
                    <h3>Adobe Illustrator</h3>
                </div>

                <div className="skills-bars">
                    <div className="externo">
                        <div className="interno-html"></div>
                    </div>

                    <div className="externo">
                        <div className="interno-css"></div>
                    </div>

                    <div className="externo">
                        <div className="interno-bootstrap"></div>
                    </div>

                    <div className="externo">
                        <div className="interno-js"></div>
                    </div>

                    <div className="externo">
                        <div className="interno-photo"></div>
                    </div>

                    <div className="externo">
                        <div className="interno-illust"></div>
                    </div>
                </div>

                <div className="percents">
                    <h3>80%</h3>
                    <h3>75%</h3>
                    <h3>60%</h3>
                    <h3>50%</h3>
                    <h3>75%</h3>
                    <h3>60%</h3>
                </div>
            </div>
        </div>
        
    )
}