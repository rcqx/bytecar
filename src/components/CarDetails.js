import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { TbSteeringWheel } from 'react-icons/tb';

const CarDetails = () => {
  const carDetails = useSelector((state) => state.car_details);
  const carDetailsLocal = localStorage.getItem('carDetails');

  if (carDetails.length === 0) {
    return <h1>{carDetailsLocal}</h1>;
  }
  return (
    <div className="main-details-wrapper w-full h-screen">
      <div className="details-wrapper">
        <h1 className="text-3xl font-bold">{carDetails.brand}</h1>
        <img className="card-img" src={carDetails.image} alt={carDetails.model} />
        <h4 className="text-3xl font-bold">{carDetails.model}</h4>
      </div>
      <div className="right-side">
        <table>
          <tr>
            <th>Finance fee</th>
            <td>$500</td>
          </tr>
          <tr>
            <th>Option to purchase fee</th>
            <td>$500</td>
          </tr>
          <tr>
            <th>Total ammount payable</th>
            <td>$500</td>
          </tr>
          <tr>
            <th>Duration</th>
            <td>$500</td>
          </tr>
          <tr>
            <th>5.9% APR Representative</th>
          </tr>
        </table>
        <Link className="link-to-cars" to="/cars">
          DISCOVER MORE MODELS
        </Link>
        <button
          type="submit"
          className="config-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          RESERVE NOW
          <TbSteeringWheel size={35} />
        </button>
      </div>
    </div>
  );
};

export default CarDetails;
