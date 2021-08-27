import Salary from './Capital/salary'
import Header from "./siteComponents/header/header";
import availableLanguages from "./Localization/availableLanguages";
import './App.css';
import {useState} from "react";


const App =() => {
    const [chosenLanguage, setChosenLanguage] = useState(availableLanguages.fin)
    return (
        <div className="App">
                <Header language={{setChosenLanguage, chosenLanguage}}/>
            <Salary/>
        </div>
    );
}

export default App;
