import { createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import Character from '../../types/character';

export type CharacterState = {
    character : Character[], // Lista de personajes
    page: number,
    isLoading: boolean,
    filter: string,
}

const initialState : CharacterState = {
    character: [], 
    filter: "",
    page: 1,
    isLoading: false,
}

/**
 * Fetches all characters from the API based on the given parameters.
 * @async
 * @function
 * @param {Object} params - The parameters for the API call.
 * @param {number} params.page - The page number to fetch.
 * @param {string} params.filter - The name to filter characters by text.
 * @returns {Promise<Object[]>} - A promise that resolves to an array of character objects.
 */
export const GET_CHARACTERS = createAsyncThunk("character/getCharacters", async ({ page = 1, filter = ""}: { page: number; filter: string }) => {
    const name = `&name=${filter}`;
    const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}${name}`);
    const data = await res.json();
    const characters : Character[] = data.results.map((character : any) => {
        const char : Character = {
            id: character.id,
            name: character.name,
            image: character.image,
        }
        return char
    })
    console.log(characters);
    return characters;
})

export const characterSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
         /**
         * Reducer function to filter characters for page
         * @function
         * @param {CharacterState} state - The current state of characters.
         * @param {PayloadAction<number>} action - The number of the new page to filter.
         */
        CHANGE_PAGE: (state, action : PayloadAction<number>) => {
            state.page += action.payload;
            state.page <= 0 && (state.page = 1);
        },
        /**
         * Reducer function to filter characters for text
         * @function
         * @param {CharacterState} state - The current state of characters.
         * @param {PayloadAction<string>} action - The text of the character name to filter.
         */
        FILTER_TEXT: (state, action : PayloadAction<string>) => {
            state.filter = action.payload;
        },
        /**
         * Reducer function to clear filters to characters
         * @function
         * @param {CharacterState} state - The current state of characters.
         */
        CLEAN_FILTERS: (state) => {
            state.filter = "";
            state.page = 1;
        },
    },
    extraReducers : (builder) => {
        builder
            .addCase(GET_CHARACTERS.fulfilled, (state, action : PayloadAction<Character[]>) => {
            state.character = action.payload;
            state.isLoading = false;
        })
    } 
})

const characterReducer = characterSlice.reducer;

export const { CHANGE_PAGE, FILTER_TEXT, CLEAN_FILTERS } = characterSlice.actions;
export default characterReducer;