import {useEffect, useRef, useState} from "react";
import axios from "axios";
import {backendUri, callPoints} from "../../../api/routes";
import {ReturnTokenHolder} from "../../../config/tokenDecode";
import { IoIosWallet } from "react-icons/io";


const Salary = ({language, salary, setSalary, tax, setTax, salaryAfterTax, setSalaryAfterTax}) => {

    useEffect(() => {
        const data = { holder: ReturnTokenHolder() }
        axios.post(backendUri + callPoints.getSalary, data
        ).then(res => {
            setSalary(res.data.amount)
            setTax(res.data.taxPercentage)
            netSalary();
        })
    },[salaryAfterTax])

    const netSalary = () => {
        let taxPercentage = (100 - tax) / 100
        setSalaryAfterTax(taxPercentage * salary);
    }

    return (
        <>
            <IoIosWallet size={150} color={'white'}/>
            <h1>{'salary:'} {salary}</h1>
            <h2>{'after tax: '} {salaryAfterTax.toFixed()}</h2>
        </>
    )
}

export default Salary