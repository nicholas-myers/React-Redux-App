import { 
    INITIAL_CARD_FETCH, 
    CARD_FETCH_SUCCESS, 
    CARD_FETCH_FAILURE } from "../actions/cardActions"

const initialState = {
    loadingCards: false,
    cards: [],
    cardError: ""
}

export const mtgReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIAL_CARD_FETCH:
            return {
                ...state,
                loadingCards: true
            }
            case CARD_FETCH_SUCCESS:
                return {
                    ...state,
                    loadingCards: false,
                    cards: action.payload
                }
        default:
            return state
    }
}