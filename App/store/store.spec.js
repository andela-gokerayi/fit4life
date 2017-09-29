import { menu } from './store.js';
const _ = require('lodash');
import { Reducer } from 'redux-testkit';

const initialState = {
    list: [],
    requesting: false,
    successful: false,
    messages: [],
    errors: [],
}

describe('reducers', () => {

    describe('menu', () => {
        it('should provide the initial state', () => {
            expect(menu(undefined, {})).toEqual(initialState)
        });

        it('should handle MENU_REQUEST action', () => {
            const action = { type: 'MENU_REQUEST' };
            const result = getMinimumInitialState(
                {
                    requesting: true,
                    successful: false,
                    messages: [{
                        body: 'Fetching menu list...!'
                    }],
                    errors: [],
                }
            );
            Reducer(menu).expect(action).toReturnState(result);
        });
    })
})

function getMinimumInitialState (opts) {
    return _.merge({
        list: [],
        requesting: false,
        successful: false,
        messages: [],
        errors: [],
    }, opts);
}