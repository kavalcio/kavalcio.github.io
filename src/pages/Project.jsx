import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

// TODO: do i need this page? delete if not
const Project = () => {
  const params = useParams();
  return <Box>Project {params.projectId}</Box>;
};

export default Project;
