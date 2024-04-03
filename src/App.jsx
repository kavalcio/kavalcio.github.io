import { createHashRouter, RouterProvider, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import './App.css';

import { THEME } from '@/constants';
import {
  Home,
  Error,
  Projects,
  Project,
  AppRoot,
  Experience,
  Contact,
} from '@/pages';

const router = createHashRouter([
  {
    path: '/',
    element: <AppRoot />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Navigate to="/about" />,
      },
      {
        path: '/about',
        element: <Home />,
      },
      {
        path: '/experience',
        element: <Experience />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/projects/:projectId',
        element: <Project />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);

const App = () => {
  const theme = createTheme(THEME);
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
