import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCards } from "../actions/cardActions";
import styled from "styled-components";

const Container = styled.div`
  background-color: #333;
  box-shadow: inset 0 0 10px 10px gray;
  padding: 1rem;
  color: lightgray;
  text-shadow: 0 0 10px goldenrod;
  display: flex;
  justify-content: space-around;
  flex-flow: wrap;
`;
const CardImage = styled.img`
  border-radius: 1rem;
  height: 20rem;
  box-shadow: ;
`;
const Card = styled.div`
  width: 20%;
  margin: 1%;
`;

const MagicCards = (props) => {
  useEffect(() => {
    props.fetchCards();
  }, []);
  return (
    <Container>
      {props.isFetching && <div>fetching cards...</div>}
      {props.cards &&
        props.cards.map((card) => {
          return (
            <Card>
              <CardImage src={card.image_uris.normal} />
            </Card>
          );
        })}
    </Container>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    loadingCards: state.loadingCards,
    cards: state.cards,
    cardError: state.cardError,
  };
};

export default connect(mapStateToProps, { fetchCards })(MagicCards);
