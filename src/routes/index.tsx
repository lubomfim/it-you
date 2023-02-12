import { ROUTES } from 'constants/routes';
import Home from 'pages/home';
import { Routes, Route } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={ROUTES.home} element={<Home />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
