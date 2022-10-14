import availableLanguages from "./Localization/availableLanguages";
import './App.css';
import {useEffect, useState} from "react";
import {Container} from "reactstrap";
import Routes from "./navigation/routes";
import axios from "axios";
import { backendUri, callPoints} from "./api/routes";

const App = () => {
    const [language, setLanguage] = useState(availableLanguages.fin)
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        //Check login status on page reload
        if (sessionStorage.getItem('token'))
            setLoggedIn(true)
        //Check existing language option on page reload
        if (sessionStorage.getItem('lang'))
            setLanguage(sessionStorage.getItem('lang'))

        //CHECK FOR TOKEN THAT IS VALID, USE AT SOME POINTS, NOT HERE
        /*axios.post(backendUri + callPoints.authenticateLogin, {token: sessionStorage.getItem('token')})
            .then(res => {
                if (!res.data)
                    sessionStorage.removeItem("token")
                    setLoggedIn(false)
            })*/
    })

    const logOut = () => {
        setLoggedIn(false)
        sessionStorage.removeItem("token")
    }

    return (
        <div className="App">
            <Container>
                <Routes logout={() => {logOut()}} language={language} setLanguage={setLanguage} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
            </Container>
        </div>
    );
}

export default App;
