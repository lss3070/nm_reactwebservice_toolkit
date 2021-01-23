
import {configureStore, createAction, createReducer, createSlice} from "@reduxjs/toolkit"

// const ADD ="ADD";
// const DELETE="DELETE";


//actionCreater
const addToDo = createAction("ADD");
const deleteToDo =createAction("DELETE");


//reducer
const reducer = createReducer([],{
    [addToDo] : (state, action)=>{
        state.push({text:action.payload,id:Date.now()})
    },
    [deleteToDo] : (state, action)=>{
        //return 할경우에는 무조건 새로운 state여야 한다..
        return state.filter(toDo=>toDo!==action.payload)
    }
});

const toDos = createSlice({
    name:'toDosReducer',
    initialState:[],
    redcers:{
        add:(state,action)=>{
            state.push({text:action.payload,id:Date.now()})
        },
        remove:(state,action)=>state.filter(toDo=>toDo.id!==action.payload)
    }
})
//for redux developer tool..!!
const store= configureStore({reducer:toDos,reducer});

export const {add,remove} = toDos.actions;

export default store;