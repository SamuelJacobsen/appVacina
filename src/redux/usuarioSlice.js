import { createSlice } from '@reduxjs/toolkit';

const initialValues = {
    id: null,
    nome: null
}

export const usuarioSlice = createSlice({
    name: 'usuario',
    initialState: initialValues,
    reducers: {
        reducerSetUsuario: (state, action) => {
            state.id = action.payload.id
            state.nome = action.payload.nome
        }
    }
})

export const { reducerSetUsuario } = usuarioSlice.actions

export default usuarioSlice.reducer