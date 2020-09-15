import { LOGIN_SUCCESS,LOGIN_FAIL,REGISTER_FAIL,REGISTER_SUCCESS} from '../actions/types'

const intialState = {
    user:null,
    isAuthenticated:null,
    isLoading:false,
    token:localStorage.getItem('token')
}

export default function(state=intialState,action){
    switch(action.type){
        default:
            return state
    }
}