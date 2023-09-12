import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { GET_CHARACTERS } from '../../store/character/slice';

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */
const GrillaPersonajes = () => {
    const characters = useAppSelector(state => state.characters)
    const page = useAppSelector(state => state.characters.page)
    const filter = useAppSelector(state => state.characters.filter)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(GET_CHARACTERS({page, filter}))
    }, [dispatch, page, filter])

    return (
    <div className="grilla-personajes">
        { characters.character.map(character => <TarjetaPersonaje character={character} key={character.id}/>) }
    </div>
    );
}
 
export default GrillaPersonajes;