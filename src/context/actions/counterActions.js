import { GET_COUNT, SET_COUNT } from "../actionTypes/counterTypes";

export const getCountAction = (payload) => (dispatch) => {
    dispatch({
        type: GET_COUNT,
        payload: payload,
    })
}

export const setCountAction = (payload) => (dispatch) => {
    dispatch({
        type: SET_COUNT,
        payload: payload
    })
}