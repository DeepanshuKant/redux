import { ADD_NUMBER_REQUEST, ADD_NUMBER_SUCCESS, ADD_NUMBER_FAILURE, SUBTRACT_NUMBER_REQUEST, SUBTRACT_NUMBER_SUCCESS, SUBTRACT_NUMBER_FAILURE } from './number.types'

const initialState = {
    number: localStorage.getItem("number") ? JSON.parse(localStorage.getItem("number")) : 0,
}

const numberReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_NUMBER_REQUEST, SUBTRACT_NUMBER_REQUEST:
            return {
                ...state,
                isLoading: true,
            }

        case ADD_NUMBER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                number: action.payload === 20 ? 0 : action.payload,
            }

        case SUBTRACT_NUMBER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                number: action.payload < 0 ? 0 : action.payload,
            }

        case ADD_NUMBER_FAILURE, SUBTRACT_NUMBER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }

        default:
            return state
    }
}

export default numberReducer;