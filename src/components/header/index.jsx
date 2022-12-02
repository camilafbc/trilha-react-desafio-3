import React from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../../assets/logo-dio.png';

import { Button } from '../button';

import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from "./styles";

const Header = ({autenticado}) => {

    const navigate = useNavigate();

    const handleClickLogin = () => {
        navigate('/login')
    }

    const handleClickCadastar = () => {
        navigate('/cadastro')
    } 


    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="logo-da-dio" />
                    {autenticado ? (
                        <>
                        <BuscarInputContainer>
                            <Input placeholder='Buscar...'/>
                        </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                        ) : null}
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src="https://avatars.githubusercontent.com/u/97132028?v"/>
                    ) : (
                    <>
                        <MenuRight href="/">Home</MenuRight>
                        <Button title="Entrar" onClick={handleClickLogin} />
                        <Button title="Cadastrar" onClick={handleClickCadastar}/>
                    </>)}
                </Row>
            </Container>
        </Wrapper>
    )
}


export { Header }