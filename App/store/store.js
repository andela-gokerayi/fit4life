import { createStore } from 'redux'
import {
    MENU_REQUEST,
    MENU_REQUEST_SUCCESS,
    MENU_REQUEST_ERROR,
} from './constants'


const initialState = {
    list: [], // where we'll store users
    requesting: false,
    successful: false,
    messages: [],
    errors: [],
}

export const menu = (state = initialState, action) => {
    switch (action.type) {
        case MENU_REQUEST:
            return {
                ...state,
                requesting: true,
                successful: false,
                messages: [{
                  body: 'Fetching menu list...!',
                }],
                errors: [],
            }

        case MENU_REQUEST_SUCCESS:
            return {
                list: action,
                requesting: false,
                successful: true,
                messages: [{
                    body: 'Menu fetched!'
                }],
                errors: [],
            }
        
        case MENU_REQUEST_ERROR:
            return {
                requesting: false,
                successful: false,
                messages: [],
                errors: state.errors.concat[{
                  body: action.error.toString(),
                }],
            }
        
        default:
            return state
    }
}

let store = createStore(menu);

export default store;