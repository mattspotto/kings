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
export const SET_TIMER_DURATION = 'SET_TIMER_DURATION';
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

export function setTimerDuration (duration) {
  return {
    type: SET_TIMER_DURATION,
    payload: duration
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
      console.log('SELECT_DECK', action.payload);
      return {
        ...state,
        deckSelected: state.decks[action.payload]
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
    console.log('TOGGLE_TIMER', state.timer.isSet);
    return { ...state, timer: {
      ...state.timer,
      isSet: !state.timer.isSet
    }};
  },
  [SET_TIMER_DURATION]: (state, action) => {
    console.log(state, action.payload);
    return { ...state, timer: {
      ...state.timer,
      duration: action.payload
    }};
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
  deckSelected: decks[Object.keys(decks)[0]],
  table: table,
  tableSelected: table[0],
  timer: {
    isSet: false,
    duration: 20
  },
  endOnLast: false
};

export default function settingsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
