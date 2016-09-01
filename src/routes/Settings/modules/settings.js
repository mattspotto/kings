import {
  cards,
  deck,
  table
} from '../const/settingsConstants.js';

// ------------------------------------
// Constants
// ------------------------------------
export const SELECT_CARDS = 'SELECT_CARDS'
export const SELECT_DECK = 'SELECT_DECK'
export const SELECT_TABLE = 'SELECT_TABLE'

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

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk!

    NOTE: This is solely for demonstration purposes. In a real application,
    you'd probably want to dispatch an action of SETTINGS_DOUBLE and let the
    reducer take care of this logic.  */

export const doubleAsync = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch(increment(getState().settings))
        resolve()
      }, 200)
    })
  }
}

export const actions = {
  selectCards,
  selectDeck,
  selectTable
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SELECT_CARDS]: (state, action) => {
    return { ...state, cardsSelected: action };
  },
  [SELECT_DECK]: (state, action) => {
      return { ...state, deckSelected: action };
  },
  [SELECT_TABLE]: (state, action) => {
    return { ...state, tableSelected: action };
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  cards: cards,
  cardsSelected: cards[0],
  deck: deck,
  deckSelected: deck[0],
  table: table,
  tableSelected: table[0]
};
export default function settingsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
