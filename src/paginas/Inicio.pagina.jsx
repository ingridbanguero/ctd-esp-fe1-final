import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import { useAppDispatch, useAppSelector } from '../store';
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { CLEAN_FILTERS } from '../store/character/slice';
 
/**
 * Main page with filters and grid with characters
 * @returns JSX element 
 */
const PaginaInicio = () => {
    const characters = useAppSelector(state => state.characters.character)
    const dispatch = useAppDispatch()

    const handlerClean = () => {
        dispatch(CLEAN_FILTERS())
    }

    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger" onClick={handlerClean}>Limpiar filtros</button>
        </div>
        <Filtros />
        <Paginacion />
        <GrillaPersonajes characters={characters}/>
        <Paginacion />
    </div>
}

export default PaginaInicio