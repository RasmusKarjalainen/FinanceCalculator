import siteText from "../Localization/siteText";
import Dashboard from "./dashboard/Dashboard";

const Home = ({language, loggedIn}) => {
    return loggedIn ? <Dashboard language={language}/> : <h1>{siteText.home[language]}</h1>
}

export default Home