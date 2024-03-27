import { Box, Typography } from '@mui/material';

const AboutMe = () => {
  // TODO: fill
  return (
    <Box sx={styles.container}>
      <Box
        component={'img'}
        src={'https://via.placeholder.com/150'}
        sx={styles.headshot}
      />
      <Typography sx={styles.bodyText}>
        <p>
          Hi! I&apos;m Sarp, a software developer with extensive experience in
          full-stack development for dynamic web environments.
        </p>
        <p>
          There&apos;s a special place in my heart for graphics programming.
          I&apos;ve always been fascinated by the intersection of art and
          technology, and programming has been a way for me to explore that
          intersection. Lately I&apos;ve been dipping my toes into the world of
          shaders and WebGL, which you can see in <a>some of my projects</a>.
        </p>
      </Typography>
    </Box>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  headshot: {
    mr: 3,
  },
  highlight: {
    fontWeight: 'bold',
    color: 'purpleLight',
  },
  bodyText: {},
};

export default AboutMe;
