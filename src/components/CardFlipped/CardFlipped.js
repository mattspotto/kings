import React from 'react'
import classes from './CardFlipped.scss'

export const CardFlipped = (props) => (
  <div className={classes.cardFlipped + " " + classes[props.suit.name]}>
    <div className={classes.cardContents}>
      <div className={classes.corner + " " + classes.top}>
        <span className={classes.number}>{props.rank.symbol}</span>

        <span>{props.suit.symbol}</span>
      </div>

      <div className={classes.rule}>
        <div className={classes.rule__heading}> {props.rule.name} </div>
        <div className={classes.rule__description}> {props.rule.description} </div>

          <div className={classes.tipButton}>
            <button
              type="button"
              className="btn btn-default btn-lg"
              onClick={ () => props.showTip() }
            >
              <span className="glyphicon glyphicon-question-sign" aria-hidden="true"></span> Tip
            </button>
            <div className={classes.tipShown}>
              {props.tipShown}
            </div>
          </div>
      </div>

      <div className={classes.corner + " " + classes.bottom}>
        <span className={classes.number}>{props.rank.symbol}</span>

        <span>{props.suit.symbol}</span>
      </div>
    </div>
  </div>
)

CardFlipped.propTypes = {
}

export default CardFlipped
