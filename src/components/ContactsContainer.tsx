import React, {FC, useState} from "react";
import {contactsApi} from "../store/Servises/contactsApi";
import {ContactItem} from "./ContactItem";
import {IContact} from "../store/models/iContact";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import {Row} from "react-bootstrap";
import {ContactsSearch} from "./ContactsSearch";

export const ContactsContainer: FC = () => {
    const [searchParam, setSearchParam] = useState('');

    const {data: contacts, error, isLoading, refetch} = contactsApi.useFetchAllContactsQuery(searchParam);
    const [createContact, {error: createError, isLoading: isCreateLoading}] = contactsApi.useCreateContactMutation();
    const [updateContact, {}] = contactsApi.useUpdateContactMutation();
    const [deleteContact, {}] = contactsApi.useDeleteContactMutation();

    const handleCreate = async () => {
        const contact = {
            name: 'new',
            surname: 'newSur',
            phone: '000000000',
            address: 'fdfdf'
        };
        await createContact(contact as IContact);
    }

    const handleUpdate = (contact: IContact) => {
        updateContact(contact);
    }
    const handleRemove = (contact: IContact) => {
        deleteContact(contact);
    }

    const handleSearch = (searchText: string) => {
        setSearchParam(searchText);
    }

    return (
        <Container className={'contact__container'}>
            <div className={'d-flex justify-content-end mb-3'}>
                {contacts && <ContactsSearch search={handleSearch}/>}
                {createError && <span>Ошибка при создании контакта</span>}
                <Button variant={'outline-secondary'} onClick={handleCreate} className={'mx-2'}>
                    {isCreateLoading ? 'Создание...' : 'Создать'}
                </Button>
                <Button variant={'outline-secondary'} onClick={() => refetch()}>Обновить</Button>
            </div>

            {isLoading && <h3>Загрузка контактов...</h3>}
            {error && <h3>Ошибка при загрузке контактов</h3>}
            <Row className={"row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5"}>
                {contacts && contacts.map(contact =>
                    <ContactItem key={contact.id} contact={contact} update={handleUpdate} remove={handleRemove}/>
                )}
            </Row>
        </Container>
    )
}