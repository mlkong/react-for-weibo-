import * as constants from '../constants/constants'
import * as storages from '../untils/storage'

export const pendingOf = actionType => `${actionType}_PENDING`;
export const fulfilledOf = actionType => `${actionType}_FULFILLED`;
export const rejectedOf = actionType => `${actionType}_REJECTED`;

export function BtnLogin( args ){
    return {
        type: constants.Login_Args,
        payload: storages.BtnLogin(args)
    }
}