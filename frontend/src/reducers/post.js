import { LOAD_POSTS , ADD_POST} from '../actions/types'

const intialState = {
    posts:[],
    hasMore:true,
    offset:0,
    limit:4
}

export default function(state=intialState,action){
    switch(action.type){
        
        case LOAD_POSTS:
            return{
                ...state,
                posts:[...state.posts,...action.payload.posts],
                hasMore:action.payload.hasMore,
                offset:state.offset+state.limit

            }
        case ADD_POST:
            return{
                ...state,
                posts:[action.payload,...state.posts]
            }
        default:
            return state
    }
}