import {createStore, combineReducers} from 'redux'
import contactReducer from '../reducers/contactReducer'
import filterReducer from '../reducers/filterReducer'

export default () =>{
    return createStore(combineReducers({
        contacts: contactReducer,
        filters: filterReducer
    }))
}