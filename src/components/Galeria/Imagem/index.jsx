import styled from "styled-components"
import IconButton from "../../IconButton";

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
        }
    }
`;

const Imagem = ({ foto, expandida = false, aoZoomSolicitado }) => {
    return (
        <Card $expandida={expandida} id={`foto-${foto.id}`}>
            <img src={foto.path} alt={foto.titulo} />
            <figcaption>
                <h3>{foto.titulo}</h3>
                <footer>
                    <h4>{foto.fonte}</h4>
                    <IconButton><img src="/icons/favorito.png" alt="Icone de favorito" /></IconButton>
                    {!expandida && <IconButton aria-hidden={expandida} onClick={() => aoZoomSolicitado(foto)}>
                        <img src="/icons/expandir.png" alt="Icone de expandir" />
                    </IconButton>}
                </footer>
            </figcaption>
        </Card>
    )
}

export default Imagem