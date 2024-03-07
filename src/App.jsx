import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import './App.css';
import { THEME } from './constants/theme';

import Home from './pages/Home';
import Error from './pages/Error';
import Projects from './pages/Projects';
import Project from './pages/Project';
import AppRoot from './pages/AppRoot';
import Experience from './pages/Experience';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppRoot />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: '/about',
        element: <div />,
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
        element: <div>Contact</div>,
      },
    ],
  },
]);

const App = () => {
  const theme = createTheme(THEME);
  console.log({ theme });
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
