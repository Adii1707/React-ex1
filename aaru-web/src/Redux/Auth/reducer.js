import * as types from "./actionType"

const initialState = {
    isLoading: false,
    Data: [],
    isError: false,
  }


  export const reducer = (state= initialState, action)=>{
  
const {type, payload} = action;

switch(type){
    case types.POST_DATA_REQUEST:
        return {
            ...state, 
            isLoading: true,
            // Data: payload,
        }
    case types.POST_DATA_SUCCESS:
        return {
            ...state, 
            isLoading: false,
            Data: payload,
        }
        case types.POST_DATA_FAILURE:
        return {
            ...state, 
            isLoading: true,
            // Data: payload,
        }
        case types.GET_DATA_REQUEST:
        return {
            ...state, 
            isLoading: true,
            
            // Data: payload,
        }
    case types.GET_DATA_SUCCESS:
        return {
            ...state,
            isLoading: false,
            Data: payload,
        }
        case types.GET_DATA_FAILURE:
        return {
            ...state, 
            isLoading: true,
            isAuth: false,
            // Data: payload,
        }
        default: return state;
}



  }