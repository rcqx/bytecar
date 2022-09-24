import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Cars from './Cars';
import store from '../redux/configureStore';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/cars" element={<Cars />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
