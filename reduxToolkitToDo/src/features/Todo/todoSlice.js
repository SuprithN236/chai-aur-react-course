// 1.2) import the createSlice and nanoid. nanoid is used to create id's
import { createSlice, nanoid } from "@reduxjs/toolkit";

// a store should have an initial state at the beginning. it could be an array
// or an object
const initialState = {
  todos: [
    {
      id: 1,
      text: "hello world",
    },
  ],
};

// then create a slice which takes in an object with name as the first property and initial state as the second. you can also give the initial state directly below or you can give it to a variable first as you did above. then the third one is reducers. it can have properties and functions. the functions get two parameters called state and action. state gives access of the values of the initial state

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // state always has the current updated value of the initialState variable. here it is an object of todos.
      // action contains values you need to add to the state
      const todo = {
        id: nanoid(),
        // payload is an object which has values of the text or any other values that you send as an object
        text: action.payload,
      };
      //   you are pushing the above todo to the state(initial state at the beginning)
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      // the value you give inside removeTodo function will be stored inside action.payload
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

//exporting reducer functions separately
export const { addTodo, removeTodo } = todoSlice.actions;

// you need to export a list of reducers to the store which needs to register these functions to work
export default todoSlice.reducer;
