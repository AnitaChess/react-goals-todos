import API from 'goals-todos-api';

export const TODO_ACTIONS = {
    ADD: 'ADD_TODO',
    REMOVE: 'REMOVE_TODO',
    TOGGLE: 'TOGGLE_TODO'
};

function addTodo(todo) {
    return {
        type: TODO_ACTIONS.ADD,
        todo
    }
}

function removeTodo(id) {
    return {
        type: TODO_ACTIONS.REMOVE,
        id
    }
}

function toggleTodo(id) {
    return {
        type: TODO_ACTIONS.TOGGLE,
        id
    }
}

export function handleAddTodo(name, cb) {
    return (dispatch) => {
        return API.saveTodo(name)
            .then((todo) => {
                dispatch(addTodo(todo));
                cb();
            })
            .catch(() => alert("There was an error. Try again."));
    }
}

export function handleDeleteTodo(todo) {
    return (dispatch) => {
        dispatch(removeTodo(todo.id));

        return API.deleteTodo(todo.id)
            .catch(() => {
                dispatch(addTodo(todo));
                alert('An error occurred. Try again.');
            })
    }
}

export function handleToggleTodo(id) {
    return (dispatch) => {
        dispatch(toggleTodo(id));

        return API.saveTodoToggle(id)
            .catch(() => {
                dispatch(toggleTodo(id));
                alert('An error occurred. Try again.');
            })
    }
}
