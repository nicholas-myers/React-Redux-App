import React from "react";
import { Link } from "react-router-dom"
import styled from "styled-components"

const Navi = styled.header`

    background-color: #333;
    box-shadow: inset 0 0 10px 10px gray;
    padding: 1rem;
    color: lightgray;
    text-shadow: 0 0 10px goldenrod;

`


const Nav = () => {
  return (
    <Navi>
        <Link>example</Link>
    </Navi>
  );
};

export default Nav;
