import styled from "styled-components"

const Card = styled.figure`
    width: ${props => props.$expandida ? '90%' : "400px"};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
    }
    figcaption {
        border-radius: 0px 0px 20px 20px;
        background: #001634;
        color: #D9D9D9;
        box-sizing: border-box;
        padding: 12px;
        h3{
            font-size: 20px;
            font-family: 'GandhiSansBold';
        }
        h4{
            font-size: 16px;
            flex-grow: 1;
        }
        h3, h4 {
            margin: 0;
        }
        footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            button {
                margin-left: 12px;
                background-color: transparent;
                border: none;
                cursor: pointer;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
`;

const Imagem = ({ foto, expandida = false }) => {
    return (
        <Card $expandida={expandida}>
            <img src={foto.path} alt={foto.titulo} />
            <figcaption>
                <h3>{foto.titulo}</h3>
                <footer>
                    <h4>{foto.fonte}</h4>
                    <button><img src="/icons/favorito.png" alt="Ícone de favorito" /></button>
                    <button><img src="/icons/expandir.png" alt="Ícone de expandir" /></button>
                </footer>
            </figcaption>
        </Card>
    )
}

export default Imagem