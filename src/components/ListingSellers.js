import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import SellerSelection from "./SellerSelection";

const ListingSellers = ({ sellerList }) => {
  return (
    <SellerImgs>
      {sellerList.map(seller => (
        <SellerSelection key={seller.id} seller={seller} />
      ))}
    </SellerImgs>
  );
};

ListingSellers.propType = {
  itemList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      storeName: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      avatarSrc: PropTypes.string.isRequired
    })
  ).isRequired
};

const SellerImgs = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 32px;
  margin: 32px 0;
`;

export default ListingSellers;
