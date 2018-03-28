import * as actionTypes from '../actions/index'
import * as constants from '../constants/constants'

const { pendingOf, fulfilledOf, rejectedOf } = actionTypes;

export default function BtnLogin (state={}, action) {
    const { type, payload } = action;

    switch(type){
        case fulfilledOf( constants.Login_Args ):
            return {
                ...state,
                a:1
            };

        case rejectedOf( constants.Login_Args ):
            return {
                ...state,
                b:1
            };

        case pendingOf( constants.Login_Args ):
            return {
                ...state,
                c:1
            };

        default:
            return state
    }
}