import React from 'react';
import FaHandORight from 'react-icons/lib/fa/hand-o-right';
import classes from './CardFlipped.scss';

class CardFlipped extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {};
  }

  renderTips() {
    const { tipShown, showTip } = this.props;
    let tipsEl = null;

    if (tipShown) {
      tipsEl = (
        <div className="notification is-primary">
          <button className="delete"></button>

          {this.props.tipShown}
        </div>
      );
    }

    return (
      <div className={classes.tipButton}>
        <button
          type="button"
          className="button is-light is-medium"
          onClick={ () => this.props.showTip() }
        >
          <FaHandORight />&nbsp; Tip
        </button>

        {tipsEl}
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
