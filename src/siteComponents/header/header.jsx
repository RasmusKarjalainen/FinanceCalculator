import siteText from "../../Localization/siteText";
import LanguageChooser from "./languageChooser";
import {Col} from 'reactstrap';
const Header = ({language}) => {
    return (
        <>
            <Col xs={4} className={'middle'}>
                <h1>{siteText.header[language.language]}</h1>
            </Col>
            <Col xs={4} className={'right'}> <LanguageChooser setLanguage={language.setLanguage}/> </Col>
        </>
    )
}


export default Header
