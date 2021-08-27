import LanguageIcon from "./icons/languageIcon";
import eng from './icons/eng.jpg'
import fin from './icons/fin.jpg'
import swe from './icons/swe.jpg'

const LanguageChooser = ({setChosenLanguage}) => {
    return (
        <div className={'languageIcons'}>
            <LanguageIcon source={fin} alt={undefined} action={() => {setChosenLanguage('fin')}}/>
            <LanguageIcon source={eng} alt={undefined} action={() => {setChosenLanguage('eng')}}/>
            <LanguageIcon source={swe} alt={undefined} action={() => {setChosenLanguage('swe')}}/>
        </div>
    )
}

export default LanguageChooser;