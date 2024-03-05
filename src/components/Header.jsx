import React from 'react';
import { Link, AppBar, Box, Typography } from '@mui/material';

export const Header = () => (
  <AppBar sx={styles.header}>
    <Link href="/asdf" sx={styles.leftContainer}>
      Home
    </Link>
    <Link href="" sx={styles.rightContainer}>
      Projects
    </Link>
  </AppBar>
);

const styles = {
  header: {
    display: 'flex',
    flexDirection: 'row',
    // background: 'transparent',
    background: 'teal',
    boxShadow: 'none',
    padding: 2,
    justifyContent: 'space-between',
  },
  leftContainer: {},
  rightContainer: {},
};
