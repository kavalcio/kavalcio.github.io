import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  AppBar,
  Box,
  Typography,
  useTheme,
  useScrollTrigger,
} from '@mui/material';

import { PRIMARY_ROUTES } from '@/constants';

// TODO: this spills out on mobile view
// TODO: make text not pure white, make it kinda gray
const Header = () => {
  const { pathname: currentPath } = useLocation();
  const theme = useTheme();

  const [isBelowThreshold, setIsBelowThreshold] = useState(true);
  const isScrollingDown = useScrollTrigger({
    threshold: theme.dimensions.header.height,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsBelowThreshold(window.scrollY < theme.dimensions.header.height);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [theme.dimensions.header.height]);

  return (
    <AppBar
      sx={[
        styles.header,
        isScrollingDown ? styles.hidden : styles.visible,
        isBelowThreshold && styles.headerNoBorder,
      ]}
    >
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
    px: 2,
    background: theme.palette.backgroundTransparent,
    boxShadow: '0 10px 30px -15px background',
    height: theme.dimensions.header.height,
    justifyContent: 'space-between',
    alignItems: 'center',
    border: 0,
    backdropFilter: 'blur(10px)',
    '-webkit-backdrop-filter': 'blur(10px)',
    transition: 'all 0.25s ease-out',
  }),
  headerNoBorder: {
    boxShadow: 'none !important',
  },
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
    mx: 2,
    color: 'red',
  },
  homeText: {
    fontSize: 38,
    color: 'textPrimary',
    transition: 'all 0.2s ease',
    '&:hover': {
      color: 'purple2',
    },
  },
  linkButton: {
    m: 2,
  },
  linkText: {
    color: 'textPrimary',
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
