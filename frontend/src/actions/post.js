import axios from 'axios'
import { LOAD_POSTS } from './types'
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