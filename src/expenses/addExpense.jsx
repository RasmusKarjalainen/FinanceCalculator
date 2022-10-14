import { expenseTypes, expenseRecurrences } from "./expense";
import siteText from "../Localization/siteText";
import SelectMenu from "../siteComponents/elements/selectMenu";
import SimpleInput from "../siteComponents/elements/simpleInput";
import {useRef} from "react";
import {ReturnTokenHolder} from "../config/tokenDecode";
import Axios from "axios";
import {backendUri, callPoints} from "../api/routes";

const AddExpense = ({language}) => {
    const expenseAmount = useRef(0)
    const expenseType = useRef(0)
    const expenseRecurrence = useRef(0)

    const handleSubmit = () => {
      const data = {
          expenseAmount: expenseAmount.current.value,
          expenseType: expenseType.current.value,
          expenseRecurrence: expenseRecurrence.current.value,
          user: ReturnTokenHolder()
      }
      Axios.post(backendUri + callPoints.addExpense, data
      ).then((res) => {
          console.log(res)
      })
    }

    return (
        <>
            <label>{siteText.addExpense[language]}</label>
            <SelectMenu language={language} name={'expenseTypes'} object={expenseTypes} reference={expenseType}/>
            <label>{siteText.expenseRecurrence[language]}</label>
            <SelectMenu language={language} name={'expenseRecurrence'} object={expenseRecurrences} reference={expenseRecurrence}/>
            <SimpleInput type={'text'} title={siteText.expenseAmount[language]} reference={expenseAmount}/>
            <button onClick={() => {handleSubmit()}}>{'submit'}</button>
        </>
    );
}

export default AddExpense