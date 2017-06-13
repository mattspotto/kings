import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import Modal from 'react-modal';
import Header from '../Header';
import classes from './Cards.scss';
import Card from '../Card';
import Jug from '../Jug';
import CardFlipped from '../CardFlipped';

class Cards extends Component {
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
      showTip,
      hideTip,
      hideGameOver
    } = this.props;

    let gameOverModal = null;

    if (cards.isGameOver) {
      gameOverModal = (
        <div className="notification is-warning">
          <button className="delete"
            onClick={() => hideGameOver()}>
          </button>

          Game Over
        </div>
      );
    }

    return (
      <section className="hero is-primary is-fullheight">
        <Header />

        <div className={`${classes.base} ${settings.tableSelected.id}`}>
          <div className={`hero-body ${classes.cardsHero}`}>
            <div className="container has-text-centered">
              <div className="columns is-mobile">
                <div className="column is-one-third is-offset-one-third">
                  {gameOverModal}
                </div>
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
                  hideTip={ () => hideTip() }
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
  cards: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
  initCards: PropTypes.func.isRequired,
  hideLastFlipped: PropTypes.func.isRequired,
  flipCard: PropTypes.func.isRequired,
  showTip: PropTypes.func.isRequired,
  hideTip: PropTypes.func.isRequired,
  hideGameOver: PropTypes.func.isRequired
}

export default Cards;
