import {useEffect, useState} from "react";
import axios from "axios";
import {backendUri, callPoints} from "../api/routes";
import {ReturnTokenHolder} from "../config/tokenDecode";

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
      Object.entries(expenses).map(function (value) {
        return (
          <>
          <h1>{value[1].expenseAmount}</h1>
          <h2>{value[1].expenseType}</h2>
          <h3>{value[1].expenseRecurrence}</h3>
          </>
        )
        })
  )
}

export default ShowExpense