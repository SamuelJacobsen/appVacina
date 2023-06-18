import { configureStore } from '@reduxjs/toolkit';
import usuarioSlice from './usuarioSlice';
import vacinaSlice from './vacinaSlice';

export const store = configureStore({
    reducer: {
        usuario: usuarioSlice,
        vacina: vacinaSlice
    }
})