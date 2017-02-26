import React from 'react'
import classes from './CardFlipped.scss'

class CardFlipped extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {};
  }

  renderTips() {
    return (
      <div className={classes.tipButton}>
        <button
          type="button"
          className="btn btn-default btn-lg"
          onClick={ () => this.props.showTip() }
        >
          <span className="glyphicon glyphicon-question-sign" aria-hidden="true"></span> Tip
        </button>
        <div className={classes.tipShown}>
          {this.props.tipShown}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className={classes.cardFlipped + " " + classes[this.props.suit.name]}>
        <div className={classes.cardContents}>
          <div className={classes.corner + " " + classes.top}>
            <span className={classes.number}>{this.props.rank.symbol}</span>

            <span>{this.props.suit.symbol}</span>
          </div>

          <div className={classes.rule}>
            <div className={classes.rule__heading}> {this.props.rule.name} </div>
            <div className={classes.rule__description}> {this.props.rule.description} </div>

            {this.props.tips && this.props.tips.length ? this.renderTips() : null}
          </div>

          <div className={classes.corner + " " + classes.bottom}>
            <span className={classes.number}>{this.props.rank.symbol}</span>

            <span>{this.props.suit.symbol}</span>
          </div>
        </div>
      </div>
    );
  }
}

CardFlipped.propTypes = {
}

export default CardFlipped
