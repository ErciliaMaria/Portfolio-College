import './styles.css';

import Nav from "../Nav/index.jsx"
import Logo from '../logo/index.jsx';
import Buttom from '../Button/buttom.jsx'
function Header() {
    return (
        <>
            <div className="header">
                <Logo/>

                <Nav/>

                <Buttom/>
            </div>
        </>
    )
}
export default Header;