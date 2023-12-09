import AppMainImage from '../AppMainImage/index.jsx'
import AppMainText from '../AppMainText/index.jsx'
import "./style.css"
function AppMain() {
    return (
        
        <div className="desktopMain">
            <AppMainText />
            <AppMainImage />
        </div>
        
    )
}
export default AppMain;