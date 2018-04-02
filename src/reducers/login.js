import * as actionTypes from '../actions/index'
import * as constants from '../constants/constants'
import Cookies from 'js-cookie/src/js.cookie'

const { pendingOf, fulfilledOf, rejectedOf } = actionTypes;

export default function BtnLogin (state={islogin: false,}, action) {
    const { type, payload } = action;

    switch(type){
        case fulfilledOf( constants.Login_Args ):
            console.log("正确完成");
            if(payload.status === "error"){
                console.log(payload.msg)
            }else if(payload.status === "success"){
                Cookies.set('react-islogin', payload.msg, { path: '' });
            }
            return {
                ...state,
                islogin: true,
            };

        case rejectedOf( constants.Login_Args ):
            console.log("完成抛错");
            return {
                ...state,
                islogin: false,
            };

        case pendingOf( constants.Login_Args ):
             console.log("pending开始");
            return {
                ...state,
                islogin: false,
            };

        default:
            console.log("初始化，来自登录");
            return state
    }
}