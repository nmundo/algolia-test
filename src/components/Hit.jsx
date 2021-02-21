import React from 'react';
import PropTypes from 'prop-types';
import './hit.css';

const Hit = ({ hit, currencySymbol }) => {
  return (
    <div className="hit-container">
      <div className="hit-image">
        <img src={hit.image} alt="Product" />
      </div>
      <div className="hit-title">{hit.name}</div>
      <div className="hit-price">{`${currencySymbol}${hit.price}`}</div>
    </div>
  );
};

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default Hit;