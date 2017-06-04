import React from 'react'
import classes from './Card.scss'

export const Card = (props) => {
  const flippedClass = props.flipped
    ? classes.flipped
    : classes.unflipped;
  const cardClass = props.flipped
    ? classes.front
    : `${classes.back} ${classes[props.cardBack]}`;

  return (
    <div className={classes.flipContainer}>
      <div className={`${classes.flipper} ${flippedClass}`}>
        <div className={`${classes.card} ${cardClass} ${classes[props.suit.name]}`} onClick={props.onClick}>
          <div className={classes.cardContents}>
            <div className={`${classes.corner} ${classes.top}`}>
              <span className={classes.number}>{props.rank.symbol}</span>

              <span>{props.suit.symbol}</span>
            </div>

            <div className={`${classes.corner} ${classes.bottom}`}>
              <span className={classes.number}>{props.rank.symbol}</span>

              <span>{props.suit.symbol}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

Card.propTypes = {
  rank: React.PropTypes.object.isRequired,
  suit: React.PropTypes.object.isRequired,
  flipped: React.PropTypes.bool.isRequired,
  cardBack: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired
};

export default Card;
