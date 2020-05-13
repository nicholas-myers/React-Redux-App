import axios from "axios"

export const INITIAL_CARD_FETCH = "INITIAL_CARD_FETCH"
export const CARD_FETCH_SUCCESS = "CARD_FETCH_SUCCESS"
export const CARD_FETCH_FAILURE = "CARD_FETCH_FAILURE"


export const fetchCards = () => {
    return dispatch => {
        dispatch({ type: INITIAL_CARD_FETCH })

        axios.get("https://api.scryfall.com/cards")
        .then(res => {
            // console.log(res.data.data)
            console.log(res.data.data)
            dispatch({ type:CARD_FETCH_SUCCESS, payload: res.data.data })
            
        })
        .catch(err => {
            dispatch({ type: CARD_FETCH_FAILURE })
        })
    }
}

