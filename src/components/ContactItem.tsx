import {IContact} from "../store/models/iContact";
import React, {FC} from "react";
import {Button, ButtonGroup, Card} from "react-bootstrap";

interface IContactItemProps{
    contact:IContact,
    remove:(contact:IContact)=>void,
    update:(contact:IContact)=>void
}

export const ContactItem:FC<IContactItemProps> = ({contact,update,remove})=>{

    const handleUpdate =(e:React.MouseEvent)=>{
        const contactUpd={
            name:'update',
            surname:'newSurUpd',
            phone:'000000000Upd',
            address:'fdfdfUpd'
        };
        update({
            ...contact,
            ...contactUpd
        });
    }

    const handleRemove =(e:React.MouseEvent)=>{
        e.stopPropagation();
        remove(contact);
    }

    return (
        <div style={{height:'15rem'}} className={'px-0 py-1'}>
        <Card  className={'m-1 h-100'}>
            <Card.Body className={'d-flex flex-column justify-content-end'}>
                <Card.Title className={'mb-auto bg-secondary text-light'}>{contact.name} {contact.surname}</Card.Title>
                <Card.Text className={"text-start"}>
                    Адрес: {contact.address}
                </Card.Text>
                <Card.Text className={"text-start"}>
                    Телефон : {contact.phone}
                </Card.Text>
                <ButtonGroup>
                    <Button variant="outline-secondary" onClick={handleUpdate}>Изменить</Button>
                    <Button variant="outline-secondary" onClick={handleRemove}>Удалить</Button>
                </ButtonGroup>
            </Card.Body>
        </Card>
        </div>

    )
}