import React from 'react'

import { Header } from '../../components/header';
import { Card } from '../../components/card';
import { UserInfo } from '../../components/UserInfo';

import { 
    Container,
    Column,
    Title,
    TitleHighlight
    } from "./styles";

const Feed = () => {
    return (
        <>
        <Header autenticado={true} />
        <Container>
        <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
              <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
                <UserInfo nome="Camila Fernanda" image="https://avatars.githubusercontent.com/u/97132028?v" percentual={25}/>
                <UserInfo nome="Camila Fernanda" image="https://avatars.githubusercontent.com/u/97132028?v" percentual={65}/>
                <UserInfo nome="Camila Fernanda" image="https://avatars.githubusercontent.com/u/97132028?v" percentual={45}/>
                <UserInfo nome="Camila Fernanda" image="https://avatars.githubusercontent.com/u/97132028?v" percentual={72}/>
            </Column>
        </Container>
        
        </>
        )
}

export { Feed }