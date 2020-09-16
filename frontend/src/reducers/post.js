import { LOAD_POSTS , ADD_POST, POST_DETAIL} from '../actions/types'

const intialState = {
    posts:[],
    post:{},
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
        case POST_DETAIL:
            return{
                ...state,
                post:action.payload
            }
        default:
            return state
    }
}