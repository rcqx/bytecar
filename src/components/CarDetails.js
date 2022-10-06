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
      <div className="flex flex-col items-center h-screen pt-5 lg:flex-row mx-5 md:items-center mb-10">
        <div className="right-side flex flex-col w-10/12 items-center md:w-3/4 m-36">
          <h1 className="text-3xl font-bold p-2">{carDetailsParsed[0].brand}</h1>
          <img className="md:h-60" src={carDetailsParsed[0].image} alt={carDetailsParsed[0].model} />
          <h4 className="text-3xl font-bold p-2">{carDetailsParsed[0].model}</h4>
        </div>
        <div className="right-side flex flex-col my-3 items-center lg:w-1/4">
          <table className="table-auto text-xl">
            <tbody>

              <tr>
                <th className="p-2">Finance fee</th>
                <td>
                  $
                  {carDetailsParsed[0].finance_fee}
                </td>
              </tr>
              <tr>
                <th className="p-2">Option to purchase fee</th>
                <td>
                  $
                  {carDetailsParsed[0].purchase_fee}
                </td>
              </tr>
              <tr>
                <th className="p-2">Total ammount payable</th>
                <td>
                  $
                  {carDetailsParsed[0].tap}
                </td>
              </tr>
              <tr>
                <th className="p-2">Duration</th>
                <td>
                  {carDetailsParsed[0].duration}
                  {' months'}
                </td>
              </tr>
              <tr>
                <th className="p-2">5.9% APR Representative</th>
              </tr>
            </tbody>
          </table>
          <Link className="link-to-cars py-3" to="/cars">
            DISCOVER MORE MODELS
          </Link>
          <Link className="link-to-reserve" to="/testdrive">
            <button
              type="submit"
              className="config-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-3"
            >
              RESERVE NOW
              <TbSteeringWheel size={35} />
            </button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center h-screen pt-5 lg:flex-row mx-5 md:items-center mb-10">
      <div className="right-side flex flex-col w-10/12 items-center md:w-3/4 m-36">
        <h1 className="text-3xl font-bold p-2">{carDetailsParsed[0].brand}</h1>
        <img className="md:h-60" src={carDetailsParsed[0].image} alt={carDetailsParsed[0].model} />
        <h4 className="text-3xl font-bold p-2">{carDetailsParsed[0].model}</h4>
      </div>
      <div className="right-side flex flex-col my-3 items-center lg:w-1/4">
        <table className="table-auto text-xl">
          <tbody>

            <tr>
              <th className="p-2">Finance fee</th>
              <td>
                $
                {carDetailsParsed[0].finance_fee}
              </td>
            </tr>
            <tr>
              <th className="p-2">Option to purchase fee</th>
              <td>
                $
                {carDetailsParsed[0].purchase_fee}
              </td>
            </tr>
            <tr>
              <th className="p-2">Total ammount payable</th>
              <td>
                $
                {carDetailsParsed[0].tap}
              </td>
            </tr>
            <tr>
              <th className="p-2">Duration</th>
              <td>
                {carDetailsParsed[0].duration}
                {' months'}
              </td>
            </tr>
            <tr>
              <th className="p-2">5.9% APR Representative</th>
            </tr>
          </tbody>
        </table>
        <Link className="link-to-cars py-3" to="/cars">
          DISCOVER MORE MODELS
        </Link>
        <Link className="link-to-reserve" to="/testdrive">
          <button
            type="submit"
            className="config-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-3"
          >
            RESERVE NOW
            <TbSteeringWheel size={35} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CarDetails;
