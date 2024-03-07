import { Outlet } from 'react-router-dom';

import Header from '../components/Header';

const AppRoot = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default AppRoot;
