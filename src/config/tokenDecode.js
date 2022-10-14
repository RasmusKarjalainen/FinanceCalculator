import jwt_decode from "jwt-decode"

const ReturnTokenHolder = () => {
    const token = sessionStorage.getItem("token")
    const decoded = jwt_decode(token);
    return decoded.user
}

const defaultDatabaseValues = (userInput, databaseInput) => {
    console.log('in progress')
}

export {
    ReturnTokenHolder,
    defaultDatabaseValues
}