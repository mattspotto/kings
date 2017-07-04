import {
  suits,
  ranks,
  rules
} from '../const/cardConstants.js';
import { tips } from '../const/tipsConstant';
import { start } from './timer';

// ------------------------------------
// Constants
// ------------------------------------
export const INIT_CARDS = 'INIT_CARDS';
export const SHUFFLE_CARDS = 'SHUFFLE_CARDS';
export const FLIP_CARD = 'FLIP_CARD';
export const HIDE_LAST_FLIPPED = 'HIDE_LAST_FLIPPED';
export const SHOW_TIP = 'SHOW_TIP';
export const HIDE_TIP = 'HIDE_TIP';
export const SHOW_GAME_OVER = 'SHOW_GAME_OVER';
export const HIDE_GAME_OVER = 'HIDE_GAME_OVER';

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
    const { settings } = getState();
    console.log('initCards', settings);
    const rules = settings.deckSelected.rules;
    const { duration, isSet } = settings.timer;

    dispatch(initCardsWithDeck(rules));

    if (isSet) dispatch(start(duration));
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

export function showGameOver() {
  return {
    type: SHOW_GAME_OVER
  }
}

export function hideGameOver() {
  return {
    type: HIDE_GAME_OVER
  }
}

export function flipCard(card) {
  return (dispatch, getState) => {
    const { settings, cards } = getState();
    const endOnLast = settings.endOnLast;
    const kingsFlipped = cards.kingsFlipped;
    const cardsFlipped = cards.cardsFlipped;

    if (cards.isGameOver) return;

    if (card.rank.symbol === 'K' &&
      endOnLast &&
      kingsFlipped >= 3
    ) {
      dispatch(showGameOver());
    } else if (cardsFlipped >= 51) {
      dispatch(showGameOver());
    }
    dispatch(flipNextCard(card));
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

export function hideTip() {
  return {
    type: HIDE_TIP,
  }
}

export const cardsActions = {
  initCards,
  shuffleCards,
  flipCard,
  hideLastFlipped,
  showTip,
  hideTip,
  hideGameOver
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [INIT_CARDS]: (state, action) => {
    const gameRules = action.payload;
    let cards = [];

    console.log(gameRules);

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

    return {
      ...state,
      cards,
      kingsFlipped: 0
    };
  },
  [FLIP_CARD]: (state, action) => {
    let kingsFlipped = state.kingsFlipped;
    let cardsFlipped = state.cardsFlipped + 1;
    let card = action.payload;

    console.log('FLIP_CARD card', card);

    card.flipped = true;

    if (card.rank.symbol === 'K') {
      kingsFlipped++;
    }

    return {
      ...state,
      kingsFlipped,
      cardsFlipped,
      lastFlipped: { ...card, isVisible: true }
    };
  },
  [HIDE_LAST_FLIPPED]: (state, action) => {
    let lastFlipped = state.lastFlipped;
    return { ...state, lastFlipped: { ...lastFlipped, isVisible: false } };
  },
  [SHOW_TIP]: state => {
    let lastFlipped = state.lastFlipped;
    let tipShown = lastFlipped.tips[Math.floor(Math.random()*lastFlipped.tips.length)].tip;
    return { ...state, lastFlipped: { ...lastFlipped, tipShown: tipShown } };
  },
  [HIDE_TIP]: state => {
    let lastFlipped = state.lastFlipped;
    return { ...state, lastFlipped: { ...lastFlipped, tipShown: null } };
  },
  [SHOW_GAME_OVER]: state => {
    return { ...state, isGameOver: true };
  },
  [HIDE_GAME_OVER]: state => {
    return { ...state, isGameOver: false };
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  cards: [],
  kingsFlipped: 0,
  cardsFlipped: 0,
  isGameOver: false,
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
export default function cardsReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
