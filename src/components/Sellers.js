import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ListingSellers from "./ListingSellers";

import { sellers } from "../data";

function Sellers(props) {
  return (
    <>
      <h1> Hi there! Here's a list of our friendly farmers!</h1>

      <ListingSellers sellerList={Object.values(sellers)} />
    </>
  );
}

export default Sellers;
