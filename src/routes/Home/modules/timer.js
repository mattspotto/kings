import { showGameOver } from './cards';

// ------------------------------------
// Constants
// ------------------------------------
export const START = 'START';
export const TICK = 'TICK';
export const STOP = 'STOP';

// ------------------------------------
// Actions
// ------------------------------------

let timer = null;

export const start = (duration = 60) => dispatch => {
  clearInterval(timer);
  timer = setInterval(() => dispatch(tick()), 1000);
  dispatch({ type: START , duration});
  dispatch(tick())
}

export const tick = () => (dispatch, getState) => {
  console.log('tick', getState());
  const { timer } = getState();

  if (timer.current <= 0) dispatch(stop());
  else dispatch({ type: TICK });
}

export const stop = () => dispatch => {
  clearInterval(timer);
  dispatch(showGameOver());
  dispatch({ type: STOP });
}

export const timerActions = {
  start,
  tick,
  stop
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const initialState = {
  started: false,
  current: null
};

const ACTION_HANDLERS = {
  [START]: (state, action) => {
    const { duration } = action;
    return { ...state, started: true, current: duration };
  },
  [TICK]: (state, action) => {
    const current = state.current - 1;

    return { ...state, current };
  },
  [STOP]: (state, action) => {
    return initialState;
  },
}

// ------------------------------------
// Reducer
// ------------------------------------
export default function timerReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
