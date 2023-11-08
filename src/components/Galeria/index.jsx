import styled from "styled-components"
import Title from "../Title"
import Populares from "./Populares"
import Tags from "./Tags"
import Imagem from "./Imagem";

const GaleriaContainer = styled.div`
    display: flex;
`;

const FluidSection = styled.section`
    flex-grow: 1;
`;

const ImageList = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    gap: 24px;
`;

const Galeria = ({ fotos = [] }) => {
    return (
        <>
            <Tags />
            <GaleriaContainer>
                <FluidSection>
                    <Title>Navegue pela galeria</Title>
                    <ImageList>
                        {fotos.map(foto => <Imagem key={foto.id} foto={foto} />)}
                    </ImageList>
                </FluidSection>
                <Populares />
            </GaleriaContainer>
        </>
    )
}

export default Galeria