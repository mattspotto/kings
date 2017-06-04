import React from 'react';
import Modal from 'react-modal';
import Header from '../Header';
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
      <section className="hero is-primary is-fullheight">
        <Header />

        <div className={`${classes.base} ${settings.tableSelected.id}`}>
          <div className="hero-body">
            <div className="container has-text-centered">
              <div className="container has-text-centered">
                <button className='button is-primary' onClick={initCards}>
                  Deal Cards
                </button>

                <button className='button is-primary' onClick={shuffleCards}>
                  Shuffle Cards
                </button>
              </div>

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
          </div>

          <div className="hero-foot">
            <nav className="tabs is-boxed is-fullwidth">
              <div className="container">
                <ul>
                  <li className="is-active"><a>Overview</a></li>
                  <li><a>Modifiers</a></li>
                  <li><a>Grid</a></li>
                  <li><a>Elements</a></li>
                  <li><a>Components</a></li>
                  <li><a>Layout</a></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </section>
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
