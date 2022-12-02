import React from 'react'

import { FiThumbsUp } from 'react-icons/fi'

import { 
    CardContainer, 
    Content, 
    HasInfo, 
    ImageBackground, 
    PostInfo, 
    UserInfo, 
    UserPicture 
} from './styles'

const Card = () => {
    return (
        <CardContainer>
            <ImageBackground src='https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_960_720.jpg' />
            <Content>
                <UserInfo>
                    <UserPicture src='https://avatars.githubusercontent.com/u/97132028?v' />
                    <div>
                        <h4>Camila Fernanda</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para o curso de HTML e CSS</h4>
                    <p>Projeto feito para o curso de html e css no bootcamp DIO do Global Avanade... <strong>Saiba Mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #Javascript</h4>
                    <p>
                        <FiThumbsUp /> 10
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export { Card }