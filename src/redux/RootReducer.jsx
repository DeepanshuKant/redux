import { combineReducers } from 'redux'
import numberReducer from './NumberReducer/number.reducer'

const RootReducer = combineReducers({
    // Reducers go here
    number: numberReducer
});

export default RootReducer;