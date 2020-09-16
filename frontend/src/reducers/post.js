import { } from '../actions/types'

const intialState = {
    posts:[],
    hasMore:true,
    offset:0,
    limit:4
}

export default function(state=intialState,action){
    switch(action.type){
        default:
            return state
    }
}