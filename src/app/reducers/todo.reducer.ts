import {TodoActionTypes} from '../shared/enum/todo-action-types.enum';
import {ActionParent} from '../actions/todo.actions';
import {Todo} from '../models/ToDo';
import { Store } from '@ngrx/store';

export const initialState: Todo[] = [
    {title: "Todo 1"},
    {title: "Todo 2"},
    {title: "Todo 3"}
];

export function TodoReducer (state = initialState, action: ActionParent) {
    switch(action.type) {
        case TodoActionTypes.Add:
            return [...state, action.payload];
        case TodoActionTypes.Remove:
            let obj: Todo[] = [];
            for (let index = 0; index < state.length; index++) {
                obj[index]  = state[index];
            }
            [obj.splice(action.payload, 1)];
            console.log(...state);
            return obj;
        default: return state;
    }
}