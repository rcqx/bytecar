import axios from 'axios';

// action type
const FETCH_CARS = 'carsReducer/FETCH_CARS';
const FETCH_CAR_DETAILS = 'carsReducer/FETCH_CAR_DETAILS';
const ADD_CAR = 'carsReducer/ADD_CAR';
const API_URL = 'http://localhost:3000';

// initial state
const initialState = [];

// action creator
export const addCar = (data) => async (dispatch) => {
  const response = await axios.post(`${API_URL}/api/v1/cars`, data)
    .then((res) => res.data)
    .catch((error) => error);
  dispatch({
    type: ADD_CAR,
    payload: response,
  });
};

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
