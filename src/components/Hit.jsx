import React from 'react';
import PropTypes from 'prop-types';
import './hit.css';

const Hit = ({ hit }) => {
  return (
    <div class='hit-container'>
      <div className='hit-image'>
        <img src={hit.image} />
      </div>
      <div className='hit-title'>{hit.name}</div>
      <div className='hit-price'>{hit.price}</div>
    </div>
  );
};

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default Hit;