import {Navigate} from "react-router";
import React, {FC} from "react";
import {useAppSelector} from "../store/hooks";

interface IRouteProtectedProps {
    children:React.ReactChild|React.ReactNode
}

export const RouteProtected:FC<IRouteProtectedProps> = ({children}) => {

    const isAuthed = useAppSelector(state=>state.userReducer.isAuth)

    if (!isAuthed) {
        // user is not authenticated
        return <Navigate to="/login"/>;
    }
    return (
        <>
            {children}
        </>
    )
};