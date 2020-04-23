import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SellerSelection = ({ seller }) => {
  return (
    <div>
      <img src={seller.avatarSrc}></img>
      <div>{seller.id}</div>
      <h2>{seller.storeName}</h2>
      <h4>{seller.description}</h4>
    </div>
  );
};

export default SellerSelection;
