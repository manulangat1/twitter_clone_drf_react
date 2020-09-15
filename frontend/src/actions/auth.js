import { LOGIN_SUCCESS,LOGIN_FAIL,REGISTER_FAIL,REGISTER_SUCCESS,USER_LOADED,USER_LOADING,AUTH_ERROR} from './types'
import axios from 'axios'


export const login = (email,password) => (dispatch,getState) => {
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
    const body = JSON.stringify({email,password})
    axios.post('/api/login/',body,config)
    
        .then( res => {
            dispatch({
                type:LOGIN_SUCCESS,
                payload:res.data
            })
        })
        .catch( err => {
            console.log(err)
            dispatch({
                type:LOGIN_FAIL
            })
        })
}

export const loadUser = () => (dispatch,getState) => {
    //User Loading
    dispatch({type:USER_LOADING})
    const token = getState().auth.token
    const config  = {
        headers:{
            'Content-Type':'application/json'
        }
    }
    if(token){
        config.headers['Authorization'] = `Token ${token}`
    }
    axios.get('/api/user/',config)
        .then( res => {
            dispatch({
                type:USER_LOADED,
                payload:res.data
            })
        })
        .catch( err => {
            dispatch({
                type:AUTH_ERROR
            })
        })
}