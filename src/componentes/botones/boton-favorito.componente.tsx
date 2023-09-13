import './boton-favorito.css';

type botonFavorito = {
    esFavorito: boolean;
    onClick: () => void
}

/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * @param {Object} props - The parameters received by props.
 * @param {boolean} props.esFavorito - The page number to fetch.
 * @param {func} props.onClick - Function to executed when marking or unmarking a favorite.
 * @returns JSX element 
 */
const BotonFavorito = ({esFavorito, onClick} : botonFavorito) => {
    const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png"

    return <div className="boton-favorito">
        <img src={src} alt={"favorito"} onClick={onClick} />
    </div>
}

export default BotonFavorito;