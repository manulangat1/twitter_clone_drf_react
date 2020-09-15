import { LOGIN_SUCCESS,LOGIN_FAIL,REGISTER_FAIL,
    REGISTER_SUCCESS,USER_LOADED,USER_LOADING,
    AUTH_ERROR, LOGOUT_SUCESS} from '../actions/types'

const intialState = {
    user:null,
    isAuthenticated:null,
    isLoading:false,
    token:localStorage.getItem('token')
}

export default function(state=intialState,action){
    switch(action.type){
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem('token',action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticated:true,
                isLoading:false
            }
        case USER_LOADING:
            return {
                ...state,
                isLoading:true
            }
        case USER_LOADED:
            return{
                ...state,
                isAuthenticated:true,
                isLoading:false,
                user:action.payload
            }
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT_SUCESS:
            localStorage.removeItem('token')
            return {
                ...state,
                user:null,
                isAuthenticated:false,
                isLoading:false,
                token:null
            }
        default:
            return state
    }
}