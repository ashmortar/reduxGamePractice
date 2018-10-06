import React from 'react';
import PropTypes from 'prop-types';
import FlyingObjetBase from './FlyingObjectBase';
import FlyingObjectTop from './FlyingObjectTop';

const FlyingObject = (props) => (
  <g>
    <FlyingObjetBase position={props.position}/>
    <FlyingObjectTop position={props.position}/>
  </g>
);

FlyingObject.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired
};

export default FlyingObject;