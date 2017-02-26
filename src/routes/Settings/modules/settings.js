import {
  cards,
  decks,
  table
} from '../const/settingsConstants.js';

// ------------------------------------
// Constants
// ------------------------------------
export const SELECT_CARDS = 'SELECT_CARDS';
export const SELECT_DECK = 'SELECT_DECK';
export const SELECT_TABLE = 'SELECT_TABLE';
export const TOGGLE_TIMER = 'TOGGLE_TIMER';
export const TOGGLE_END_ON_LAST_KING = 'TOGGLE_END_ON_LAST_KING';

// ------------------------------------
// Actions
// ------------------------------------
export function selectCards (value) {
  return {
    type: SELECT_CARDS,
    payload: value
  }
}

export function selectDeck (value) {
  return {
    type: SELECT_DECK,
    payload: value
  }
}

export function selectTable (value) {
  return {
    type: SELECT_TABLE,
    payload: value
  }
}

export function toggleTimer () {
  return {
    type: TOGGLE_TIMER
  }
}

export function toggleEndOnLastKing () {
  return {
    type: TOGGLE_END_ON_LAST_KING
  }
}

export const actions = {
  selectCards,
  selectDeck,
  selectTable,
  toggleTimer,
  toggleEndOnLastKing
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SELECT_CARDS]: (state, action) => {
    return {
      ...state,
      cardsSelected: state.cards[action.payload]
    };
  },
  [SELECT_DECK]: (state, action) => {
      console.log(action);
      return {
        ...state,
        deckSelected: action.payload
      };
  },
  [SELECT_TABLE]: (state, action) => {
    console.log(action.payload);
    return {
      ...state,
      tableSelected: state.table[action.payload]
    };
  },
  [TOGGLE_TIMER]: (state) => {
    console.log(state);
    console.log('TOGGLE_TIMER', state.timer);
    return { ...state, timer: !state.timer };
  },
  [TOGGLE_END_ON_LAST_KING]: (state) => {
    console.log('TOGGLE_END_ON_LAST_KING', state.endOnLast);
    return { ...state, endOnLast: !state.endOnLast };
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  cards: cards,
  cardsSelected: cards[0],
  decks: decks,
  deckSelected: Object.keys(decks)[0],
  table: table,
  tableSelected: table[0],
  timer: false,
  endOnLast: false
};

export default function settingsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
