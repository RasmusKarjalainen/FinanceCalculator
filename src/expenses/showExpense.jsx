import {useEffect, useState} from "react";
import axios from "axios";
import {backendUri, callPoints} from "../api/routes";
import {ReturnTokenHolder} from "../config/tokenDecode";
import {Table, Row, Col} from "reactstrap";

const ShowExpense = ({language}) => {
  const [expenses, setExpenses] = useState(0)

  useEffect(() => {
    const data = {user: ReturnTokenHolder()}
    axios.post(backendUri + callPoints.getExpense, data
    ).then(res => {
      setExpenses(res.data)
    })
  }, [])

  return (
      <Row>
        <Col xs={2}/>
        <Col xs={8}>
          <Table hover className={'expenseTable'}>
            <th>Expense amount</th>
            <th>Expense type</th>
            <th>Expense recurrence</th>
            {Object.entries(expenses).map(function (value) {
            return (
              <tr>
              <td>{value[1].expenseAmount}</td>
              <td>{value[1].expenseType}</td>
              <td>{value[1].expenseRecurrence}</td>
              </tr>
            )
          })}
        </Table>
      </Col>
    <Col xs={2}/>
    </Row>
  )
}

export default ShowExpense