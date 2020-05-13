import { INITIAL_CARD_FETCH } from "../actions/cardActions"

const initialState = {
    isFetching: false,
    data: [],
    error: ""
}

export const mtgReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIAL_CARD_FETCH:
            return {
                ...state,
                isFetching: true
            }
        default:
            return state
    }
}