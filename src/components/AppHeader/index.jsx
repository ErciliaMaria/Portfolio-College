import './styles.css';
import AppNav from "../AppNav/index.jsx"
import AppLogo from '../Applogo/index.jsx';
import AppButtom from '../AppButton/buttom.jsx'
function AppHeader() {
    return (
        
            <div className="header">
                <AppLogo/>

                <AppNav/>

                <AppButtom/>
            </div>
        
    )
}
export default AppHeader;