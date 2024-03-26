import { Box } from '@mui/material';
import { PROJECTS } from '@/constants';
import { PageContainer, ProjectTile } from '@/components';

// TODO: do 2 columns here
const Projects = () => {
  return (
    // {/* <Box sx={styles.indexContainer}>Index</Box> */}
    <PageContainer>
      <Box sx={styles.itemListContainer}>
        {PROJECTS.map((prj) => (
          <ProjectTile key={prj.id} project={prj} />
        ))}
      </Box>
    </PageContainer>
  );
};

const styles = {
  itemListContainer: {
    display: 'grid',
    // flexDirection: 'column',
    // gridTemplateColumns: '50% 50% !important',
  },
};

export default Projects;
