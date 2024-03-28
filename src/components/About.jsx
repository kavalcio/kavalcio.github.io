import { Box, Typography } from '@mui/material';
import { Link } from '@mui/material';

// TODO: add some ornament to page wrapper, it looks a bit plain
// TODO: improve bio text
// TODO: change design of page scroll bar, maybe make it always visible? it shift contents when switching between pages
const About = () => {
  // TODO: fill
  return (
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
          <Link href="https://lumiqlearn.com" sx={styles.link}>
            LumiQ
          </Link>
          , an audio-based professional education platform. Prior to that I
          completed a 16-month co-op at&nbsp;
          <Link href="https://modiface.com" sx={styles.link}>
            Modiface
          </Link>
          &nbsp;building a CMS used by international beauty brands before
          graduating from the&nbsp;
          <Link href="https://www.engineering.utoronto.ca/" sx={styles.link}>
            University of Toronto
          </Link>
          &nbsp;with a degree in Computer Engineering.
        </Typography>
        <Typography sx={styles.bodyText}>
          There&apos;s a special place in my heart for graphics programming.
          I&apos;ve always been fascinated by the intersection of art and
          technology, and programming has been a way for me to explore that
          intersection. Lately I&apos;ve been dipping my toes into the world of
          shaders and WebGL, which you can see in&nbsp;
          <Link href="/projects" sx={styles.link}>
            some of my projects
          </Link>
          .
        </Typography>
      </Box>
      <Box
        component={'img'}
        src="src/assets/images/headshot.jpeg"
        sx={styles.headshot}
      />
    </Box>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    maxWidth: 900,
  },
  headshot: (theme) => ({
    ml: 4,
    objectFit: 'cover',
    width: 350,
    height: 350,
    borderRadius: 6,
    aspectRatio: 1,
    transition: 'all 0.2s ease',
    boxShadow: `10px 10px 15px ${theme.palette.purple1}`,
    '&:hover': {
      boxShadow: `10px 10px 15px ${theme.palette.purple2}`,
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
  bigText: {
    fontSize: 70,
    fontWeight: 'bold',
    color: 'purple2',
    lineHeight: 1,
    mb: 3,
  },
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