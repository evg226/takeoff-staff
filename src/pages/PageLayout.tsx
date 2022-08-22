import React, {FC} from 'react';
import {Header} from "./Header";
import {Outlet} from "react-router-dom";

export const PageLayout: FC = () => {
    return (
        <div className={'App'}>
            <Header/>
            <div className={'py-4'}>
                <Outlet/>
            </div>
        </div>
    );
};