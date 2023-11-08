import styled from "styled-components"
import Title from "../Title"
import Populares from "./Populares"
import Tags from "./Tags"

const GaleriaContainer = styled.div`
    display: flex;
`;

const FluidSection = styled.section`
    flex-grow: 1;
`;

const Galeria = () => {
    return (
        <>
            <Tags />
            <GaleriaContainer>
                <FluidSection>
                    <Title>Navegue pela galeria</Title>

                </FluidSection>
                <Populares />
            </GaleriaContainer>
        </>
    )
}

export default Galeria