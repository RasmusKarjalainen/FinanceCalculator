import siteText from "../../Localization/siteText";
import {Col, Container, Row} from "reactstrap";
import {useState} from "react";
import Salary from "./component/Salary";
import Expense from "./component/Expense";
import DisposableIncome from "./component/DisposableIncome";

const Dashboard = ({language}) => {

    const [salary, setSalary] = useState(0);
    const [tax, setTax] = useState(0);
    const [salaryAfterTax, setSalaryAfterTax] = useState(0);
    const [expenses, setExpenses] = useState(0);

    return (
        <Container>
            <Row className={'dashboardTable'}>
                <Col xs={4}> <Salary language={language} salary={salary} setSalary={setSalary} tax={tax} setTax={setTax} salaryAfterTax={salaryAfterTax} setSalaryAfterTax={setSalaryAfterTax} /> </Col>
                <Col xs={4}> <Expense language={language} expenses={expenses} setExpenses={setExpenses}/> </Col>
                <Col xs={4}> <DisposableIncome language={language} expenses={expenses} salary={salaryAfterTax}/> </Col>
            </Row>
        </Container>
    );
}

export default Dashboard;