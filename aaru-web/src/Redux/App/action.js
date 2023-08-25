import axios from "axios";
import * as types from "./actionType";




export const postTrackingData = ({usermail, Type, category, amount, date})=> (dispatch)=>{

    let TrakedData = {
          Email: usermail,
         Type: Type,
         Category: category,
         Amount: amount,
         Date: date,
    }
console.log(TrakedData)
    axios.post("http://localhost:4500/TrakedData", TrakedData)
    .then((res)=> dispatch({type: types.POST_TRACKING_DATA_SUCCESS, payload: res}))
    .catch((err)=> dispatch({type: types.POST_TRACKING_DATA_FAILURE, payload: err}))

}

export const getTrackingData = ()=> (dispatch)=>{

    
    axios.get("http://localhost:4500/TrakedData")
    .then((res)=> dispatch({type: types.GET_TRACKING_DATA_SUCCESS, payload: res.data}))
    .catch((err)=> dispatch({type: types.GET_TRACKING_DATA_FAILURE, payload: err}))

}
