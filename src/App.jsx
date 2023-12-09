import "./assets/style/global.css"
//import HomeView from "./views/home/HomeView.jsx"
import {Outlet} from "react-router-dom"
import AppHeader from "./components/AppHeader"
import AppFooter from "./components/AppFooter"
//import routers from "../../portfolio2/src/components/routers/router.jsx"

const App = () => {
  return (
    <>
      <AppHeader></AppHeader>
      <Outlet />
      <AppFooter></AppFooter>
    </>
  )
}
export default App
