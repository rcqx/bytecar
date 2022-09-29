import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCar } from '../redux/carsReducer';

export default function AddCar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [value, setValue] = useState();

  // const minYear = 2015;
  // const maxYear = new Date().getFullYear();

  // const handleChange = (event) => {
  //   const value = Math.max(minYear, Math.min(maxYear, Number(event.target.value)));
  //   setValue(value);
  // };

  const handleSubmit = (event) => {
    const brand = event.target.querySelector('#brand').value;
    const finance = event.target.querySelector('#finance_fee').value;
    const image = event.target.querySelector('#car-image').files[0];
    const model = event.target.querySelector('#model').value;
    const purchase = event.target.querySelector('#purchase_fee').value;
    const tap = event.target.querySelector('#tap').value;
    const duration = event.target.querySelector('#duration').value;
    const description = event.target.querySelector('#description').value;

    const data = new FormData();
    data.append('image', image);
    data.append('brand', brand);
    data.append('finance_fee', finance);
    data.append('model', model);
    data.append('purchase_fee', purchase);
    data.append('tap', tap);
    data.append('duration', duration);
    data.append('description', description);

    dispatch(addCar(data))
      .then(() => {
        navigate('/cars');
      });
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl">Add Car</h1>
      <form className="bg-white mx-auto pb-5 mt-5" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row md:space-x-10">
          <div className="">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="brand">
              Brand
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-custom-green-500 focus:placeholder:text-custom-green-500" id="brand" type="text" placeholder="Car brand" required />
            </label>
          </div>
          <div className="">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="finance_fee">
              Finance fee
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-custom-green-500 focus:placeholder:text-custom-green-500" id="finance_fee" type="number" placeholder="Finance fee" required />
            </label>
          </div>
          <div className="">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="car-image">
              Car Image
              <input className="form-control block w-full text-base font-normal file:py-1.5 file:px-3 text-custom-grey-500 bg-custom-white-500 bg-clip-padding border border-solid border-custom-green-500 rounded transition ease-in-out m-0 focus:text-custom-green-500 focus:bg-custom-white-500 focus:border-custom-green-500 focus:outline-none file:bg-custom-green-500 file:rounded file:border-none file:text-custom-white-500 file:cursor-pointer" id="car-image" type="file" placeholder="Upload Car Image" accept="image/*" required />
            </label>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-10 justify-between md:justify-start">
          <div className="">
            <label className="block text-gray-700 text-sm font-bold mb-4" htmlFor="model">
              Car model
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-custom-green-500 focus:placeholder:text-custom-green-500" id="model" type="text" placeholder="Car model" required />
            </label>
          </div>
          <div className="">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="purchase_fee">
              Purchase fee
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-custom-green-500 focus:placeholder:text-custom-green-500" id="purchase_fee" type="number" placeholder="Purchase fee" required />
            </label>
          </div>
          <div className="">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tap">
              Tap
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-custom-green-500 focus:placeholder:text-custom-green-500" id="tap" type="number" placeholder="Tap" required />
            </label>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-10 justify-between md:justify-start">
          <div className="">
            <label className="block text-gray-700 text-sm font-bold mb-4" htmlFor="description">
              Description
              <textarea type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-custom-green-500 focus:placeholder:text-custom-green-500" rows="5" cols="50" id="description" placeholder="Description (Max 100 characters)" maxLength="100" required />
            </label>
          </div>
          <div className="">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="duration">
              Duration
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-custom-green-500 focus:placeholder:text-custom-green-500" id="duration" type="number" placeholder="Duration" required />
            </label>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button className="border font-bold py-2 px-4 rounded" type="submit">
            Save Car
          </button>
        </div>
      </form>
    </div>
  );
}
