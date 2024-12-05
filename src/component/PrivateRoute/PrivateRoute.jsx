import {  useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const { user } = useContext(authContext);
    if(!user){
        return <Navigate to="/login" replace={true} />
    }
    return children;
};

export default PrivateRoute;