import { useRouteError } from 'react-router-dom';
import { Box } from '@mui/material';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <Box
      sx={{
        m: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
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
