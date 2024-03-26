import { Box } from '@mui/material';

const PageContainer = ({ children }) => {
  return <Box sx={styles.pageContainer}>{children}</Box>;
};

const styles = {
  pageContainer: {
    pt: 5,
    pb: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

export default PageContainer;
