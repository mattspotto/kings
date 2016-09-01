import React from 'react'
import Modal from 'react-modal';
import classes from './Cards.scss'
import Card from '../Card'
import CardFlipped from '../CardFlipped'

export const Cards = (props) => (
  <div>
    <button className='btn btn-default' onClick={props.initCards}>
      Start Game
    </button>
    <button className='btn btn-default' onClick={props.shuffleCards}>
      Shuffle Cards
    </button>
    <div className={classes.circleContainer}>
      {props.cards.cards.map((card, i) =>
        <Card
          key={card.key}
          rank={card.rank.symbol}
          textRank={card.rank.name}
          symbol={card.suit.symbol}
          suit={card.suit.name}
          flipped={card.flipped}
          onClick={() => props.flipCard(card.key)}
        />
      )}
    </div>
    <Modal
      isOpen={props.cards.lastFlipped.isVisible}
      onRequestClose={() => props.hideLastFlipped()}
      className={classes.flippedCard}
    >
      <CardFlipped
        suit={props.cards.lastFlipped.suit}
        rank={props.cards.lastFlipped.rank}
        rule={props.cards.lastFlipped.rule}
      />
    </Modal>
  </div>
)

Cards.propTypes = {
  cards: React.PropTypes.object.isRequired,
  initCards: React.PropTypes.func.isRequired,
  shuffleCards: React.PropTypes.func.isRequired,
  hideLastFlipped: React.PropTypes.func.isRequired,
  flipCard: React.PropTypes.func.isRequired
}

export default Cards
