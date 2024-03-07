import { useRouteError } from 'react-router-dom';
import { Box } from '@mui/material';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error, 'ssss');

  return (
    <Box>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>
          {error.status} {error.statusText || error.message}
        </i>
      </p>
    </Box>
  );
};

export default ErrorPage;
