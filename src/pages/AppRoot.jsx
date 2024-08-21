import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

import { Footer, Header, ScrollToTop } from '@/components';

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
        <ScrollToTop />
        <Header />
        <Outlet />
        <Footer />
      </Box>
    </Box>
  );
};

export default AppRoot;
