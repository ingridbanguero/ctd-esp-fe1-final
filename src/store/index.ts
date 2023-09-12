import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux" 
import characterReducer from "./character/slice";
import favoritesReducer from "./favorites/slice";

export const store = configureStore({
   reducer: {
    characters: characterReducer,
    favorites: favoritesReducer
   }
});

// Tipamos el hook useSelector y useDispatch
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

type DispatchFunc = () => AppDispatch;

export const useAppDispatch : DispatchFunc = useDispatch
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;

export default store;