import React from 'react'
import classes from './Jug.scss'

const numKingsClassName = ['zero', 'one', 'two', 'three', 'four'];

export const Jug = (props) => (
  <div className={classes.jug}>
    <div className={classes.glass}>
      <div className={classes.water + " " + classes[numKingsClassName[props.kingsFlipped]]}></div>
    </div>
  </div>
)

Jug.propTypes = {
}

export default Jug;
