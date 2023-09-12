import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { useAppSelector } from "../store";
import { DELETE_ALL_FAVORITE } from "../store/favorites/slice";
import { useAppDispatch } from "../store";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */
const PaginaFavoritos = () => {
    const dispatch = useAppDispatch()
    const favorites = useAppSelector(state => state.favorites.character)

    const handlerRemoveFav = () => dispatch(DELETE_ALL_FAVORITE());
    
    return <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button className="danger" onClick={handlerRemoveFav}>Eliminar favoritos</button>
        </div>
        {
            favorites.length > 0 ? <GrillaPersonajes characters={favorites} /> : <p>No hay favoritos</p>
        }
    </div>
}

export default PaginaFavoritos