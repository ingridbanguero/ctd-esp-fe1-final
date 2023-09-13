import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import Character from '../../types/character';
import { ADD_FAVORITE, DELETE_FAVORITE } from '../../store/favorites/slice';
import { useAppDispatch, useAppSelector } from '../../store';

/**
 * Card for each character within the character grid.
 * @param {Object} props - The parameters received by props.
 * @param {Object} props.character - The object with the properties of each character
 * @returns JSX element 
 */
const TarjetaPersonaje = ({ character }: {character: Character}) => {
    const favorites = useAppSelector(state => state.favorites )
    const dispatch = useAppDispatch()

    const handlerFavorites = () => {
        if (favorites.character.find(e => e.id === character.id)){
            // Lo elimina
            dispatch(DELETE_FAVORITE(character.id))
        }else {
            dispatch(ADD_FAVORITE(character))
        }
    } 

    return <div className="tarjeta-personaje">
        <img src={character.image} alt={character.name}/>
        <div className="tarjeta-personaje-body">
            <span>{character.name}</span>
            <BotonFavorito esFavorito={favorites.character.find(e => e.id === character.id) ? true : false} onClick={handlerFavorites}/>
        </div>
    </div>
}

export default TarjetaPersonaje;