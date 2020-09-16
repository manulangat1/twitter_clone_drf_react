import axios from 'axios'
import { LOAD_POSTS , ADD_POST, POST_DETAIL} from './types'
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
    axios.post('/api/',body,tokenConfig(getState))
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

export const getPostById = (slug) => (dispatch,getState) => {
    axios.get(`/api/${slug}/`)
        .then(res => {
            dispatch({
                type:POST_DETAIL,
                payload:res.data
            })
        })
        .catch(err => console.log(err))
}