import React from 'react';
import './App.css';
import {useRoutes} from "react-router-dom";
import {routeList} from "./pages/routeList";

function App() {
    const appRouter = useRoutes(routeList);
    return (
        <>
            {appRouter}
        </>
    );
}

export default App;
