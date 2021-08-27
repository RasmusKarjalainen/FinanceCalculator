import {useRef, useState} from "react";

const Salary = () => {
    const [amount, setAmount] = useState(0);
    const salaryAmount = useRef(0)

    return (
        <>
            <input type={'text'} ref={salaryAmount}/>
            <button onClick={() => setAmount(amount + parseInt(salaryAmount.current.value))}>{'Add money'}</button>
            <h1>{amount}</h1>
        </>
    )
 }

 export default Salary