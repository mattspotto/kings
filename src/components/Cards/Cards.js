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
            <div className="container">
              <nav className={`level is-mobile ${classes.footer}`}>
                <div className="level-left">
                  <div className="level-item">
                    <p className="subtitle is-5">
                      <strong>{cards.kingsFlipped}</strong> Kings
                      </p>
                    </div>
                  </div>

                  <div className="level-right">
                    <p className="level-item">
                      <a className="button is-primary" onClick={initCards}>New Game</a>
                    </p>
                  </div>
                </nav>
            </div>
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
  hideLastFlipped: React.PropTypes.func.isRequired,
  flipCard: React.PropTypes.func.isRequired,
  showTip: React.PropTypes.func.isRequired
}

export default Cards;
