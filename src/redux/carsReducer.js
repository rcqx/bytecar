// action type
const FETCH_CARS = 'carsReducer/FETCH_CARS';
const FETCH_CAR_DETAILS = 'carsReducer/FETCH_CAR_DETAILS';

// initial state
const initialState = [];

// action creator
export function fetchCarsSuccess(data) {
  return {
    type: FETCH_CARS,
    payload: data,
  };
}

export function fetchCarDetailsSuccess(data) {
  return {
    type: FETCH_CAR_DETAILS,
    payload: data,
  };
}

// reducer
export function carsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CARS:
      return action.payload;
    default:
      return state;
  }
}

// reducer
export function carDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CAR_DETAILS:
      return action.payload;
    default:
      return state;
  }
}
