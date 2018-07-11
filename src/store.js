const ADD_TODO = 'ADD_TODO';
const ADD_ITEM = 'ADD_ITEM';
const DELETE_TODO = 'DELETE_TODO';

export const addTodo = payload =>({
    type: ADD_TODO,
    payload
});

export const addItem = payload =>({
    type: ADD_ITEM,
    payload
});

const initialState = {
    list: [],
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO: {
            return {
                ...state,
                list: state.list.concat(action.payload)
            }
        }
        case ADD_ITEM: {
            return {
                ...state,
                currentItem: action.payload
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