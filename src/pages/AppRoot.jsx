import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

import { Footer, Header } from '@/components';

const AppRoot = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1280px',
          margin: '0 auto',
          pt: ({ dimensions }) => `${dimensions.header.height}px`,
          px: 4,
        }}
      >
        <Header />
        <Outlet />
        <Footer />
      </Box>
    </Box>
  );
};

export default AppRoot;
