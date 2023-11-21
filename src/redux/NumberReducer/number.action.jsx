import { ADD_NUMBER_REQUEST, ADD_NUMBER_SUCCESS, ADD_NUMBER_FAILURE, SUBTRACT_NUMBER_REQUEST, SUBTRACT_NUMBER_SUCCESS, SUBTRACT_NUMBER_FAILURE } from './number.types'


export const incrementNumber = (number) => (dispatch) => {
    try {
        dispatch({ type: ADD_NUMBER_REQUEST });

        dispatch({ type: ADD_NUMBER_SUCCESS, payload: number + 1 });
    } catch (error) {
        dispatch({ type: ADD_NUMBER_FAILURE, payload: error.message });
    }
}


export const decrementNumber = (number) => (dispatch) => {

    try {
        dispatch({ type: SUBTRACT_NUMBER_REQUEST });
        dispatch({ type: SUBTRACT_NUMBER_SUCCESS, payload: number - 1 })
    } catch (error) {
        dispatch({ type: SUBTRACT_NUMBER_FAILURE, payload: error.message })
    }
}
