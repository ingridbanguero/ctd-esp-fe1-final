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
        ADD_FAVORITE: (state, action : PayloadAction<Character>) => {
            state.character.push(action.payload)
        },
        DELETE_FAVORITE: (state, action : PayloadAction<number>) => {
            console.log(action.payload)
            state.character = state.character.filter((favorite) => favorite.id !== action.payload)
        },
        DELETE_ALL_FAVORITE: (state) => {
            state.character = []
        },
    },
})

const favoritesReducer = favoritesSlice.reducer;

export const { ADD_FAVORITE, DELETE_FAVORITE, DELETE_ALL_FAVORITE } = favoritesSlice.actions;
export default favoritesReducer;