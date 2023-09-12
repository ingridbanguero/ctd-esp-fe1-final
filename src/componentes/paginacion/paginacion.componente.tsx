import './paginacion.css';
import { useAppDispatch, useAppSelector } from '../../store';
import { CHANGE_PAGE } from '../../store/character/slice';

/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
const Paginacion = () => {
    const page = useAppSelector(state => state.characters.page)
    const dispatch = useAppDispatch();

    return <div className="paginacion">
        <button disabled={page === 1 ? true : false} className={"primary"} onClick={() => dispatch(CHANGE_PAGE(-1))}>Anterior</button>
        <button disabled={false} className={"primary"} onClick={() => dispatch(CHANGE_PAGE(1))}>Siguiente</button>
    </div>
}

export default Paginacion;