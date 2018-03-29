import * as actionTypes from '../actions/index'
import * as constants from '../constants/constants'

const { pendingOf, fulfilledOf, rejectedOf } = actionTypes;

export default function BtnLogin (state={}, action) {
    const { type, payload } = action;

    switch(type){
        case fulfilledOf( constants.Login_Args ):
            console.log("正确完成");
            return {
                ...state,
                a:"RESOVE"
            };

        case rejectedOf( constants.Login_Args ):
            console.log("完成抛错");
            return {
                ...state,
                a:"REJECTED"
            };

        case pendingOf( constants.Login_Args ):
             console.log("pending开始");
            return {
                ...state,
                a:'PENGDING'
            };

        default:
            console.log("初始化，来自登录");
            return state
    }
}