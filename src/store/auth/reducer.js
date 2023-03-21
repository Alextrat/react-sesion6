import{
    DO_LOGIN,
    DO_LOGIN_OK,
    DO_LOGIN_FAIL,
    
    DO_LOGOUT,
    DO_LOGOUT_OK,
    DO_LOGOUT_FAIL
}from "./actionTypes"
// esta funcion recupera el user si está en el navagador y sinó lo devuelve vacio. Se le pasa esta función al state
function recoverUser(){
    try{
        return JSON.parse(localStorage.getItem("_user"))
    }catch(err){
        return {}
    }
}
const initialState={
    loadingLogin : false,
    user: recoverUser(),
    error:{
        message:""
    }
}
export default function AuthReducer(state = initialState, action){
     // eslint-disable-next-line default-case
     switch(action.type){
        case DO_LOGIN:
            state = {...state, loadingLogin:true}
            break

        case DO_LOGIN_OK:
            state = {...state, loadingLogin: false, user: action.payload}
            break
        case DO_LOGIN_FAIL:
            state= {...state, loadingLogin: false, user: {}}
            break
        case DO_LOGOUT:
            state = {...state, } 
            break
        case DO_LOGOUT_OK:
            state = {...state, user: {}}
        break       
    } 
    return state

}