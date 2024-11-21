import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, name: 'abhi', age: 19 }]
};

export const todoslice = createSlice({
    name: JSON.parse(localStorage.getItem("todos")) || [],
    initialState, // Corrected spelling
    reducers: {
        addtodo: (state, action) => {
            const todo = {
                id: nanoid(),
                name: action.payload.name, 
                age: action.payload.age  
            };
            state.todos.push(todo); 
            localStorage.setItem("todos", JSON.stringify(state.todos));
        },
        removetodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id); 
            localStorage.setItem("todos", JSON.stringify(state.todos));
        }
    }
});

export const { removetodo, addtodo } = todoslice.actions;
export default todoslice.reducer;
