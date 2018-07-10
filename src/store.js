import {createStore} from 'redux';
const ADD_TODO = 'ADD_TODO';
const ADD_ITEM = 'ADD_ITEM';
const DELETE_TODO = 'DELETE_TODO';

export const addTodo = payload =>({
    type: ADD_TODO,
    payload
});



const reducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO: {
            return {
                ...state,
                list: state.list.concat(state.payload)
            }
        }
        case ADD_ITEM: {
            return {
                ...state,
                currentItem: action.item_temp
            }
        }
        case DELETE_TODO: {
            return {
                ...state,

            }
        }
        default:{
            return state;
        }
    }
};

export default createStore(reducer, {list: []});