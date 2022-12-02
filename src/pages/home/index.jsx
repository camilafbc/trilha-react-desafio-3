

import { useNavigate } from 'react-router-dom';

import banner from "../../assets/banner-dio.png";
import { Button } from '../../components/button';
import { Header } from '../../components/header';

import { 
    Container,
    TextContent,
    Title,
    TitleHiglight 
    } from "./styles";

const Home = () => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login')
    }    

    return (
        <>
        <Header />
        <Container>
            <div>
                <Title>
                    <TitleHiglight>
                        Implemente
                        <br />
                    </TitleHiglight>
                        o seu futuro global agora!
                </Title>
                <TextContent>
                    Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
                </TextContent>
                <Button title="Começar agora" variant="secondary" onClick={handleClickSignIn} />
            </div>
            <div>
                <img src={banner} alt="banner-dio" />
            </div>
        </Container>
        
        </>
        )
}

export {Home}