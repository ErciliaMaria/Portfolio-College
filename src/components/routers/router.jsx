import {createBrowserRouter} from 'react-router-dom'
import HomeView from '../../views/home/HomeView'
import App from '../../App'
import About from '../../views/About'
import Serv from '../../views/Serv'
import Skills from '../../views/Skills'
import Portfolio from '../../views/Portfolio'

const router = createBrowserRouter([
{
    element: <App />,
    children:[
        {
            path: '/',
            element: <HomeView/>
        },
        {
            path: '/about',
            element: <About/>
        },
        {
            path: '/services',
            element: <Serv/>
        },
        {
            path: '/skills',
            element:<Skills/>
        },
        {
            path: '/portfolio',
            element:<Portfolio/>
        }
    ]
}
])
export default router