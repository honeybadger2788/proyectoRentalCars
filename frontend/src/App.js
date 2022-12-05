import { Routes, Route } from 'react-router-dom';

import Admin from './views/Admin/Admin.js';
import CarDetailPage from './views/CarDetailPage/CarDetailPage.js';
import ErrorPage from './views/Error/Error.js';
import Home from './views/Home/Home.js';
import MainLayout from './components/MainLayout/MainLayout';
import Login from './views/Login/Login';
import Register from './views/Register/Register';
import Reservation from './views/Reservation/Reservation.js';
import ReservationSuccess from './views/Reservation/ReservationSuccess.js';
import ProductCreationSuccess from './views/Admin/ProductCreationSuccess.js';
import { RequireAuth } from './components/RequireAuth.js';

import './styles/style.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="product/:id" element={<CarDetailPage />} />
          <Route
            path="product/:id/reservation"
            element={
              <RequireAuth>
                <Reservation />
              </RequireAuth>
            }
          />
          <Route
            path="product/reservation-success"
            element={<ReservationSuccess />}
          />
          <Route
            path="product/creation-success"
            element={<ProductCreationSuccess />}
          />
          <Route
            path="admin"
            element={
              <RequireAuth requireAdmin={true}>
                <Admin />
              </RequireAuth>
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
