const FETCH_DETAILS = 'fetchCarDetails/FETCH_DETAILS';
const initialState = [];

export const fetchCarDetails = (id) => async (dispatch) => {
  const connect = await fetch(`http://localhost:3000/api/v1/cars/${id}`);
  const res = await connect.json().then((data) => data);
  dispatch({
    type: FETCH_DETAILS,
    payload: res,
  });
};

export function reducerDetails(state = initialState, action) {
  switch (action.type) {
    case FETCH_DETAILS:
      return action.payload;
    default:
      return state;
  }
}
