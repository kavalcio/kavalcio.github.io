import { Box, Typography } from '@mui/material';

import { EXPERIENCE, PROJECTS } from '@/constants';
import {
  ExperienceTile,
  ProjectTile,
  ContactForm,
  ContactIcons,
} from '@/components';

const Home = () => {
  return (
    <Box sx={styles.pageContainer}>
      <Typography variant="h1">about me</Typography>
      <Typography variant="h1">experience</Typography>
      <Box sx={styles.sectionContainer}>
        {EXPERIENCE.map((exp) => (
          <ExperienceTile key={exp.id} experience={exp} />
        ))}
      </Box>
      <Typography variant="h1">projects</Typography>
      <Box sx={styles.sectionContainer}>
        {/* <Box sx={styles.indexContainer}>Index</Box> */}
        <Box sx={styles.itemListContainer}>
          {PROJECTS.map((prj) => (
            <ProjectTile key={prj.id} project={prj} />
          ))}
        </Box>
      </Box>
      <Typography variant="h1">contact</Typography>
      <ContactForm />
      <ContactIcons />
    </Box>
  );
};

const styles = {
  pageContainer: {
    mt: 10,
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
