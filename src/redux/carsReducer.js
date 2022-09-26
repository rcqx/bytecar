// action type
const FETCH_CARS = 'carsReducer/FETCH_CARS';

// initial state
const initialState = [];

// action creator
export function fetchCarsSuccess(data) {
  return {
    type: FETCH_CARS,
    payload: data,
  };
}

// reducer
export default function carsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CARS:
      return action.payload;
    default:
      return state;
  }
}
