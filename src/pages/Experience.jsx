import { Box, Typography } from '@mui/material';

import { Button, ExperienceTile, PageContainer } from '@/components';
import { EXPERIENCE } from '@/constants';

// TODO: add link to full resume here?
// TODO: add education here?
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
      <Button href="/resume.pdf" target="_blank">
        View full resume
      </Button>
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
