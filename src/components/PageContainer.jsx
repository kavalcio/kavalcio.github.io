import { Box } from '@mui/material';

const PageContainer = ({ children }) => {
  return <Box sx={styles.pageContainer}>{children}</Box>;
};

const styles = {
  pageContainer: {
    pt: (theme) => `${theme.dimensions.header.height}px`,
    pb: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

export default PageContainer;
