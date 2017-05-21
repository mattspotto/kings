import React from 'react';
import Modal from 'react-modal';
import classes from './Cards.scss';
import Card from '../Card';
import Jug from '../Jug';
import CardFlipped from '../CardFlipped';

class Cards extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {};
  }

  render() {
    return (
      <div>
        <button className='btn btn-default' onClick={this.props.initCards}>
          Deal Cards
        </button>

        <button className='btn btn-default' onClick={this.props.shuffleCards}>
          Shuffle Cards
        </button>

        <Jug kingsFlipped={this.props.cards.kingsFlipped} />

        <div className={classes.ovalContainer}>
          {this.props.cards.cards.map((card, i) => {
            const props = Object.assign({}, {
              cardBack: this.props.settings.cardsSelected.id,
              onClick: () => this.props.flipCard(card)
            }, card);

            return <Card {...props} />;
          })}
        </div>

        <Modal
          isOpen={this.props.cards.lastFlipped.isVisible}
          onRequestClose={() => this.props.hideLastFlipped()}
          className={classes.flippedCard}
        >
          <CardFlipped {...this.props.cards.lastFlipped}
            tipShown={this.props.cards.lastFlipped.tipShown}
            showTip={ () => this.props.showTip() }
          />
        </Modal>
      </div>
    );
  }
};

Cards.propTypes = {
  cards: React.PropTypes.object.isRequired,
  settings: React.PropTypes.object.isRequired,
  initCards: React.PropTypes.func.isRequired,
  shuffleCards: React.PropTypes.func.isRequired,
  hideLastFlipped: React.PropTypes.func.isRequired,
  flipCard: React.PropTypes.func.isRequired,
  showTip: React.PropTypes.func.isRequired
}

export default Cards;
