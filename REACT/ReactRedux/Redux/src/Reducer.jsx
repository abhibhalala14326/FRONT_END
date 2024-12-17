import { TOY } from "./Const";


const value = 
{
    NumofToy:10
}

export const reducertoy = (state = value , action) =>
{
    switch (action.type) {
        case TOY:
            return {
                ...state,
                NumofToy:state.NumofToy - 1
            }
            
            
    
        default:return state
           
    }
}