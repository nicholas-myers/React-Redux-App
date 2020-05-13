import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchMagicCards } from "../actions/cardActions";
import styled from "styled-components"

const Container = styled.div`

background-color: #333;
    box-shadow: inset 0 0 10px 10px gray;
    padding: 1rem;
    color: lightgray;
    text-shadow: 0 0 10px goldenrod;

`


const MagicCards = (props) => {
  useEffect(() => {
    props.fetchMagicCards();
  }, []);
  return (
    <Container>
      
      {props.isFetching && <div>fetching cards...</div>}
      {props.data &&
        props.data.map((card) => {
          return (
            <div>
              <h2>{card.name}</h2>
              <img src={card.image_uris.normal} />
            </div>
          );
        })}
    </Container>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    isFetching: state.isFetching,
    data: state.data,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchMagicCards })(MagicCards);
