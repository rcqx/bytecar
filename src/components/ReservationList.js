import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { fetchReservationsSuccess } from '../redux/reservationsReducer';
import ReservationCard from './ReservationCard';
import '../Reservations.css';

const ReservationList = () => {
  const dispatch = useDispatch();
  const reservationList = useSelector((state) => state.reservations);
  const reservations = [];

  async function fetchData() {
    await axios.get('http://localhost:3000/api/v1/reservations').then((res) => {
      dispatch(fetchReservationsSuccess(res.data));
    });
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  reservationList.forEach((res) => reservations.push(
    <ReservationCard
      key={res.id}
      date={res.date}
      city={res.city}
      cardID={res.car_id}
      userID={res.user_id}
    />,
  ));

  return (
    <div>{reservations}</div>
  );
};

export default ReservationList;
