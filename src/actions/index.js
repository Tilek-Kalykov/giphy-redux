import axios from "axios"; 
import { API,KEY } from "../config";
import { LIST_GIPHY } from "./types";



export const get_all_giphy = (name)=>async(dispatch)=>{
    const res = await axios.get(API+name+KEY)
    
    dispatch({
        type:LIST_GIPHY,
        payload:res.data?.data
    })
}
