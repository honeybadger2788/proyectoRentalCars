import { Routes, Route } from 'react-router-dom';

import Home from './views/Home/Home.js';
import MainLayout from './components/MainLayout/MainLayout';
import Login from './views/login';
import Register from './views/register';

import './styles/style.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
