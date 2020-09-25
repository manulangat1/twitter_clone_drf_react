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
    console.log(body)
    axios.post('/api/create/',body,tokenConfig(getState))
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

export const getPostBySlug = (slug) => (dispatch,getState) => {
    axios.get(`/api/post/${slug}/`,tokenConfig(getState))
        .then(res => {
            dispatch({
                type:POST_DETAIL,
                payload:res.data
            })
        })
        .catch(err => console.log(err))
}