import { Link } from 'react-router-dom';
import { AppBar, Box, Typography } from '@mui/material';

const Header = () => (
  <AppBar sx={styles.header}>
    <Box sx={styles.leftContainer}>
      <Link to="/">
        <Typography sx={styles.link}>Sarp Kavalcioglu</Typography>
      </Link>
    </Box>
    <Box sx={styles.rightContainer}>
      <Link to="/about">
        <Typography sx={styles.link}>About</Typography>
      </Link>
      <Link to="/experience">
        <Typography sx={styles.link}>Experience</Typography>
      </Link>
      <Link to="/projects">
        <Typography sx={styles.link}>Projects</Typography>
      </Link>
      {/* <Link to="/contact">
        <Typography sx={styles.link}>Contact</Typography>
      </Link> */}
    </Box>
  </AppBar>
);

const styles = {
  header: {
    display: 'flex',
    flexDirection: 'row',
    background: 'transparent',
    boxShadow: 'none',
    height: 'fit-content',
    justifyContent: 'space-between',
    border: 0,
  },
  leftContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  rightContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  link: {
    px: 2,
    py: 2,
    color: 'white',
    transition: 'all 0.2s ease',
    borderBottom: '2px solid transparent',
    '&:hover': {
      borderColor: 'white',
      // px: 3,
    },
  },
};

export default Header;
