import {useEffect, useRef, useState} from "react";
import SimpleInput from "../siteComponents/elements/simpleInput";
import siteText from "../Localization/siteText";
import axios from "axios";
import {backendUri, callPoints} from "../api/routes";
import {ReturnTokenHolder} from "../config/tokenDecode";


const Salary = ({language}) => {
    const [amount, setAmount] = useState(0);
    const salary = useRef(0);
    const tax = useRef(0);

    useEffect(() => {
        const data = { holder: ReturnTokenHolder() }
        axios.post(backendUri + callPoints.getSalary, data
        ).then(res => {
            salary.current.value = res.data.amount
            tax.current.value = res.data.taxPercentage
            netSalary()
        })
    },[])

    const netSalary = () => {
        if (salary.current.value && tax.current.value) {
            let taxPercentage = (100 - tax.current.value) / 100
            setAmount(taxPercentage * salary.current.value)
        }
    }

    const handleSubmit = () => {
        const data = {
            salary: salary.current.value,
            taxPercentage: tax.current.value,
            holder: ReturnTokenHolder()
        }
        axios.post(backendUri + callPoints.addSalary, data
        ).then(res => {
            console.log(res)
        })

    }

    return (
        <>
            <SimpleInput type={'text'} title={siteText.salary[language]} reference={salary} action={() => netSalary()}/>
            <SimpleInput type={'text'} title={siteText.tax[language]} reference={tax} action={() => netSalary()}/>
            <h1>{amount.toFixed()}</h1>
            <button onClick={() => handleSubmit()}>{siteText.addSalary[language]}</button>
        </>
    )
 }

 export default Salary