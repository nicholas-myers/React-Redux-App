import React from "react";
import styled from "styled-components"

const Navi = styled.nav`

    background-color: #333;
    box-shadow: inset 0 0 10px 10px gray;
    padding: 1rem;
    color: lightgray;
    text-shadow: 0 0 10px goldenrod;

`


const Nav = () => {
  return (
    <Navi>
      <form>
        <label>Search:</label>
        <input />
      </form>
    </Navi>
  );
};



export default Nav;
