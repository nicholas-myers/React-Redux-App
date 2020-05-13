import React, { useEffect } from "react"
import { connect } from "react-redux"
import { fetchMagicCards } from "../actions/cardActions"

const MagicCards = (props) => {
    useEffect(() => {
        props.fetchMagicCards()
    }, [])
    return (
        <header> 
            <h1>Magic Cards</h1>
        </header>

    )
} 

const mapStateToProps = state => {
    console.log(state)
    return {

    }
}

export default connect(mapStateToProps, {fetchMagicCards})(MagicCards)