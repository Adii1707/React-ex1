import axios from "axios";
import * as types from "./actionType";

const ADDDataRequest = ()=> {
    return {
      type: types.POST_DATA_REQUEST,
    };
  }
  const ADDDataSuccess = (payload)=> {
    return {
      type: types.POST_DATA_SUCCESS,
      payload
    };
  }
  const ADDDataFailure = ()=> {
    return {
      type: types.POST_DATA_FAILURE,
    };
  }
  //  get gata action functions

  const GetDataRequest = ()=> {
    return {
      type: types.GET_DATA_REQUEST,
    };
  }
  const GetDataSuccess = (payload)=> {
    return {
      type: types.GET_DATA_SUCCESS,
      payload
    };
  }
  const GetDataFailure = ()=> {
    return {
      type: types.GET_DATA_FAILURE,
    };
  }


export const postuserdata = ({name, email, password}) => (dispatch) => {
    
    let data = {
      name: name,
      email: email,
      password: password,
    };
 dispatch(ADDDataRequest());
    
    return axios.post(
        `http://localhost:4500/users`, data
      )
      .then((res) => {
        console.log(res)
       dispatch(ADDDataSuccess(res));
      })
       .catch((error) => {
         // dispatch(ADDDataFailure());
       });
  };


  export const getdata= ()=>(dispatch)=>{


    dispatch(GetDataRequest());
    
    return axios.get(
        `http://localhost:4500/users`)
      .then((res) => {
        console.log(res)
       dispatch(GetDataSuccess(res.data));
      })
       .catch((error) => {
          dispatch(GetDataFailure(error));
       });

  }