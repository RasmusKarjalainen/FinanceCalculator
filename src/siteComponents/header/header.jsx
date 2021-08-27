import siteText from "../../Localization/siteText";
import LanguageChooser from "./languageChooser";
import {Row, Col, Container} from 'reactstrap';
const Header = ({language}) => {
    return (
        <div className={'header'}>
            <Container>
            <Row>
                <Col xs={11}>
                    <h1>{siteText.header[language.chosenLanguage]}</h1>
                    <small>{siteText.headerDescription[language.chosenLanguage]}</small>
                </Col>
                <Col xs={1}>
                    <LanguageChooser setChosenLanguage={language.setChosenLanguage}/>
                </Col>
            </Row>
            </Container>
        </div>
    )
}


export default Header
