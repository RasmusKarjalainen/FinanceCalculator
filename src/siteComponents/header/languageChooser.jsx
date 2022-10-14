import LanguageIcon from "./icons/languageIcon";
import eng from './icons/eng.jpg'
import fin from './icons/fin.jpg'
import swe from './icons/swe.jpg'

const LanguageChooser = ({setLanguage}) => {
    const finalizeLanguage = (lang) => {
        setLanguage(lang)
        sessionStorage.setItem("lang", lang);
    }
    return (
        <div className={'languageIcons'}>
            <LanguageIcon source={fin} alt={undefined} action={() => {finalizeLanguage('fin')}}/>
            <LanguageIcon source={eng} alt={undefined} action={() => {finalizeLanguage('eng')}}/>
            <LanguageIcon source={swe} alt={undefined} action={() => {finalizeLanguage('swe')}}/>
        </div>
    )
}

export default LanguageChooser;