import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { GET_CHARACTERS } from '../../store/character/slice';
import Character from '../../types/character';

/**
 * Grilla de personajes para la pagina de inicio
 * @param {Object} props - The parameters received by props.
 * @param {array} props.characters - The array with the characters to be rendered
 * @returns JSX element 
 */
const GrillaPersonajes = ({ characters }: {characters: Character[]}) => {

    const page = useAppSelector(state => state.characters.page)
    const filter = useAppSelector(state => state.characters.filter)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(GET_CHARACTERS({page, filter}))
    }, [dispatch, page, filter])

    return (
    <div className="grilla-personajes">
        { characters.map(character => <TarjetaPersonaje character={character} key={character.id}/>) }
    </div>
    );
}
 
export default GrillaPersonajes;