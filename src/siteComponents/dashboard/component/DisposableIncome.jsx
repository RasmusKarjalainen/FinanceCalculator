import { MdEuroSymbol } from "react-icons/md";

const DisposableIncome = ({language, salary, expenses}) => {
    return (
        <>
            <MdEuroSymbol size={150} color={'white'}/>
            <h1>{'Monthly disposable income'}</h1>
            <h1>{salary - expenses}</h1>
        </>
    )
}

export default DisposableIncome