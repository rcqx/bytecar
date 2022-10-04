import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { TbSteeringWheel } from 'react-icons/tb';

const CarDetails = () => {
  const carDetails = useSelector((state) => state.car_details);
  const carDetailsLocal = localStorage.getItem('carDetails');
  const carDetailsParsed = JSON.parse(carDetailsLocal);

  if (carDetails.length === 0) {
    return (
      <div className="main-details-wrapper w-full h-screen">
        <div className="details-wrapper">
          <h1 className="text-3xl font-bold">{carDetailsParsed.brand}</h1>
          <img className="card-img" src={carDetailsParsed.image} alt={carDetailsParsed.model} />
          <h4 className="text-3xl font-bold">{carDetailsParsed.model}</h4>
        </div>
        <div className="right-side">
          <table>
            <tr>
              <th>Finance fee</th>
              <td>
                $
                {carDetailsParsed.finance_fee}
              </td>
            </tr>
            <tr>
              <th>Option to purchase fee</th>
              <td>
                $
                {carDetailsParsed.purchase_fee}
              </td>
            </tr>
            <tr>
              <th>Total ammount payable</th>
              <td>
                $
                {carDetailsParsed.tap}
              </td>
            </tr>
            <tr>
              <th>Duration</th>
              <td>
                {carDetailsParsed.duration}
                {' months'}
              </td>
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
            <td>
              $
              {carDetails.finance_fee}
            </td>
          </tr>
          <tr>
            <th>Option to purchase fee</th>
            <td>
              $
              {carDetails.purchase_fee}
            </td>
          </tr>
          <tr>
            <th>Total ammount payable</th>
            <td>
              $
              {carDetails.tap}
            </td>
          </tr>
          <tr>
            <th>Duration</th>
            <td>
              {carDetails.duration}
              {' months'}
            </td>
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
          BOOK A TEST-DRIVE
          <TbSteeringWheel size={35} />
        </button>
      </div>
    </div>
  );
};

export default CarDetails;
