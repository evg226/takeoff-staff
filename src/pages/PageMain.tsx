import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

export const PageMain:FC = () => {
    return (
        <>
            <h1>
                Welcome to our application!
            </h1>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, nemo!</p>
            <NavLink to={'/contacts'} className={'nav-link'}><h3>Перейти к контактам {'>>'} </h3></NavLink>
        </>
    );
};

