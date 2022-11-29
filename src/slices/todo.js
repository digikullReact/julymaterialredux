import { createSlice } from "@reduxjs/toolkit";

const initialState={
    todos:[]

}

const todo=createSlice({
    name:"todo",
    initialState,
    reducers:{
        // this is an action
        addTodo:function(state,action){
            state.todos.push(action.payload);

        }
    }

})

export const {addTodo}=todo.actions

export default todo.reducer