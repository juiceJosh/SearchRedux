import {ADD_LOG, DELETE_LOG, SEARCH_INPUT} from '../actions/actionTypes'

const initialState = {
    // user: "",
    // password: "",
    credentials: [
        {id: 1, user: 'Aj', password: 'hello111', food: 'fries'},
        {id: 2, user: 'Vince', password: '1234567890', food: 'burger' },
        {id: 3, user: 'Tobi', password: '0987654321', food: 'adobo' },
        {id: 4, user: 'Allen', password: 'hi222', food: 'chicken' },
        {id: 5, user: 'Dungan', password: 'yo4444', food: 'nuggets' },
        {id: 6, user: 'Shaun', password: 'sizzling555', food: 'bangus' },
        {id: 7, user: 'Rav', password: 'hey667', food: 'sinigang' },
        {id: 8, user: 'Shar', password: 'sup7777', food: 'sisig' },
        {id: 9, user: 'Ez', password: 'op8888', food: 'pizza' },
        {id: 10, user: 'Vincent', password: 'po9999', food: 'lechon'},
    ],
    searchField: '',
    filteredUser: []
}

//https://daveceddia.com/react-redux-immutability-guide/

export default (state=initialState, action) => {
    switch(action.type){
        case SEARCH_INPUT:
            const {searchField} = action.payload;
            return {
                ...state, 
                searchField, 
                filteredUser: state.credentials.filter( info => 
                    info.user.toLowerCase().includes(searchField.toLowerCase()
                ))
            }

        case ADD_LOG:
            const addLog = state.credentials
            const {user, password, food} = action.payload
            const userAdded = {id: addLog.length + 1, user, password, food}
            console.log(userAdded)
            console.log(addLog)
            return {
                credentials: [...addLog,userAdded ]
            }
                
        case DELETE_LOG:
            const delLog  = state.credentials
            return {    
                ...state,
                credentials: delLog.filter(logId => logId.id !== action.payload),
                
            }   
        default:
            return state;
    }
}
