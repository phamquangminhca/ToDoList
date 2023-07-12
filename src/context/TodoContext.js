import React, { useReducer, createContext, useEffect } from 'react';

export const TodoContext = createContext();

//get data from local storage
const getTodos = () => {
    const todos = localStorage.getItem('todos');
    if (todos) {
        return JSON.parse(todos);
    } else {
        return [];
    }
}

//Initial state
const INITIAL_STATE = getTodos()

//reducer
const todoReducer = (state, action) => {
    const {type, payload} = action;
    switch(type) {
        case 'ADD_TODO':
            return [...state, payload];
        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== payload);
        default:
            return state;
    }
}


export const TodoContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(todoReducer, INITIAL_STATE);

    //save to local storage
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(state))
    }, [state]);

    //Add Todo Action
    const addTodoAction = title => {
        dispatch({
            type: 'ADD_TODO',
            payload: {
                id: state.length + 1,
                title
            },
        })
    }

    //Delete Todo Action
    const deleteTodoAction = id => {
        dispatch({
            type: 'DELETE_TODO',
            payload: id,
        })
    }
    return (
        <>
            <TodoContext.Provider value={{state, addTodoAction, deleteTodoAction}}>
                {children}
            </TodoContext.Provider>
        </>
    )
}