import {FETCH_USERS} from '../actions/types';

const initialState = {
    items:[]
}


export default function(state=initialState,action){
    switch(action.type){
        case FETCH_USERS:
            console.log('use reducer');
            console.log(action.payload)
            return {
                ...state,
                items:action.payload.results
            }
            break;
        default:
            return state;
    }
}