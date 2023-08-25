import * as types from "./actionType";
const initialState = {
    isLoading: false,
    Data: [],
    isError: false,
}

export const reducer = (state= initialState, action)=>{


const {type, payload} = action;

switch(type){
    case types.POST_TRACKING_DATA_REQUEST: 
    return {
        ...state,
        isLoading: true,

    }

    case types.POST_TRACKING_DATA_SUCCESS:
        return {
            ...state,
            isLoading: false,
            Data: payload,

        }
        case types.POST_TRACKING_DATA_FAILURE:
            return {
                ...state,
                isLoading: true,
                isError: true
            }
            case types.GET_TRACKING_DATA_REQUEST: 
            return {
                ...state,
                isLoading: true,
        
            }
        
            case types.GET_TRACKING_DATA_SUCCESS:
                return {
                    ...state,
                    isLoading: false,
                    Data: payload,
        
                }
                case types.GET_TRACKING_DATA_FAILURE:
                    return {
                        ...state,
                        isLoading: true,
                        isError: true
                    }
        
            default: return state;
}



}