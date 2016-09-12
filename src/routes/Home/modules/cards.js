import {
  suits,
  ranks,
  rules
} from '../const/cardConstants.js';

// ------------------------------------
// Constants
// ------------------------------------
export const INIT_CARDS = 'INIT_CARDS'
export const SHUFFLE_CARDS = 'SHUFFLE_CARDS'
export const FLIP_CARD = 'FLIP_CARD'
export const HIDE_LAST_FLIPPED = 'HIDE_LAST_FLIPPED'

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

export function hideLastFlipped() {
  return {
    type: HIDE_LAST_FLIPPED,
  }
}

export const actions = {
  initCards,
  shuffleCards,
  flipCard,
  hideLastFlipped
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
          rank: ranks[i],
          rule: rules[i],
          suit: suits[j],
          flipped: false
        });
      }
    }

    return { ...state, cards: cards };
  },
  [SHUFFLE_CARDS]: (state, action) => {

    let cards = state.cards;
    //let cards = newState.cards;

    console.log(state);
    //console.log(newState);
    console.log(cards);

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
    return { ...state, cards: cards };
  },
  [FLIP_CARD]: (state, action) => {

    let cards = state.cards;
    let kingsFlipped = state.kingsFlipped;
    let card = cards.find(card => card.key === action.payload);
    card.flipped = true;

    if (card.rank.symbol === 'K') {
      kingsFlipped++;
    }

    let stuff = Object.assign({}, state, {
      cards: cards,
      kingsFlipped: kingsFlipped,
      lastFlipped: { ...card, isVisible: true }
    });
    console.log(stuff);

    return stuff;
  },
  [HIDE_LAST_FLIPPED]: (state, action) => {
    console.log(state);
    let lastFlipped = state.lastFlipped;
    return { ...state, lastFlipped: { ...lastFlipped, isVisible: false } };
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  cards: [],
  kingsFlipped: 0,
  lastFlipped: {
    rank: {},
    rule: {},
    suit: {},
    isVisible: false,
    flipped: false
  }
};
export default function settingsReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
