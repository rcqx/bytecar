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
          <h1 className="text-3xl font-bold">{carDetailsParsed[0].brand}</h1>
          <img className="card-img" src={carDetailsParsed[0].image} alt={carDetailsParsed[0].model} />
          <h4 className="text-3xl font-bold">{carDetailsParsed[0].model}</h4>
        </div>
        <div className="right-side">
          <table>
            <tr>
              <th>Finance fee</th>
              <td>
                $
                {carDetailsParsed[0].finance_fee}
              </td>
            </tr>
            <tr>
              <th>Option to purchase fee</th>
              <td>
                $
                {carDetailsParsed[0].purchase_fee}
              </td>
            </tr>
            <tr>
              <th>Total ammount payable</th>
              <td>
                $
                {carDetailsParsed[0].tap}
              </td>
            </tr>
            <tr>
              <th>Duration</th>
              <td>
                {carDetailsParsed[0].duration}
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
          <Link className="link-to-reserve" to="/testdrive">
            <button
              type="submit"
              className="config-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              BOOK A TEST-DRIVE
              <TbSteeringWheel size={35} />
            </button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="main-details-wrapper w-full h-screen">
      <div className="details-wrapper">
        <h1 className="text-3xl font-bold">{carDetails[0].brand}</h1>
        <img className="card-img" src={carDetails[0].image} alt={carDetails[0].model} />
        <h4 className="text-3xl font-bold">{carDetails[0].model}</h4>
      </div>
      <div className="right-side">
        <table>
          <tr>
            <th>Finance fee</th>
            <td>
              $
              {carDetails[0].finance_fee}
            </td>
          </tr>
          <tr>
            <th>Option to purchase fee</th>
            <td>
              $
              {carDetails[0].purchase_fee}
            </td>
          </tr>
          <tr>
            <th>Total ammount payable</th>
            <td>
              $
              {carDetails[0].tap}
            </td>
          </tr>
          <tr>
            <th>Duration</th>
            <td>
              {carDetails[0].duration}
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
        <Link className="link-to-reserve" to="/testdrive">
          <button
            type="submit"
            className="config-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            BOOK A TEST-DRIVE
            <TbSteeringWheel size={35} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CarDetails;
