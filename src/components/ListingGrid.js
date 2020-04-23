import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import ItemSelection from "./ItemSelection";

const ListingGrid = ({ itemList }) => {
  return (
    <ItemImgs>
      {itemList.map(item => (
        <ItemSelection key={item.id} item={item} />
      ))}
    </ItemImgs>
  );
};

ListingGrid.propType = {
  itemList: PropTypes.arrayOf(
    PropTypes.shape({
      Id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      latinName: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired,
      countryOfOrigin: PropTypes.string.isRequired,
      sellerId: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      quantity: PropTypes.string.isRequired
    })
  ).isRequired
};

const ItemImgs = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 32px;
  margin: 32px 0;
`;

export default ListingGrid;
