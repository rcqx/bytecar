import React from 'react';
import propTypes from 'prop-types';
import axios from 'axios';

const ReservationCard = ({
  id,
  date,
  city,
  user,
  car,
  brand,
}) => {
  async function deleteReservation(id) {
    await axios.delete(`http://localhost:3000/api/v1/reservations/${id}`).then((res) => {
      console.log(res);
      window.location.reload(false);
    });
  }
  ReservationCard.propTypes = {
    id: propTypes.number.isRequired,
    date: propTypes.string.isRequired,
    city: propTypes.string.isRequired,
    car: propTypes.string.isRequired,
    brand: propTypes.string.isRequired,
    user: propTypes.number.isRequired,
  };

  return (
    <div className="reservation-card">
      <div>
        <h2>
          {'Reservation by: '}
          {user}
        </h2>
        <h2>
          {'Car model: '}
          {car}
        </h2>
        <h2>
          {'Brand: '}
          {brand}
        </h2>
        <h2>
          {'City: '}
          {city}
        </h2>
        <h2>
          {'Pick-up date: '}
          {date}
        </h2>
      </div>
      <button
        onClick={() => deleteReservation(id)}
        className="config-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
      >
        Delete
      </button>
    </div>
  );
};

export default ReservationCard;
