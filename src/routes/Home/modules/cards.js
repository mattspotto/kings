import {
  suits,
  ranks
} from '../const/cardConstants.js';

// ------------------------------------
// Constants
// ------------------------------------
export const INIT_CARDS = 'INIT_CARDS'
export const SHUFFLE_CARDS = 'SHUFFLE_CARDS'
export const FLIP_CARD = 'FLIP_CARD'

// ------------------------------------
// Actions
// ------------------------------------
export function initCards() {
  return {
    type: INIT_CARDS,
  }
}

export function shuffleCards() {
  return {
    type: SHUFFLE_CARDS,
  }
}

export function flipCard(card) {
  return {
    type: FLIP_CARD,
    payload: card
  }
}

export const actions = {
  initCards,
  shuffleCards
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [INIT_CARDS]: (state, action) => {
    let cards = [];
    for (var i = 0; i < ranks.length; i++) {
      for (var j = 0; j < suits.length; j++) {
        let key = 's' + i + 'c' + j;
        cards.push({
          key: key,
          rank: ranks[i].symbol,
          textRank: ranks[i].name,
          symbol: suits[j].symbol,
          suit: suits[j].name,
          flipped: false
        });
      }
    }
    return cards;
  },
  [SHUFFLE_CARDS]: (state, action) => {
    let cards = [...state];
    // shuffle the cards
    var currentIndex = cards.length;
    var tempValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      tempValue = cards[currentIndex];
      cards[currentIndex] = cards[randomIndex];
      cards[randomIndex] = tempValue;
    }
    return cards;
  },
  [FLIP_CARD]: (state, action) => {
    console.log(action.payload);

    let cards = [...state];
    cards.find(card => card.key === action.payload).flipped = true;

    return cards;
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = [];
export default function settingsReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
