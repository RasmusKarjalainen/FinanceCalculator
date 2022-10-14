import SimpleInput from "./elements/simpleInput";
import {Button, Col, Row} from "reactstrap";
import siteText from "../Localization/siteText";
import Axios from 'axios';
import { backendUri, callPoints, frontEndUri} from "../api/routes";
import {useRef} from "react";

const RegisterAndLogin = ({language, isRegister, setLoginStatus}) => {
    const password = useRef('')
    const username = useRef('')
    const email = useRef('')

    const handleLogin = () => {
        const data = {password: password.current.value, username: username.current.value}
        Axios.post(backendUri + callPoints.login, data
        ).then((res) => {
            if (res.data.token) {
                sessionStorage.setItem('token', res.data.token)
                setLoginStatus(true)
                window.location.href = frontEndUri
            }
        })
    }
    const handleRegister = () => {
        const data = {password: password.current.value, username: username.current.value, email: email.current.value}
        Axios.post(backendUri + callPoints.register, data
        ).then((res) => {
            if (res.data.token) {
                sessionStorage.setItem('token', res.data.token)
            }
        })
    }

    const checkUseCase = ()  => {
        switch (isRegister) {
            case true:
                return handleRegister()
            case false:
                return handleLogin()
        }
    }


    return (
        <Row>
            <Col>
                <SimpleInput type={'text'} title={siteText.username[language]} reference={username}/>
                { isRegister && <SimpleInput type={'text'} title={siteText.email} reference={email} />}
                <SimpleInput type={'password'} title={siteText.password[language]} reference={password}/>
            </Col>
            <div className={'headerButton'}>
                <Button color="primary" size="lg" block onClick={() => {checkUseCase()}}>{ isRegister ? siteText.register[language] : siteText.login[language]}</Button>
            </div>
        </Row>
    )
}
export default RegisterAndLogin