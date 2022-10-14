import {BrowserRouter, Switch, NavLink, Route} from "react-router-dom";
import {ValidationRoute} from "./routeValidation";
import siteText from "../Localization/siteText";
import RegisterAndLogin from "../siteComponents/registerAndLogin";
import Header from "../siteComponents/header/header";
import Salary from "../Capital/salary";
import Home from "../siteComponents/home";
import AddExpense from "../expenses/addExpense";
import ShowExpense from "../expenses/showExpense";
import {Col, Row} from "reactstrap";

const Routes = ({language, setLanguage, loggedIn, setLoggedIn, logout}) => {
    return (
        <div className={'body'}>
            <BrowserRouter>
                    <div className={'header'}>
                        <Row>
                            <Col xs={4} className={'left'}>
                                <span> <NavLink to="/">{siteText.homeMenu[language]} </NavLink> </span>
                                { loggedIn ?
                                    <>
                                        <span> <NavLink to="/" onClick={() => {logout()}}> {siteText.logout[language]} </NavLink> </span>
                                        <span> <NavLink to="/addExpense"> {siteText.addExpense[language]} </NavLink> </span>
                                        <span> <NavLink to="/showExpense"> {siteText.expenses[language]} </NavLink> </span>
                                        <span> <NavLink to="/salary"> {siteText.modifySalary[language]} </NavLink> </span>
                                    </>
                                    :
                                    <>
                                        <span> <NavLink to="/register"> {siteText.register[language]} </NavLink> </span>
                                        <span> <NavLink to="/login"> {siteText.login[language]} </NavLink> </span>
                                    </>
                                }
                            </Col>
                            <Header language={{setLanguage, language}}/>
                        </Row>
                    </div>
                        <Switch>
                            <Route path="/register" component={() => <RegisterAndLogin language={language} isRegister={true}/> }/>
                            <Route path="/login" component={() => <RegisterAndLogin language={language} setLoginStatus={setLoggedIn} isRegister={false}/> }/>
                            <ValidationRoute path="/salary" component={() => <Salary language={language}/> }/>
                            <ValidationRoute path="/addExpense" component={() => <AddExpense language={language}/> }/>
                            <ValidationRoute path="/showExpense" component={() => <ShowExpense language={language}/>}/>
                            <Route path="/" component={() => <Home language={language} loggedIn={loggedIn}/> }/>
                        </Switch>
            </BrowserRouter>
        </div>
    )
}
export default Routes