import {DELETE_LOG, SEARCH_INPUT, ADD_LOG} from './actionTypes'


// export const userIn = user =>{
//     return {
//         type: USER_INPUT,
//         payload: user
//     }
// }
export const searchIn = input =>{
    return {
        type: SEARCH_INPUT,
        payload: input
    }
}
export const add_log = (user, password, food)=> {
    return{
        type: ADD_LOG,
        payload: { user, password, food }
    }
}
export const delete_Log = (index)=>{
    return{
        type: DELETE_LOG,
        payload: index
    }
}