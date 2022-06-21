import { LIST_GIPHY } from "../actions/types";

const initialState=[]

const giphy_reducer = (giphy = initialState,action)=>{
    const { type , payload} = action

    switch(type){
        case LIST_GIPHY:
            
            return payload
        default:
            return giphy
    }
}

export default  giphy_reducer;
