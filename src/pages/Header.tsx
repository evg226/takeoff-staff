import React, {FC} from 'react';
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {routeList} from "./routeList";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {userSlice} from "../store/UserStore/userSlice";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {ContactsSearch} from "../components/ContactsSearch";

export const Header: FC = () => {
    const isAuthed = useAppSelector(state => state.userReducer.isAuth);
    const location = useLocation();
    console.log(location.pathname);
    const dispatch = useAppDispatch();
    const {userLogout} = userSlice.actions;
    const {user}=useAppSelector(state=>state.userReducer);

    const handleClickLogoutButton = () => {
        dispatch(userLogout());
    }
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">Takoff&nbsp;staff</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        navbarScroll
                    >
                        {
                            routeList[0].children.map((item, i) =>
                                item.path !== "*" && item.path !== "login" &&
                                <NavLink
                                    key={i}
                                    to={
                                        item.index ?
                                            "/"
                                            :
                                            "/" + item.path}
                                    className={"nav-link"}
                                >
                                    {item.name}
                                </NavLink>
                            )}
                        {
                            isAuthed ?
                                <>
                                <a href={""} onClick={handleClickLogoutButton} className={"nav-link"}>{user.username} Logout</a>
                                </>
                                :
                                <NavLink to={'/login'} className={"nav-link"}>Login</NavLink>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    );
};

