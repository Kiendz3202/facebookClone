import {
    Routes,
    Route,
    BrowserRouter,
    Link,
    Navigate,
    Outlet
} from "react-router-dom";
import AuthContext from "./store/auth-context";
import { useContext } from "react";

function PrivateRoute(props) {
    const auth = useContext(AuthContext)
    console.log(auth.currentUser)
    return auth.currentUser ? props.children : <Navigate to='/login' />
}

export default PrivateRoute