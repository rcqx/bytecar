import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Cars from './Cars';
import CarDetails from './CarDetails';
import ReservationList from './ReservationList';
import Navbar from './Navbar';
import '../App.css';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="bar">
        <Navbar />
      </div>
      <div className="content">
        <Routes>
          <Route path="/cars" element={<Cars />} />
          <Route path="/car_details" element={<CarDetails />} />
          <Route path="/reservations" element={<ReservationList />} />
        </Routes>
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
