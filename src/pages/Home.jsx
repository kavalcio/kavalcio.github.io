import { Box } from '@mui/material';

import { About } from '@/components';

// TODO: add some fun interactive animation or something to some part of the page
// TODO: add links to other pages here
const Home = () => {
  return (
    <Box sx={styles.pageContainer}>
      <About />
    </Box>
  );
};

const styles = {
  pageContainer: {
    pt: 10,
    pb: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
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
