import axios from 'axios';

// action type
const FETCH_CARS = 'carsReducer/FETCH_CARS';
const ADD_CAR = 'carsReducer/ADD_CAR';
const API_URL = 'http://localhost:3000';

// initial state
const initialState = [];

// action creator
export function fetchCarsSuccess(data) {
  return {
    type: FETCH_CARS,
    payload: data,
  };
}

export const addCar = (data) => async (dispatch) => {
  const response = await axios.post(`${API_URL}/api/v1/cars`, data)
    .then((res) => res.data)
    .catch((error) => error);
  dispatch({
    type: ADD_CAR,
    payload: response,
  });
};

// reducer
export default function carsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CARS:
      return action.payload;
    default:
      return state;
  }
}
