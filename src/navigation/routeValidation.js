import { Route, Redirect } from 'react-router-dom';

// Simple Auth check with out token just to stop us to navigate in any private route
// noinspection CommaExpressionJS
export const ValidationRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        // Here need to check if Token exist because is unsecure
        getLoginStatus() // TODO: TOKEN
            ? <Component {...props} />
            :
            <Redirect to={{
                pathname: '/',
                state: { from: props.location }
            }}/>

    )}/>
)

const getLoginStatus = () => {
    return sessionStorage.getItem("token")
}