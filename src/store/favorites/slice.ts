import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import Character from '../../types/character';

export type Favorites = {
    character : Character[],
}

const initialState : Favorites = {
    character: [], 
}

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        /**
         * Reducer function to add a character as a favorite.
         * @function
         * @param {Favorites} state - The current state of favorites.
         * @param {PayloadAction<Character>} action - The action object containing the character to be marked as favorite.
         */
        ADD_FAVORITE: (state, action : PayloadAction<Character>) => {
            state.character.push(action.payload)
        },
        /**
         * Reducer function to remove a character as a favorite.
         * @function
         * @param {Favorites} state - The current state of favorites.
         * @param {PayloadAction<number>} action - The object id containing the character to be removed as favorite.
         */
        DELETE_FAVORITE: (state, action : PayloadAction<number>) => {
            console.log(action.payload)
            state.character = state.character.filter((favorite) => favorite.id !== action.payload)
        },
         /**
         * Reducer function to remove all characters as a favorite.
         * @function
         * @param {Favorites} state - The current state of favorites.
         */
        DELETE_ALL_FAVORITE: (state) => {
            state.character = []
        },
    },
})

const favoritesReducer = favoritesSlice.reducer;

export const { ADD_FAVORITE, DELETE_FAVORITE, DELETE_ALL_FAVORITE } = favoritesSlice.actions;
export default favoritesReducer;