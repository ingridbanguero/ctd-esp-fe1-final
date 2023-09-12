import './filtros.css';
import { useAppDispatch } from '../../store';
import { FILTER_TEXT } from '../../store/character/slice';


const Filtros = () => {
    const dispatch = useAppDispatch()

    const handlerFilter = (event : any) => {
        console.log(event.target.value)
        dispatch(FILTER_TEXT(event.target.value))
    }

    return <div className="filtros">
        <label>Filtrar por nombre:</label>
        <input type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" onChange={handlerFilter} />
    </div>
}

export default Filtros;