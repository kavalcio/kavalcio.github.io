import { Box, Typography } from '@mui/material';

import { AboutMe } from '@/components';

const Home = () => {
  return (
    <Box sx={styles.pageContainer}>
      <Typography variant="h1">about me</Typography>
      <AboutMe />
    </Box>
  );
};

const styles = {
  pageContainer: {
    pt: 10,
    pb: 10,
    display: 'flex',
    flexDirection: 'column',
    // flex: 1,
    // width: '100%',
    alignItems: 'center',
    // p: 3,
  },
  sectionContainer: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 900,
  },
  indexContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  itemListContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
};

export default Home;
