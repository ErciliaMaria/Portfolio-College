import './styles.css'
import Logo from './logo.png'

function Cabecalho() {
    return (
        <>

            <nav className='navbar'>
                <img src={Logo} alt="" />
                <div className="desktopMenu">
                
                </div>
                <button className="desktopButton">
                    <a href="#">Contact Me</a>
                </button>

            </nav>


        </>
    )
}
export default Cabecalho;