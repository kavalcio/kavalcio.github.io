import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

// TODO: add some ornament to page wrapper, it looks a bit plain
// TODO: change design of page scroll bar, maybe make it always visible? it shift contents when switching between pages
// TODO: change boxShadow direction based on mouse position
// TODO: change cursor design
// TODO: i could move images back to assets/images and import them individually in the content.js file, instead of putting them in the public folder
const About = () => (
  <Box sx={styles.container}>
    <Box sx={styles.textContainer}>
      <Typography sx={styles.introText}>Hi! My name is</Typography>
      <Typography sx={styles.bigText}>Sarp Kavalcioglu.</Typography>
      <Typography sx={styles.bodyText}>
        I&apos;m a software engineer who specializes in full-stack development
        for dynamic web environments.
      </Typography>
      <Typography sx={styles.bodyText}>
        I&apos;m currently working at&nbsp;
        <Link to="https://lumiqlearn.com">
          <Typography sx={styles.link} display="inline">
            LumiQ
          </Typography>
        </Link>
        , an audio-based professional education platform. Prior to that I
        completed a 16-month co-op at&nbsp;
        <Link to="https://modiface.com">
          <Typography sx={styles.link} display="inline">
            Modiface
          </Typography>
        </Link>
        &nbsp;building a CMS used by international beauty brands before
        graduating from the&nbsp;
        <Link to="https://www.engineering.utoronto.ca/">
          <Typography sx={styles.link} display="inline">
            University of Toronto
          </Typography>
        </Link>
        &nbsp;with a degree in Computer Engineering.
      </Typography>
      <Typography sx={styles.bodyText}>
        There&apos;s a special place in my heart for graphics programming.
        I&apos;ve always been fascinated by the intersection of art and
        technology, and programming has been a way for me to explore that
        intersection. Lately I&apos;ve been dipping my toes into the world of
        shaders and WebGL, which you can see in&nbsp;
        <Link to="/projects">
          <Typography sx={styles.link} display="inline">
            some of my projects
          </Typography>
        </Link>
        .
      </Typography>
    </Box>
    <Box component={'img'} src="/images/headshot.jpeg" sx={styles.headshot} />
  </Box>
);

const styles = {
  container: (theme) => ({
    display: 'flex',
    flexDirection: 'row',
    maxWidth: 900,
    [theme.breakpoints.down('md')]: {
      maxWidth: 600,
      flexDirection: 'column',
      alignItems: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: 'unset',
    },
  }),
  headshot: (theme) => ({
    ml: 4,
    objectFit: 'cover',
    width: 350,
    height: 350,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: 'auto',
    },
    borderRadius: 6,
    aspectRatio: 1,
    transition: 'box-shadow 0.2s ease',
    boxShadow: `10px 10px 15px ${theme.palette.purple1}`,
    '&:hover': {
      boxShadow: `10px 10px 15px ${theme.palette.purple2}`,
    },
    [theme.breakpoints.down('md')]: {
      ml: 0,
      mt: 3,
    },
  }),
  highlight: {
    fontWeight: 'bold',
    color: 'purpleLight',
  },
  textContainer: {
    fontSize: 30,
  },
  bodyText: {
    mb: 2,
    fontSize: 16,
  },
  introText: {
    mb: 2,
    fontSize: 18,
  },
  bigText: (theme) => ({
    fontSize: 70,
    fontWeight: 'bold',
    color: 'purple2',
    lineHeight: 1,
    mb: 3,
    [theme.breakpoints.down('sm')]: {
      fontSize: 50,
    },
  }),
  link: {
    color: 'purple2',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'all 0.15s ease',
    '&:hover': {
      color: 'purple3',
    },
  },
};

export default About;
