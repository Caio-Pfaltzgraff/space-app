import styled from "styled-components"
import Title from "../../Title"

const Div = styled.div`
    min-width: 212px;
`;

const Populares = () => {
    return (
        <Div>
            <Title $alinhamento="center">Populares</Title>
        </Div>
    )
}

export default Populares