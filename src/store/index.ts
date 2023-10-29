import { configureStore, createSlice } from "@reduxjs/toolkit"
import { useSelector, TypedUseSelectorHook } from "react-redux"

//createSlice é para criar em pedacinhos a nossa fatia do estado que vamos compartilhar entre os componentes
const todoSlice  = createSlice({
    name : "todo",
    initialState : ['Fazer café' , 'Estudar Redux', 'Estudar Zustand'],

    reducers: {
        add: (state, action) => {
            state.push(action.payload.newTodo)
        },
    },
    
})
//configuração de estado dentro do store
export const store = configureStore({
    //reducer e exatamente as informções que a gente vai compartilhar entre todos os componentes da nossa aplicação 
    reducer: {
        todo : todoSlice.reducer
    },
})

export const {add} = todoSlice.actions
//o get retorna todo o meu estado
// RootState retorna o formato do meu estado
// criei uma nova função de selector para usar esse ele tipado
export type RootState = ReturnType<typeof store.getState>

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector