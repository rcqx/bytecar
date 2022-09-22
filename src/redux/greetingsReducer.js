// actiontype
const FETCH_MSG = 'greetingsReducer/FETCH_MSG';

// initial state
const initialState = [];

// action creator
export function fetchMessageSuccess(data) {
  return {
    type: FETCH_MSG,
    payload: data,
  };
}

// reducer
export default function greetingReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MSG:
      return action.payload;
    default:
      return state;
  }
}
