import MainImage from '../MainImage/index.jsx'
import MainText from '../MainText/index.jsx'
import "./style.css"
function Main() {
    return (
        <>
        <div className="desktopMain">
            <MainText />
            <MainImage />
        </div>
        </>
    )
}
export default Main;