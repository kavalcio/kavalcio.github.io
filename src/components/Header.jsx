import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Box,
  Typography,
  useTheme,
  useScrollTrigger,
} from '@mui/material';

import { PRIMARY_ROUTES } from '@/constants';

const Header = () => {
  const { pathname: currentPath } = useLocation();
  const theme = useTheme();

  const trigger = useScrollTrigger({
    threshold: theme.dimensions.header.height,
  });

  return (
    <AppBar sx={[styles.header, trigger ? styles.hidden : styles.visible]}>
      <Box sx={styles.homeButton}>
        <Link to="/">
          <Typography sx={styles.homeText}>[sk]</Typography>
        </Link>
      </Box>
      <Box sx={styles.rightContainer}>
        {PRIMARY_ROUTES.map((route) => (
          <Box key={route.path} sx={[styles.linkButton]}>
            <Link to={route.path}>
              <Typography
                sx={[
                  styles.linkText,
                  currentPath === route.path && styles.currentRoute,
                ]}
              >
                {route.name.toLowerCase()}
              </Typography>
            </Link>
          </Box>
        ))}
      </Box>
    </AppBar>
  );
};

const styles = {
  header: (theme) => ({
    display: 'flex',
    flexDirection: 'row',
    background: theme.palette.backgroundTransparent,
    boxShadow: '0 10px 30px -15px background',
    height: theme.dimensions.header.height,
    justifyContent: 'space-between',
    alignItems: 'center',
    border: 0,
    backdropFilter: 'blur(10px)',
    '-webkit-backdrop-filter': 'blur(10px)',
    transition: 'top 0.25s ease-out',
  }),
  visible: {
    top: 0,
  },
  hidden: {
    top: (theme) => theme.dimensions.header.height * -1,
  },
  rightContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  homeButton: {
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
    color: 'white',
    transition: 'all 0.2s ease',
    borderBottom: '2px solid transparent',
    '&:hover': {
      color: 'purple2',
      borderColor: 'purple2',
    },
  },
  currentRoute: {
    borderColor: 'white',
  },
};

export default Header;
