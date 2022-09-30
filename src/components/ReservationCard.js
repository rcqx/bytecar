import React from 'react';
import propTypes from 'prop-types';

const ReservationCard = ({
  date,
  city,
  user,
  car,
}) => {
  ReservationCard.propTypes = {
    date: propTypes.instanceOf(Date).isRequired,
    city: propTypes.string.isRequired,
    car: propTypes.string.isRequired,
    user: propTypes.string.isRequired,
  };

  return (
    <div className="reservation-card">
      <div>
        <h2>
          {'Reservation by: '}
          {user}
        </h2>
        <h2>
          {'Car: '}
          {car}
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

      <button className="config-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Delete</button>
    </div>
  );
};

export default ReservationCard;
