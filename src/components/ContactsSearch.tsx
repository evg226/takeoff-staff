import Form from "react-bootstrap/Form";
import React, {FC, useState} from "react";
import Button from "react-bootstrap/Button";
import {contactsApi} from "../store/Servises/contactsApi";

interface IContactsSearchProps {
    search: (text: string) => void;
}

export const ContactsSearch: FC<IContactsSearchProps> = ({search}) => {
    const [searchInput, setSearchInput] = useState('');

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        search(searchInput);
    }
    return (
        <Form className="d-flex me-auto" onSubmit={handleSearch}>
            <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchInput}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setSearchInput(event.target.value)}
            />
            <Button variant="outline-success" type={"submit"}>Search</Button>
        </Form>
    )
}