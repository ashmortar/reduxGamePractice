import React from 'react';
import PropTypes from 'prop-types';

import {pathFromBezierCurve } from '../utils/formulas';

const FlyingObjectTop = (props) => {
  const style = {
    fill: '#f5f',
    stroke: '#7d7d7d'
  };

  const baseWidth = 40;
  const halfBase = 20;
  const height = 25;

  const cubicBezierCurvec = {
    initialAxis: {
      x: props.position.x - halfBase,
      y: props.position.y,
    },
    initialControlPoint: {
      x: 10,
      y: -height,
    },
    endingControlPoint: {
      x: 30,
      y: -height,
    },
    endingAxis: {
      x: baseWidth,
      y: 0,
    },
  };

  return (
    <path
      style={style}
      d={pathFromBezierCurve(cubicBezierCurvec)}
    />
  );
};

FlyingObjectTop.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
};

export default FlyingObjectTop;