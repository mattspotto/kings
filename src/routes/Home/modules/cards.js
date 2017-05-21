import {
  suits,
  ranks,
  rules
} from '../const/cardConstants.js';
import { tips } from '../const/tipsConstant';

// ------------------------------------
// Constants
// ------------------------------------
export const INIT_CARDS = 'INIT_CARDS'
export const INIT_CARDS_WITH_DECK = 'INIT_CARDS'
export const SHUFFLE_CARDS = 'SHUFFLE_CARDS'
export const FLIP_CARD = 'FLIP_CARD'
export const HIDE_LAST_FLIPPED = 'HIDE_LAST_FLIPPED'
export const SHOW_TIP = 'SHOW_TIP'

// ------------------------------------
// Actions
// ------------------------------------
function initCardsWithDeck(rules) {
  return {
    type: INIT_CARDS,
    payload: rules
  }
}

export function initCards() {
  return (dispatch, getState) => {
    const settings = getState().settings;
    const rules = settings.decks[settings.deckSelected].rules;

    dispatch(initCardsWithDeck(rules));
  };
}

export function shuffleCards() {
  return {
    type: SHUFFLE_CARDS,
  }
}

export function flipNextCard(card) {
  return {
    type: FLIP_CARD,
    payload: card
  }
}

export function flipCard(card) {
  return (dispatch, getState) => {
    const state = getState();
    const endOnLast = state.settings.endOnLast;
    const kingsFlipped = state.cards.kingsFlipped;

    console.log('card', card);
    console.log('endOnLast', endOnLast);
    console.log('kingsFlipped', kingsFlipped);

    if (card.rank.symbol === 'K' &&
      endOnLast &&
      kingsFlipped === 3
    ) {
      alert("Game over");
      return;
    } else {
      dispatch(flipNextCard(card));
    }
  };
}


export function hideLastFlipped() {
  return {
    type: HIDE_LAST_FLIPPED,
  }
}

export function showTip() {
  return {
    type: SHOW_TIP,
  }
}

export const actions = {
  initCards,
  shuffleCards,
  flipCard,
  hideLastFlipped,
  showTip
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [INIT_CARDS]: (state, action) => {
    const gameRules = action.payload;
    let cards = [];

    for (var i = 0; i < ranks.length; i++) {
      for (var j = 0; j < suits.length; j++) {
        let key = 's' + i + 'c' + j;
        const rule = rules[gameRules[i]];

        const card = {
          key: key,
          rank: ranks[i],
          rule: rule,
          tips: tips[rule.tips],
          suit: suits[j],
          flipped: false
        };

        cards.push(card);
      }
    }

    return { ...state, cards: cards };
  },
  [SHUFFLE_CARDS]: (state, action) => {

    let cards = state.cards;

    // shuffle the cards
    let currentIndex = cards.length;
    let tempValue,
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
    // let card = cards.find(card => card.key === action.payload.card.key);
    let card = action.payload;

    console.log('FLIP_CARD card2', card);

    card.flipped = true;

    console.log(card.tips);

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
  },
  [SHOW_TIP]: (state, action) => {
    let lastFlipped = state.lastFlipped;
    let tipShown = lastFlipped.tips[Math.floor(Math.random()*lastFlipped.tips.length)].tip;
    return { ...state, lastFlipped: { ...lastFlipped, tipShown: tipShown } };
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
    tips: [],
    tipShown: '',
    isVisible: false,
    flipped: false
  }
};
export default function settingsReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
