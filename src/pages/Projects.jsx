import { Box, Typography } from '@mui/material';

import { PROJECTS } from '../constants/content';

const Projects = () => {
  return (
    <Box>
      <Typography variant="h1">Projects</Typography>
      {Object.values(PROJECTS).map((project) => (
        <Box key={project.id}>
          <Typography variant="h3">{project.title}</Typography>
          <Typography variant="body1">{project.description}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Projects;
