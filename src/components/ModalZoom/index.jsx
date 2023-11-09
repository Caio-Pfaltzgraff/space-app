import styled from "styled-components"
import Imagem from "../Galeria/Imagem"
import IconButton from "../IconButton";

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`;

const Dialog = styled.dialog`
    position: absolute;
    top: 292px;
    background-color: transparent;
    padding: 0;
    border: none;
    width: 900px;
    display: flex;
    justify-content: center;
    form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
        }
    }
`;

const ModalZoom = ({ foto, aoFechar, aoAlternarFavorito }) => {
    return (
        <>
            {foto && <>
                <Overlay />
                <Dialog open={!!foto} onClose={aoFechar}>
                    <Imagem foto={foto} expandida={true} aoAlternarFavorito={aoAlternarFavorito}/>
                    <form method="dialog">
                        <IconButton formMethod="dialog">
                            <img src="/icons/fechar.png" alt="Icone de fechar" />
                        </IconButton>
                    </form>
                </Dialog>
            </>}
        </>
    )
}

export default ModalZoom