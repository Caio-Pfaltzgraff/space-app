import styled from "styled-components"
import IconButton from "../../IconButton";

const Card = styled.figure`
    position: relative;
    width: ${props => props.$expandida ? '90%' : "400px"};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    & > img {
        position: relative;
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

const Badger = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: rgba(153, 169, 203, 0.3);
    color: #FFF;
    font-size: 18px;
    padding: 8px 8px;
    border-radius: 8px;
`;

const Imagem = ({ foto, expandida = false, aoZoomSolicitado, aoAlternarFavorito }) => {

    const iconeFavorito = foto.favorita ? "/icons/favorito-ativo.png" : "/icons/favorito.png"

    return (
        <Card $expandida={expandida} id={`foto-${foto.id}`}>
            <img src={foto.path} alt={foto.titulo} />
            <Badger>{foto.tag}</Badger>
            <figcaption>
                <h3>{foto.titulo}</h3>
                <footer>
                    <h4>{foto.fonte}</h4>
                    <IconButton onClick={() => aoAlternarFavorito(foto)}>
                        <img src={iconeFavorito} alt="Icone de favorito" />
                    </IconButton>
                    {!expandida && <IconButton aria-hidden={expandida} onClick={() => aoZoomSolicitado(foto)}>
                        <img src="/icons/expandir.png" alt="Icone de expandir" />
                    </IconButton>}
                </footer>
            </figcaption>
        </Card>
    )
}

export default Imagem