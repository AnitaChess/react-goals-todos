import {GOAL_ACTIONS} from '../actions/goals';
import {RECEIVE_DATA} from "../actions/shared";

export default function goals(state = [], action) {
    switch (action.type) {
        case GOAL_ACTIONS.ADD:
            return state.concat([action.goal]);
        case GOAL_ACTIONS.REMOVE:
            return state.filter(goal => goal.id !== action.id);
        case RECEIVE_DATA:
            return action.goals;
        default:
            return state
    }
}
