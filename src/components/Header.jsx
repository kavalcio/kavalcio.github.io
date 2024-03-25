import { Link } from 'react-router-dom';
import { AppBar, Box, Typography } from '@mui/material';

const Header = () => (
  <AppBar sx={styles.header}>
    <Box sx={styles.homeButton}>
      <Link to="/">
        <Typography sx={styles.homeText}>sk</Typography>
      </Link>
    </Box>
    <Box sx={styles.rightContainer}>
      <Box sx={styles.linkButton}>
        <Link to="/about">
          <Typography sx={styles.linkText}>about</Typography>
        </Link>
      </Box>
      <Box sx={styles.linkButton}>
        <Link to="/experience">
          <Typography sx={styles.linkText}>experience</Typography>
        </Link>
      </Box>
      <Box sx={styles.linkButton}>
        <Link to="/projects">
          <Typography sx={styles.linkText}>projects</Typography>
        </Link>
      </Box>
      <Box sx={styles.linkButton}>
        <Link to="/contact">
          <Typography sx={styles.linkText}>contact</Typography>
        </Link>
      </Box>
    </Box>
  </AppBar>
);

const styles = {
  header: (theme) => ({
    display: 'flex',
    flexDirection: 'row',
    // background: 'transparent',
    background: theme.palette.backgroundTransparent,
    // boxShadow: 'none',
    boxShadow: '0 10px 30px -15px background',
    height: 'fit-content',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: 0,
    backdropFilter: 'blur(10px)',
    '-webkit-backdrop-filter': 'blur(10px)',
  }),
  rightContainer: {
    display: 'flex',
    flexDirection: 'row',
    // mr: 1,
  },
  homeButton: {
    // mx: 4,
    // my: 6,
    m: 2,
    color: 'red',
  },
  homeText: {
    fontSize: 48,
    color: 'white',
    lineHeight: 1,
    transition: 'all 0.2s ease',
    '&:hover': {
      color: 'purple2',
    },
  },
  linkButton: {
    m: 2,
  },
  linkText: {
    // fontWeight: 600,
    // px: 2,
    // py: 2,
    color: 'white',
    transition: 'all 0.2s ease',
    borderBottom: '2px solid transparent',
    '&:hover': {
      // px: 2,
      color: 'purple2',
      borderColor: 'purple2',
      // px: 3,
    },
  },
};

export default Header;
