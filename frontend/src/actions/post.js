import axios from 'axios'
import { LOAD_POSTS } from './types'


export const loadPosts = () => (dispatch,getState) => {
    const limit = getState.post.limit
    const offset = getState.post.offset
    axios.post(`/api/?limit=${limit}&offset=${offset}`)
        .then(res => {
            dispatch({
                type:LOAD_POSTS,
                payload:res.dat
            })
        })
        .catch(err => console.log(err))
}