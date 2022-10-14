const backendUri = 'http://localhost:5000/'
const frontEndUri = 'http://localhost:3000/'

const callPoints = {
    login: 'login',
    register: 'register',
    authenticateLogin: 'authenticateLogin',
    addSalary: 'addSalary',
    getSalary: 'getSalary',
    addExpense: 'addExpense',
    getExpense: 'getExpense',
    getMonthlyExpense: 'getMonthlyExpense'
}

export { backendUri, frontEndUri, callPoints}