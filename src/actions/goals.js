import API from 'goals-todos-api';

export const GOAL_ACTIONS = {
    ADD: 'ADD_GOAL',
    REMOVE: 'REMOVE_GOAL',
};

function addGoal(goal) {
    return {
        type: GOAL_ACTIONS.ADD,
        goal
    }
}

function removeGoal(id) {
    return {
        type: GOAL_ACTIONS.REMOVE,
        id
    }
}

export function handleAddGoal(name, cb) {
    return (dispatch) => {
        return API.saveGoal(name)
            .then((goal) => {
                dispatch(addGoal(goal));
                cb();
            })
            .catch(() => alert("There was an error. Try again."));
    }
}

export function handleDeleteGoal(goal) {
    return (dispatch) => {
        dispatch(removeGoal(goal.id));

        return API.deleteGoal(goal.id)
            .catch(() => {
                dispatch(addGoal(goal));
                alert('An error occurred. Try again.');
            })
    }
}
