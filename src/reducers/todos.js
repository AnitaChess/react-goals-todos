import {TODO_ACTIONS} from '../actions/todos';
import {RECEIVE_DATA} from "../actions/shared";

export default function todos(state = [], action) {
    switch (action.type) {
        case TODO_ACTIONS.ADD:
            return state.concat([action.todo]);
        case TODO_ACTIONS.REMOVE:
            return state.filter(todo => todo.id !== action.id);
        case TODO_ACTIONS.TOGGLE:
            return state.map(todo => todo.id !== action.id ? todo :
                Object.assign({}, todo, {complete: !todo.complete}));
        case RECEIVE_DATA:
            return action.todos;
        default:
            return state;
    }
}
