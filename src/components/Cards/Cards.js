import React from 'react'
import classes from './Cards.scss'
import Card from '../Card'

export const Cards = (props) => (
  <div>
    <button className='btn btn-default' onClick={props.initCards}>
      Start Game
    </button>
    <button className='btn btn-default' onClick={props.shuffleCards}>
      Shuffle Cards
    </button>
    <div className={classes.circleContainer}>
      {props.cards.map((card, i) =>
        <Card
          key={card.key}
          rank={card.rank}
          textRank={card.textRank}
          symbol={card.symbol}
          suit={card.suit}
          flipped={card.flipped}
          onClick={() => props.flipCard(card.key)}
        />
      )}
    </div>
  </div>
)

Cards.propTypes = {
  cards: React.PropTypes.array.isRequired,
  initCards: React.PropTypes.func.isRequired,
  shuffleCards: React.PropTypes.func.isRequired,
  flipCard: React.PropTypes.func.isRequired
}

export default Cards
