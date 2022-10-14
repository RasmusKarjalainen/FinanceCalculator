import {useEffect, useState} from "react";
import axios from "axios";
import {backendUri, callPoints} from "../../../api/routes";
import {ReturnTokenHolder} from "../../../config/tokenDecode";
import { IoMdTrendingDown } from "react-icons/io";

const Expense = ({language, expenses, setExpenses}) => {

    useEffect(() => {
        const data = {user: ReturnTokenHolder()}
        axios.post(backendUri + callPoints.getMonthlyExpense, data
        ).then(res => {
            console.log(res);
            setExpenses(res.data.amount)
        })
    }, [])

    return (
        <>
            <IoMdTrendingDown size={150} color={'white'}/>
            <h1>{'Monthly Expenses:'}</h1>
            <h1>{expenses} €/month</h1>
        </>
    )
}

export default Expense