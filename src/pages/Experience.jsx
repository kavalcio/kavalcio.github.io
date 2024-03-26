import { Box, Typography } from '@mui/material';
import { ExperienceTile, PageContainer } from '@/components';
import { EXPERIENCE } from '@/constants';

// TODO; add index here
const Experience = () => {
  return (
    <PageContainer>
      <Typography variant="h2" sx={styles.title}>
        experience
      </Typography>
      <Box sx={styles.itemListContainer}>
        {EXPERIENCE.map((exp) => (
          <ExperienceTile key={exp.id} experience={exp} />
        ))}
      </Box>
    </PageContainer>
  );
};

const styles = {
  itemListContainer: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 900,
  },
  title: {
    mb: 5,
  },
};

export default Experience;
