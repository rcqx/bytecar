// action type
const FETCH_RESERVATIONS = 'reservationsReducer/FETCH_RESERVATIONS';

// initial state
const initialState = [];

// action creator
export function fetchReservationsSuccess(data) {
  return {
    type: FETCH_RESERVATIONS,
    payload: data,
  };
}
// reducer
export function reservationsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_RESERVATIONS:
      return action.payload;
    default:
      return state;
  }
}
