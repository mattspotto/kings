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
    const {
      initCards,
      shuffleCards,
      kingsFlipped,
      cards,
      settings,
      flipCard,
      hideLastFlipped,
      showTip
    } = this.props;

    return (
      <div className={classes[settings.tableSelected.id]}>
        <button className='btn btn-default' onClick={initCards}>
          Deal Cards
        </button>

        <button className='btn btn-default' onClick={shuffleCards}>
          Shuffle Cards
        </button>

        <Jug kingsFlipped={cards.kingsFlipped} />

        <div className={classes.ovalContainer}>
          {cards.cards.map((card, i) => {
            const props = Object.assign({}, {
              cardBack: settings.cardsSelected.id,
              onClick: () => flipCard(card)
            }, card);

            return <Card {...props} />;
          })}
        </div>

        <Modal
          isOpen={cards.lastFlipped.isVisible}
          onRequestClose={() => hideLastFlipped()}
          className={classes.flippedCard}
        >
          <CardFlipped {...cards.lastFlipped}
            tipShown={cards.lastFlipped.tipShown}
            showTip={ () => showTip() }
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
