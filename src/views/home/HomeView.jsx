import AppHeader from "../../components/AppHeader/index.jsx";
import AppMain from "../../components/AppMain/index.jsx";
import AppAbout from "../../components/AppAbout/index.jsx"
import AppServ from "../../components/AppServ/index.jsx"
import AppSkills from "../../components/AppSkills/index.jsx"
import AppPortfolio from "../../components/AppPortfolio/index.jsx"
import AppContact from "../../components/AppContact/index.jsx"
import AppFooter from "../../components/AppFooter/index.jsx"
export default function HomeView ()  {
    return(
        <>
        < AppMain />
        < AppAbout title="Me"/>
        < AppServ title="Service"/>
        < AppSkills title="Skills" />
        < AppPortfolio title="Portfolio"/>
        < AppContact/>
        </>
    )
}

