import {TODO_ACTIONS} from '../actions/todos';
import {GOAL_ACTIONS} from '../actions/goals';

const checker = (store) => (next) => (action) => {
    if (
        action.type === TODO_ACTIONS.ADD &&
        action.todo.name.toLowerCase().includes('bitcoin')
    ) {
        return alert("Nope. That's a bad idea.");
    }

    if (
        action.type === GOAL_ACTIONS.ADD &&
        action.goal.name.toLowerCase().includes('bitcoin')
    ) {
        return alert("Nope. That's a bad idea.");
    }

    return next(action);
};

export default checker;
