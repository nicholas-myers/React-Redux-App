import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchMagicCards } from "../actions/cardActions";

const MagicCards = (props) => {
  useEffect(() => {
    props.fetchMagicCards();
  }, []);
  return (
    <div className="cardContainer">
      <header>
        <h1>Magic Cards</h1>
      </header>
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
    </div>
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
