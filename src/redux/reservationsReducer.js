import axios from 'axios';

// action type
const FETCH_RESERVATIONS = 'reservationsReducer/FETCH_RESERVATIONS';
const CREATE_RESERVATION = 'reservationsReducer/CREATE_RESERVATION';

// initial state
const initialState = [];

// action creator
export function fetchReservationsSuccess(data) {
  return {
    type: FETCH_RESERVATIONS,
    payload: data,
  };
}

export const createReservation = (data) => async (dispatch) => {
  const response = await axios.post('http://localhost:3000/api/v1/reservations', data)
    .then((res) => res.data)
    .catch((error) => error);
  dispatch({
    type: CREATE_RESERVATION,
    payload: response,
  });
};

// reducer
export function reservationsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_RESERVATIONS:
      return action.payload;
    default:
      return state;
  }
}
