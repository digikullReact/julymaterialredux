import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { v4 as uuidv4 } from 'uuid';
import { fetchGoogleBooks, fetchProducts } from "../thunk";


const initialState={
    todos:[],
    apiData:[],
    emptyState:{
        name:"",
        date:moment().format("YYYY-MM-DD")
    },

    editData:{
        name:"",
        date:moment().format("YYYY-MM-DD")

    }

}

const todo=createSlice({
    name:"todo",
    initialState,
    reducers:{
        // this is an action
        addTodo:function(state,action){
            // object instead
           // console.log(action.payload);
            
           console.log(state.emptyState.date);
           console.log(state.emptyState.name);
        
          //  state.todos.push({name:action.payload.name,id:uuidv4(),date:action.payload.date});
          state.todos.push({...state.emptyState,id:uuidv4(),isCompleted:false});

        },
        deleteTodo:function(state,action){
            console.log(action.payload);

          

            // object instead
           // state.todos=state.todos.filter(ele=>ele.id!=action.payload)

        },
        handleemptyState:function(state,action){
            console.log(action.payload);

        // debugger;

            //debugger;
            state.emptyState[action.payload.name]=action.payload.value;

            // object instead
           // state.todos=state.todos.filter(ele=>ele.id!=action.payload)

        },

        handlePopupEditData:function(state,action){
            state.editData=action.payload

        },

        // this will edit the data in our list

      EditData:function(state,action){

        
            //state.editData=action.payload

            // first filter out the old data
           let filtered= state.todos.filter(ele=>ele.id!=action.payload.id);
           filtered.push(action.payload);
           state.todos=filtered;

        },
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            let data=action.payload.data;
            state.apiData=data;


        });
        builder.addCase(fetchProducts.rejected,(state,action)=>{

        });

        builder.addCase(fetchProducts.pending,(state,action)=>{

        });

        builder.addCase(fetchGoogleBooks.fulfilled,(state,action)=>{
           // debugger;
            let data=action.payload.data;
            state.apiData=data;


        });
        builder.addCase(fetchGoogleBooks.rejected,(state,action)=>{

        });

        builder.addCase(fetchGoogleBooks.pending,(state,action)=>{

        })


    }

})

export const {addTodo,deleteTodo,handleemptyState,handlePopupEditData,EditData}=todo.actions

export default todo.reducer