import {Switch, Route} from "react-router-dom";
import Login from "../../screens/Login";

const LoginRoute = () => {
    return (
        <Switch>
            <Route path="/login" component={Login} />
        </Switch>
    );
}
export default LoginRoute;