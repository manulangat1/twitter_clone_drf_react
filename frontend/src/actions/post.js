import axios from 'axios'
import { LOAD_POSTS , ADD_POST} from './types'
import { tokenConfig} from './auth'

export const loadPosts = () => (dispatch,getState) => {
    console.log(tokenConfig(getState))
    const limit = getState().post.limit
    const offset = getState().post.offset

    axios.get(`/api/?limit=${limit}&offset=${offset}`,tokenConfig(getState))
        .then(res => {
            dispatch({
                type:LOAD_POSTS,
                payload:res.data
            })
        })
        .catch(err => console.log(err))
}
export const addPost = ({text,slug}) => (dispatch,getState) => {
    const body = JSON.stringify({text,slug})
    axios.post('/api/')
        .then(
            res => {
                dispatch({
                    type:ADD_POST,
                    payload:res.data
                })
            }
        )
        .catch(err => console.log(err))
}