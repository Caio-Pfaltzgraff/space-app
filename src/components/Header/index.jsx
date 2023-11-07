import styled from "styled-components"
import TextInput from "../TextInput";

const HeaderStyles = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img {
        max-width: 212px;
    }
`;

const Header =  () => {
    return (
        <HeaderStyles>
            <img src="/images/logo.png" alt=""/>
            <TextInput type="text"/>
        </HeaderStyles>
    )
}

export default Header