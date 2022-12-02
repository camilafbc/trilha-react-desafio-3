
import { Button } from '../../components/button/index'
import { Header } from '../../components/header';
import { Input } from '../../components/input';
import { useNavigate } from 'react-router-dom';

import { 
    Column,
    Container,
    CadastroText,
    CadastroSubText,
    TextAncor,
    Row,
    Form,
    SubtitleCadastro,
    Title,
    TitleCadastro,
    Wrapper
} from "./styles";

const Cadastro = () => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/feed')
    } 

    return (
        <>
        <Header />
        <Container>
            <Column>
                <Title>
                   A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleCadastro>Comece agora grátis</TitleCadastro>
                    <SubtitleCadastro>Crie sua conta e make the change._</SubtitleCadastro>
                    <Form>
                        <Input placeholder="Nome Completo" />
                        <Input placeholder="E-mail" />
                        <Input placeholder="Senha" type="password" />
                        <Button title="Criar minha conta" variant="secondary" onClick={handleClickSignIn} type="button"/>
                        <Row>
                            <CadastroText>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</CadastroText>
                        </Row>
                            <CadastroSubText>
                                Já tenho conta.<TextAncor href='/login'> Fazer login</TextAncor>
                            </CadastroSubText>
                        <Row>
                        </Row>
                    </Form>
                </Wrapper>
            </Column>
        </Container>
        
        </>
        )
}

export { Cadastro }