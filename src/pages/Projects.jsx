import { Box, Typography } from '@mui/material';
import { PROJECTS } from '@/constants';
import { PageContainer, ProjectTile } from '@/components';

// TODO: do 2 columns here
const Projects = () => {
  return (
    // {/* <Box sx={styles.indexContainer}>Index</Box> */}
    <PageContainer>
      <Typography variant="h2" sx={styles.title}>
        projects
      </Typography>
      <Box sx={styles.itemListContainer}>
        {PROJECTS.map((prj) => (
          <ProjectTile key={prj.id} project={prj} />
        ))}
      </Box>
    </PageContainer>
  );
};

const styles = {
  itemListContainer: (theme) => ({
    display: 'grid',
    gridTemplateColumns: '33% 33% 33%',
    [theme.breakpoints.down('lg')]: {
      gridTemplateColumns: '50% 50%',
    },
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
    },
  }),
  title: {
    mb: 5,
  },
};

export default Projects;
