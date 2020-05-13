export const INITIAL_CARD_FETCH = "INITIAL_CARD_FETCH"


export const fetchMagicCards = () => {
    return dispatch => {
        dispatch({ type: INITIAL_CARD_FETCH })
    }
}
