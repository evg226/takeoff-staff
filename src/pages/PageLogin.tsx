import React, {FC, useState} from 'react';
import {userSlice} from "../store/UserStore/userSlice";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {queryLogin} from "../store/UserStore/UsersApi";
import {useNavigate} from "react-router-dom";
import {Button, Card,  Container, Form} from "react-bootstrap";

export const PageLogin: FC = () => {

    const navigate = useNavigate();
    const {isLoading, error, isAuth} = useAppSelector(state => state.userReducer);
    if (isAuth) navigate(-1);

    const dispatch = useAppDispatch();
    const [username, setUsername] = useState('');
    const {userLogout} = userSlice.actions;

    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(queryLogin(username));
    }

    const handleLogout = () => {
        dispatch(userLogout()); // без отправки на сервер т.к. в JSONserver'e нет обработки login logout
    }
    return (
        <>
            <h1>Login</h1>
            {!isAuth &&
                <Container className={"d-flex justify-content-center"}>
                    <Card className={'col-12 col-sm-9 cols-md-4 cols-lg-3 p-4'}>
                        <h4 className={'text-start mb-3'}>Авторизация</h4>
                        <Form onSubmit={handleLogin} className={'justify-content-center'}>

                            <Form.Control type={"text"} className={'mb-3'}
                                          placeholder={'username'}
                                          aria-label="Username"
                                          value={username}
                                          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                              setUsername(event.target.value)}/>

                            {isLoading && <p>{isLoading}</p>}
                            {error && <p className={'text-danger mt-2 text-start'}>{error}</p>}
                            <Button type={'submit'} variant={'outline-secondary'} className={'col-6'}>Login</Button>
                            <p><small className={'text-secondary'}>подсказка: tom</small></p>
                        </Form>
                    </Card>
                </Container>
            }
        </>
    );
};

