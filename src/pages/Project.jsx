import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

const Project = () => {
  const params = useParams();
  return <Box>Project {params.projectId}</Box>;
};

export default Project;
