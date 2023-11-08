
const ModalZoom = ({ foto }) => {
    return (
        <>
            <dialog open={!!foto}>
                <p>Olá</p>
                <form method="dialog">
                    <button>OK</button>
                </form>
            </dialog>
        </>
    )
}

export default ModalZoom