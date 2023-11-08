import styled from "styled-components"
import Title from "../../Title"
import fotos from './fotosPopulares.json'

const Div = styled.section`
    min-width: 212px;
`;

const Column = styled.section`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const Image = styled.img`
    max-width: 212px;
    max-height: 158px;
    border-radius: 20px;
`;

const Button = styled.button`
    width: 100%;
    margin-top: 24px;
    background-color: transparent;
    border-radius: 10px;
    border: 2px solid #C98CF1;
    color: #FFF;
    font-size: 20px;
    padding: 12px 20px;
    cursor: pointer;
`;

const Populares = () => {
    return (
        <Div>
            <Title $alinhamento="center">Populares</Title>
            <Column>
                {fotos.map(foto => <Image key={foto.id} src={foto.path} alt={foto.alt}/>)}
            </Column>
            <Button>Ver mais</Button>
        </Div>
    )
}

export default Populares