import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

import { Footer, Header } from '@/components';

const AppRoot = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '1280px',
        margin: '0 auto',
        // width: '100%',
        height: '100vh',
        pt: ({ dimensions }) => `${dimensions.header.height}px`,
        px: 3,
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default AppRoot;
