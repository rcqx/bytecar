import React from 'react';
import propTypes from 'prop-types';

const ReservationCard = ({
  date,
  city,
  cardID,
  userID,
}) => {
  ReservationCard.propTypes = {
    date: propTypes.instanceOf(Date).isRequired,
    city: propTypes.string.isRequired,
    cardID: propTypes.instanceOf(Number).isRequired,
    userID: propTypes.instanceOf(Number).isRequired,
  };

  return (
    <div className="reservation-card">
      <h2>{cardID}</h2>
      <h2>{userID}</h2>
      <h2>{city}</h2>
      <h2>{date}</h2>
    </div>
  );
};

export default ReservationCard;
