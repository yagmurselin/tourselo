import { FILTER_CLICKED } from "../Actions/types";

const INITIAL_STATE = {
    showModal:false,
};

export default (state= INITIAL_STATE, action)=> {
    switch (action.type){
        case FILTER_CLICKED:
            return{...state,showModal:action.payload};
            default:
                return state;
    }
};