import { Box } from '@mui/material';

const PageContainer = ({ children, sx }) => {
  return (
    <Box
      sx={{
        pt: (theme) => `${theme.dimensions.header.height}px`,
        pb: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        my: 'auto',
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default PageContainer;
