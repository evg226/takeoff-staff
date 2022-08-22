import React, {FC} from 'react';
import {ContactsContainer} from "../components/ContactsContainer";

export const PageContacts:FC = () => {
    return (
        <div>
            <h1>Страница контактов</h1>
            <ContactsContainer />
        </div>
    );
};

